import React from "react";
import Button from "./Button";

const SearchBar = ({ users, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(users);

    const filteredUsers = users.filter(
      (person) =>
        person.first_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        person.last_name.toLowerCase().includes(e.target.value.toLowerCase()),
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
