import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className='user' onDoubleClick={() => console.log(user)}>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <Link to={`/users/${user._id}`}>View Details</Link>
    </div>
  );
};

export default User;
