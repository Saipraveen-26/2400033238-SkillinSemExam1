import { useState } from "react";

export default function StudentForm() {
  const [data, setData] = useState({ name: "", age: "", class: "" });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Name: ${data.name}\nAge: ${data.age}\nClass: ${data.class}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Student Form</h3>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="class" placeholder="Class" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
