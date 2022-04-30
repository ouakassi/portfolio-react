import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoMatch() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <div style={{ display: "flex", padding: "10rem" }}>Sorry nothing here</div>
  );
}
