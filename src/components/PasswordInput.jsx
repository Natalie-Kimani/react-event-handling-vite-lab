// PasswordInput component
// This component handles tracking when a user types in the password field.
// Connected to: App component

function PasswordInput() {

  // Event handler for tracking typing in the password field
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <h2>Password Input</h2>

      {/* Password input field */}
      <input
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
    </div>
  );
}

export default PasswordInput;