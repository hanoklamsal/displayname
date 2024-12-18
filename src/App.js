import { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fullName, setFullname] = useState("");

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };

  const handleLnameChange = (e) => {
    setLname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullname(" " + fname + " " + lname);
  };

  console.log(fname, lname, fullName);

  return (
    <>
      <h4>Full Name Display</h4>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="fname" onChange={handleFnameChange} required />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lname" onChange={handleLnameChange} required />
        <button type="submit">Submit</button>
      </form>

      {fullName && fname && lname && <span>Full Name:{fullName}</span>}
    </>
  );
}

export default App;
