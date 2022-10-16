import User from "./User";

const Users = ({ searchResults }) => {
  const usersResults = searchResults.map((user) => (
    <User key={user._id} user={user} />
  ));
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
