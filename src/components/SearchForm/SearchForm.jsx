import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./SearchForm.module.css"
const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [params, setParams] = useSearchParams();
 const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      alert("Enter movie title");
      return;
    }
    setParams({ query: inputValue });
   
    setInputValue(""); 
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
       
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className={css.btn}>Search</button>
    </form>
  );
};

export default SearchForm;
