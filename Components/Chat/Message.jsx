import React from "react";
import { Typography } from "@mui/material";

function Message({ message, self }) {
  const style = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    display: "flex",
  };

  const selfStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    display: "flex",
    flexDirection: "row-reverse",
  };

  const messageStyle = {
    borderRadius: "20px 20px 20px 0px",
    padding: "16px",
    backgroundColor: "#949494",
    maxWidth: "20vw",
  };

  const selfMessageStyle = {
    borderRadius: "20px 20px 0px 20px",
    padding: "16px",
    backgroundColor: "#949494",
    maxWidth: "40vw",
  };

  return (
    <div style={self ? selfStyle : style}>
      <div style={self ? selfMessageStyle : messageStyle}>
        <Typography
          variant="p"
          sx={{
            fontSize: "28px",
            overflowWrap: "break-word",
            color: "white",
          }}
        >
          {message}
        </Typography>
      </div>
    </div>
  );
}

export default Message;
