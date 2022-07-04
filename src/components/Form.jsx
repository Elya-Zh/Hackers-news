import React from "react";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          t
          ype="text"
          onChange={handleChange}
          placeholder="Search hot news.."
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Form;
