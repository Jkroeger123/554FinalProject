import React from "react";
import { Typography } from "@mui/material";

function Message({ message, self }) {
  const style = {
    width: "100%",
    display: "flex",
  };

  const messageStyle = {
    width: "min-content",
    maxWidth: "25%",
    borderRadius: "0% 30% 30% 30%",
    backgroundColor: "#e8e8e8",
  };

  const selfStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    marginRight: "16px",
  };

  const selfMessageStyle = {
    width: "min-content",
    maxWidth: "25%",
    borderRadius: "30% 0% 30% 30%",
    backgroundColor: "#e8e8e8",
  };

  return (
    <div style={self ? selfStyle : style}>
      <div style={self ? selfMessageStyle : messageStyle}>
        <Typography sx={{ padding: "16px", overflowWrap: "break-word" }}>
          {message}
        </Typography>
      </div>
    </div>
  );
}

export default Message;
