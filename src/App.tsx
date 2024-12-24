import { useState } from "react";
import "./App.css";
import { useUserStore } from "./store"; // Correct import for your store

function UpdateUserForm() {
  const { username, email, setUsername, setEmail } = useUserStore(); // Using the correct store hook

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

function App() {
  const { username, email, theme, toggleTheme } = useUserStore(); // Using the correct store hook
  const [localTheme, setLocalTheme] = useState(theme); // Using local state for theme switching (optional)

  const handleThemeToggle = () => {
    toggleTheme(); // Use the theme toggler from store
    setLocalTheme(localTheme === "light" ? "dark" : "light"); // Optionally maintain local theme for UI updates
  };

  return (
    <>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
      <div>Current Theme: {theme}</div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <UpdateUserForm />
    </>
  );
}

export default App;
