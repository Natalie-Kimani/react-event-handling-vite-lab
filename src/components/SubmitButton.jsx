// SubmitButton component
// This component tracks mouse movement over the submit button.
// Connected to: App component

function SubmitButton() {

  // Event handler for mouse entering button area
  function handleEnter() {
    console.log("Mouse Entering");
  }

  // Event handler for mouse leaving button area
  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <div>
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        Submit Password
      </button>
    </div>
  );
}

export default SubmitButton;