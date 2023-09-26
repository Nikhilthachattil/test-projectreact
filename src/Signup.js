import React, { useState } from "react";
import "./sign-up-container.css";
function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailName: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <form className="input-cointainer">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="name"
          name="firstName"
          value={formData.firstName}
          onChange={(event) => handleInputChange(event)}
        />
        <label htmlFor="">Name</label>
        <input type="text" placeholder="lastName" name="lastName" />
        <label htmlFor="">Name</label>
        <input type="text" placeholder="email" name="emailName" />
        <label htmlFor="">Name</label>
        <input type="text" placeholder="password" name="password" />
      </form>
      <button className="btn">Signup</button>
    </div>
  );
}

export default Signup;
