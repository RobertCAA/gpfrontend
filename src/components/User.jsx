import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className='user' onDoubleClick={() => console.log(user.username)}>
      <h3>{user.username}</h3>
      <p>{user.username}</p>
      <p>
        <Link to={`/users/${user._id}`}>View Details</Link>
      </p>
    </div>
  );
};

export default User;
