import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoMatch() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/fdsfd");
    }, 1000);
  }, [navigate]);

  return (
    <div style={{ display: "flex", padding: "10rem" }}>Sorry nothing here</div>
  );
}
