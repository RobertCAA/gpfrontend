import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchMUI = ({ users, setSearchResults }) => {
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
  const content = (
    <form onSubmit={handleSubmit}>
      <TextField
        id='search-bar'
        className='text'
        onChange={handleSearchChange}
        variant='outlined'
        placeholder='Search user...'
        size='small'
        sx={{ backgroundColor: "whitesmoke" }}
      />
      <IconButton type='submit' aria-label='search'>
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );

  return content;
};

export default SearchMUI;
