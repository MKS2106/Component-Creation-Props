// Import custom components AlertBox, ProductDisplay, UserProfileCard
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
function App() {
  // User object with profile details
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl:
      "https://gravatar.com/avatar/cab8d32f0c14ded64882c8548a7bc6ce?s=400&d=robohash&r=x",
  };
   // Product object with details about a product(laptop)
  const product = {
     id: "1000",
  name: "Laptop",
  price: Number(100),
  description: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM",
  imageUrl:"https://picsum.photos/200/300?image=0",
  inStock: true
  }
  
  return (
    <>
      <h1>Component Library</h1>
      {/* Alert box for success message */}
      <AlertBox
        type="success"
        message="Profile Updated"
        onClose={() => alert("AlertClosed")}
        children={"Please continue working"}
      />

      {/* Alert box for error message */}
      <AlertBox
        type="error"
        message="There is an error while updating the profile "
        onClose={() => alert("AlertClosed")}
        children={"Try again later"}
      />

      {/* Alert box for warning */}
      <AlertBox
        type="warning"
        message="More informaiton needed"
        onClose={() => alert("AlertClosed")}
      />

      {/* Alert box for info message */}
      <AlertBox
        type="info"
        message="Welcome"
        onClose={() => alert("AlertClosed")}
      />

       {/* Call the 'User profile card' component with user info, boolena values for email and role shown */}
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      />

      {/* Call the 'Product display' component with product information, boolean values for description and stock status */}
      <ProductDisplay product={product}
      showDescription={true}
      showStockStatus={product.inStock}
      onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      
      />

     
    </>
  );
}

export default App; // Trigger the App script
