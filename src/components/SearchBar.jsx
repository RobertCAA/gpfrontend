import React from "react";
import Button from "./Button";

const SearchBar = (users, setSearchResults) => {
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(users);

    const filteredUsers = users.filter(
      (person) =>
        person.first_name.includes(e.target.value) ||
        person.last_name.includes(e.target.value),
    );
    setSearchResults(filteredUsers);
  };

  return (
    <form className='search__form' onSubmit={handleSubmit}>
      <input
        className='search__input'
        type='text'
        onChange={handleSearchChange}
      />
      <Button />
    </form>
  );
};

export default SearchBar;
