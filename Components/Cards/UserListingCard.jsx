import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import { auth } from "../../Utils/firebase";

function MediaCard({ data }) {
  const [isActive, setIsActive] = useState(!data.active);
  //needs to change active value to !active when clicked

  const onActivePressed = async () => {
    setIsActive((prev) => !prev);

    let idToken = await auth.currentUser.getIdToken();
    await axios.post(`/api/listing/toggleActive`, {
      id: data.id,
      idToken,
      active: isActive,
    });
  };

  return (
    <Card sx={{ maxWidth: 200, position: "relative" }}>
      <div
        onClick={onActivePressed}
        style={{
          position: "absolute",
          color: "#A92C68",
          top: "0%",
          right: "0%",
          zIndex: "100",
          marginRight: "16px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        {isActive ? <AddCircleIcon /> : <RemoveCircleIcon />}
      </div>

      <CardActionArea>
        <CardMedia component="img" image={data.image} alt={data.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${data.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.title}
          </Typography>
          <Typography variant="body3" sx={{ color: "#A92C68" }}>
            {data.city}, {data.state}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MediaCard;
