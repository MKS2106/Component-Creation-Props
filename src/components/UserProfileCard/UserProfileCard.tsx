// Importing the props type definition
import type { UserProfileCardProps } from "../../types";

// Functional component for displaying a user's profile card
//Destructing props from USerProfile card type
function UserProfileCard({
  user, // user object
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">

      {/* Profile card container */}
      <div className="flex flex-col justify-center items-center p-4 bg-green-100 max-w-xl rounded-xl">
        <div className="flex items-center text-center">
          <img src={user.avatarUrl}></img>
        </div>
        <div>
          <p>{user.name}</p>
          {/* Conditionally render email and role based on props */}
          <p>{showEmail ? user.email : null}</p>
          <p>{showRole ? user.role : null}</p>
        </div>

         {/* Edit button and any passed children */}
        <div>
          {onEdit && (
            <button
              onClick={() => onEdit(user.id)}
              className="text-center bg-blue-500 text-white px-24 py-2 rounded-md mt-5"
            >
              Edit Profile
            </button>
          )}
          {children}
        </div>

        {/* Footer info */}
        <footer className="text-sm text-gray-500">Last login: 2 hours ago</footer>
      </div>
    </div>
  );
}

export default UserProfileCard;// exporting UserProfileCard components to be used in another component/function
