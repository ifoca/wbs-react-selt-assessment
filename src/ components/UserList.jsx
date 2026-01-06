const UserList = ({ users }) => {
  // TODO: If users prop is not provided or is an empty array, render:
  //       <div>No users found.</div>
  // TODO: Otherwise, render a <ul> with one <li> per user
  // TODO: Each <li> should include:
  //       - An <img> with `src` set to user's picture and `alt` set to their name
  //       - The user's name as text
  return (
    <>
      {/* Checks if the prop is an array or if an array is provided but it's empty */}
      {!Array.isArray(users) || users.length === 0 ? (
        <div>No users found.</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.picture} alt={user.name} />
              <p>{user.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserList;
