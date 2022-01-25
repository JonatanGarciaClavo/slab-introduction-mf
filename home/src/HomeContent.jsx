import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProducts, currency } from "./products";
import { addToCart } from "cart/cart";
import { useLoggedIn } from "auth/auth";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <div className="shadow-md" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="flex my-4 mx-2">
            <div className="flex-grow font-bold mr-2 text-2xl">
              <Link to={`/product/${product.id}`}>
                {product.name}
              </Link>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm my-4 mx-2">{product.description}</div>
          {loggedIn && (
            <div className="text-right mb-2 mx-2">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
