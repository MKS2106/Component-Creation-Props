# Component Creation and Props
This is a small reusable component library built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. The library demonstrates reusable UI components such as Alert Boxes, User Profile Cards, and Product Displays.

## The challenge
- Create reusable React components with TypeScript interfaces for props.
- Implement proper prop handling and validation.
- Use component composition effectively.

# Your users should be able to:

- Display alert messages of various types (success, error, info, warning) with a close action.
- View a user profile card with optional fields and editing capabilities.
- View product details (with optional description and stock status), and perform actions like “Add to Cart”.



## Project Structure
src/
  components/
    AlertBox/
      AlertBox.tsx
      AlertBox.test.tsx
    UserProfileCard/
      UserProfileCard.tsx
      UserProfileCard.test.tsx
    ProductDisplay/
      ProductDisplay.tsx
      ProductDisplay.test.tsx
  types/
    index.ts

## Component Requirements

- Alert Box Component
- UserProfileCard Component
- ProductDisplay Component

### 1. Alert Box Component
- Create an AlertBox component that can display different types of alerts (success, error, warning, info) with customizable messages.

### 2. UserProfileCard Component
- Create a UserProfileCard component that displays user information with optional sections

### 3. ProductDisplay Component
Create a ProductDisplay component that shows product information with configurable display options.

## Pre-Requisite 
- Ensure you have a recent LTS (Long-Term Support) version of Node.js installed. Node.js includes npm (Node Package Manager). - You can verify your installation by opening your terminal or command prompt and running:
    " node -v "
    " npm -v "

## How to Run
1. Clone or download the project.
2. Navigate (cd) to the project folder
3. Install Dependencies run "npm install"
4. Start the development server by running "npm run dev"
5. Open the link in browser


## Reflection:
1. How did you handle optional props in your components?
- By makign use of ternary operator in the props.
- Props like children, showEmail, showRole, and onClose were marked as optional. Inside the component, I implemented conditional rendering using ternary operator.

2. What considerations did you make when designing the component interfaces?
- Focused on creating a single shared interface file so that it can be re-used

3. How did you ensure type safety across your components?
- Following strict TYpeScript types/interfaces for all props
- Re-using shared types
- Using default values and rendering when props were not passed

4. What challenges did you face when implementing component composition?
- In the beginign as the interfaces were in a shared components , destructuring the props were little tricky but with practice it got better
- Handling layout issues when different combinations of optional props were used.

