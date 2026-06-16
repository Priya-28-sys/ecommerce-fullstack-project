import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "../components/ProductCard";

import "../styles/Home.css";

function Home({ addToCart }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {

    axios
      .get("https://ecommerce-backend-olc1.onrender.com/api/products/")
      .then((response) => {

        setProducts(response.data);
        setLoading(false);

      })
      .catch((error) => {

        console.log(error);
        setError("Failed to fetch products");
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (

    <div className="container">

      <h1>
        E-Commerce Store
      </h1>

      <input

        type="text"

        placeholder="Search products..."

        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }

        className="search-input"
      />

      <h2>
        Products Count:
        {products.length}
      </h2>

      <div className="products-container">

        {
          products
            .filter((product) =>

              product.name
                .toLowerCase()
                .includes(search.toLowerCase())

            )
            .map((product) => (

              <ProductCard

                key={product.id}

                product={product}

                addToCart={addToCart}
              />

            ))
        }

      </div>

    </div>

  );
}

export default Home;