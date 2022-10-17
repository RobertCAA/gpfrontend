import { useState } from "react";
import {
  Box,
  Card,
  Avatar,
  Stack,
  Typography,
  IconButton,
  Divider,
  Chip,
  Switch,
} from "@mui/material";
// import RoomIcon from "@mui/icons-material/Room";
// import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const UserMUI = ({ user }) => {
  const [checked, setChecked] = useState(user.active);
  const handleLabel = `Account is ${checked ? "active" : "inactive"}`;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const content = (
    <Card
      className='usermui__card'
      sx={{
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ p: 2, display: "flex" }}>
        <Avatar
          variant='rounded'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIIXky1jRC6RBU3Txq11ZYyREgzx67DWHfHeN5BikE0kZ1Iv_UKPQPXbmO1HjRTQA28c&usqp=CAU'
        />
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {user.location.city}, {user.location.street}
          </Typography>
        </Stack>
      </Box>

      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{ px: 2, py: 1, bgcolor: "background.default" }}
      >
        <Chip label={handleLabel}>
          {/* {user.active === true ? "active" : "inactive"} */}
        </Chip>
        <Switch checked={checked} onChange={handleChange} />
      </Stack>
      <IconButton>
        <Link
          to={`/users/${user._id}`}
          style={{ textDecoration: "none", fontSize: "1rem" }}
        >
          View Details
        </Link>
      </IconButton>
      <Divider />
    </Card>
  );

  return content;
};

export default UserMUI;
