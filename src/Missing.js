import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Missing() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>🚫 404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button 
        onClick={() => navigate('/')} 
       >
        Go Back To Home Page
      </button>
    </div>
  );
}
