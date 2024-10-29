// ====================================================== //
// ======== simplest way of creating Form routing: ======= //
// ====================================================== //
/* 
import { Form } from "react-router-dom";

function SearchInput() {
  return <Form action="/search">
    <input name="term"/>
  </Form>
  
} */

// ====================================================== //
// ==== more customizable way of programmatic routing: === //
// ====================================================== //

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const nav = useNavigate();
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSubmit} className="border border-b-2">
      <label htmlFor="term">Search</label>
      <input
        name="term"
        type="text"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchInput;
