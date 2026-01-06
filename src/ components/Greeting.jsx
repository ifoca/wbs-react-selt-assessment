const Greeting = ({ name }) => {
  /* TODO: read `name` from props and render “Hello, <name>!” within a div */
  /* TODO: if no name is provided, render "Hello, stranger!" */
  /* TODO: if name is empty, render "Hello, stranger!" */
  /* TODO: if name is NOT a string, render "Hello???" */

  return (
    <>
      {!name || name === '' ? (
        <div>
          <p>Hello, stranger!</p>
        </div>
      ) : (
        <div>
          <p>Hello{typeof name === 'string' ? `, ${name}!` : '???'}</p>
        </div>
      )}
    </>
  );
};

export default Greeting;
