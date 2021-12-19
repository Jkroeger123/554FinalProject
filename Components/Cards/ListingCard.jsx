import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";
import axios from "axios";
import { auth } from "../../Utils/firebase";

function MediaCard({ data }) {
  const router = useRouter();

  const [idToken, setIdToken] = useState(undefined);
  const [isFavorite, setIsFavorite] = useState(undefined);
  //full heart needs to add listing to favorites db
  //unhearting listing should take it out of favorites db
  //if listing is inactive, don't display it (or something)
  //also, only allow favorites if user is logged in
  
  useEffect(() => {
    const fetch = async () => {
      try {
        let idToken = await auth.currentUser.getIdToken();
        setIdToken(idToken);
      } catch {
        setIdToken(false);
      }
    };
    fetch();
  });

  useEffect(() => {
    const fetch = async () => {
      if (idToken) {
        let resp = await axios.post("/api/user", {
          idToken,
          userID: auth.currentUser.uid,
        });
        if (resp.data.favoriteListings.includes(data.id)) {
          setIsFavorite(true)
        } else {
          setIsFavorite(false);
        }
      }  
    };

    fetch();
  }, [idToken]);
  

  const onFavoritePressed = async () => {
    setIsFavorite((prev) => !prev);

    await axios.post(`/api/setFavorite`, {
      listingId: data.id,
      idToken,
      favorite: !isFavorite,
    });
  };
  
  if (idToken === undefined) {
    return <h1>Loading...</h1>;
  } else if (idToken && isFavorite === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <Card sx={{ maxWidth: 200, position: "relative" }}>
      {isFavorite === undefined ? undefined : <div
        onClick={onFavoritePressed}
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
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>}

      <CardActionArea onClick={() => {
          if (data.active) {
            router.push(`/listing/${data.id}`);
          } else {
            alert("Sorry, this listing is inactive");
          }
        }}>
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
