import { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    axios
      .get(`https://ecommerce-backend-olc1.onrender.com/api/products/${id}/`)
      .then((response) => {

        setProduct(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, [id]);

  if (!product) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="details-container">

      <img
        src={product.image}
        alt={product.name}
        className="details-image"
      />

      <div className="details-content">

        <h1>{product.name}</h1>

        <h2>
          ₹{product.price}
        </h2>

        <p>
          {product.description}
        </p>

      </div>

    </div>

  );
}

export default ProductDetails;