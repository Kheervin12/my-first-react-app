import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount((prev) => (prev += 1));
  };

  const handDecrement = () => {
    setCount((prev) => (prev -= 1));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    alert(searchInput);
  };

  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="main">
      <form className="first_form" onSubmit={handleSubmission}>
        <input
          type="text"
          placeholder="Type here"
          className="name_input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
				<button type="submit" className="submit_button" onClick={handleSubmission}>Search Name</button>
      </form>
      <div>Counter = {count}</div>
      <div className="button-div">
        <button onClick={handleIncreament} className="button1">
          Add Count
        </button>
        <button onClick={handDecrement} className="button2">
          Remove Count
        </button>
      </div>
    </div>
  );
};

export default Counter;
