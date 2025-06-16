// Importing the props type for the ProductDisplay component
import type { ProductDisplayProps } from "../../types";

// Functional component that displays product details 
// Destructuring props from ProductDisplay type
function ProductDisplay({
  product, //product object
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    // <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center p-4 bg-pink-100 max-w-xl rounded-xl text-center mx-auto">
        <h2>Product Display</h2>
        <div className="mx-auto mb-4">
          <img src={product.imageUrl}></img>
        </div>
        <div>
          {product.name}
          <p>Price: {product.price}$</p>

          {/* Conditional Product Description */}
          <p className="text-purple-800">
            {showDescription ? product.description : null}{" "}
          </p>

            {/* Conditional Stock Status */}
          <p className="text-orange-500">
            {showStockStatus ? "In Stock" : "Not in Stock"}
          </p>
        </div>

        {/* Add to Cart Button and Optional Children */}
        <div>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(product.id)}
              className="text-center bg-blue-500 text-white px-24 py-2 rounded-md mt-5"
            >
              Add to cart
            </button>
          )}
          {children}
        </div>
      </div>
    // </div>
  );
}
export default ProductDisplay;// exporting ProductDisplay components to be used in another component/function
