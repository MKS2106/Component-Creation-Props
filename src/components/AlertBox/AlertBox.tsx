// Importing the type definition for props from the types file
import type { AlertBoxProps } from "../../types";

//Define AlertBox  component
// Destructuring props from AlertBoxProps type
function AlertBox({type, message, onClose,children}: AlertBoxProps){

    // Define Tailwind CSS classes for different alert types
     const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

    return(
        // Container for the alert box with dynamic styles based on the alert `type`
        <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
            <div className="flex justify-between items-center">
                <h2>{message}</h2>

            {/* If onClose function is provided, show the close button */}
                {onClose && (<button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">X</button>)}
            </div>
          
            {/* Display additional content if children are passed */}
            <p>{children? children: null}</p>
        </div>
    )
}
export default AlertBox; // exporting AlertBox components to be used in another component/function