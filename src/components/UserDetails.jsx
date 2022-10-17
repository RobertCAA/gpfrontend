import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

import Button from "./Button";

const UserDetails = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  // Chang to promises and .then
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://gpback.onrender.com/users/${params.id}`);
      const data = await res.json();
      // const data = getUser(params.id);
      if (res.status === 404) {
        navigate("/");
      }

      setUser(data);
      setLoading(false);
    };
    fetchUser();
  }, []);
  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <Paper
      elevation={3}
      outlined
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p>{user.gender}</p>
      <p>{user.telephone}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.iban}</p>
      <p>{user.username}</p>
      <p>{user.active ? "Active" : "Inactive"}</p>
      <Button
        text='Go Back'
        onClick={() => {
          navigate(-1);
        }}
      />
    </Paper>
  );
};

export default UserDetails;
