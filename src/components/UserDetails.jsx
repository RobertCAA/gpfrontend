import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "./Button";

const UserDetails = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      console.log(params);
      const res = await fetch(`http://localhost:8000/users/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        navigate("/");
      }

      setUser(data);
      setLoading(false);
    };
    fetchUser();
  });
  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h3>{user.username}</h3>
      <p>{user.username}</p>
      <Button
        text='Go Back'
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};

export default UserDetails;
