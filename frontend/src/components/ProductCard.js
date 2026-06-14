import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {

  return (

    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <Link to={`/product/${product.id}`}>

        <h2>
          {product.name}
        </h2>

      </Link>

      <p className="price">

        ₹{product.price}

      </p>

      <p>

        {product.description}

      </p>

      <button
        onClick={() => addToCart(product)}
      >

        Add to Cart

      </button>

    </div>

  );
}

export default ProductCard;