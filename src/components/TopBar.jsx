import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import SearchMUI from "./SearchMUI";

const TopBar = ({ users, setSearchResults }) => {
  return (
    <AppBar
      className='topbar__appbar'
      position='sticky'
      sx={{ borderRadius: "3px" }}
    >
      <Toolbar
        className='topbar__toolbar'
        display='flex'
        justifyContent='space-between'
      >
        <Typography>GPDB</Typography>
        <IconButton className='topbar__icon' size='large' position='start'>
          <LocalPoliceIcon />
        </IconButton>
        <SearchMUI
          className='topbar__search'
          users={users}
          setSearchResults={setSearchResults}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
