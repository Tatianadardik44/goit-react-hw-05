import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите название фильма"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
