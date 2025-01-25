import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
function AppLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/blogs");
  }, []);
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default AppLayout;
