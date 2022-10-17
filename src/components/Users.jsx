// import User from "./User";
import UserMUI from "./UserMUI";

const Users = ({ searchResults }) => {
  // This should be done in the backend
  const usersResults = searchResults
    .filter((_, index) => index < 10)
    .map((user) => <UserMUI key={user._id} user={user} />);
  const content = usersResults?.length ? (
    usersResults
  ) : (
    <article>
      <p>No users</p>
    </article>
  );

  return <main>{content}</main>;
};

export default Users;
