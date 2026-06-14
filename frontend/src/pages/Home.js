import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "../components/ProductCard";

import "../styles/Home.css";

function Home({ addToCart }) {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => {

        setProducts(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

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