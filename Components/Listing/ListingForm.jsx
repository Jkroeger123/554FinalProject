import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ListingForm = (props) => {
  const { formTitle, endpoint, username } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({ file: null });

  const onSubmit = async (e) => {
    // TODO: upload Image
    const imageURI =
      "https://www.collinsdictionary.com/images/full/duckling_94339759.jpg";

    // TODO: get school
    const school = "Stevens Institute of Technology";

    // object
    const newListingData = {
      image: imageURI,
      title: title.trim(),
      description: description.trim(),
      price: price,
      madeBy: username.trim(),
      school,
      condition: condition.trim(),
    };

    console.log(newListingData);

    // remove null values from new listing data
    Object.keys(newListingData).forEach(
      (k) => !newListingData[k] && delete newListingData[k]
    );

    let { data } = await axios.post(endpoint, {
      newListingData,
    });

    console.log(data);
  };

  return (
    <Card
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        border: "1px solid #000",
        boxShadow: 24,
        width: "75%",
      }}
    >
      <CardContent>
        <Typography variant="h5" align="center">
          {formTitle}
        </Typography>

        <Container>
          <form>
            <TextField
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              label="Title"
              fullWidth
              margin="normal"
            />
            <TextField
              onChange={(e) => {
                setPrice(parseInt(e.target.value));
              }}
              label="Price"
              fullWidth
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={(e) => {
                setCondition(e.target.value);
              }}
              label="Condition"
              fullWidth
              margin="normal"
            />
            <TextField
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              label="Description"
              multiline
              rows={5}
              fullWidth
              margin="normal"
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="imageUpload"
              type="file"
              onChange={(e) => {
                setImage({ file: e.target.files[0] });
              }}
            />
            <label htmlFor="imageUpload">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#C5C0C0",
                  width: "50%",
                }}
                component="span"
                size="large"
                endIcon={<CloudUploadIcon />}
              >
                <Typography>Upload Image</Typography>
              </Button>
              &nbsp;
              {image.file && image.file.name ? image.file.name : ""}
            </label>
            <br />
            <br />
            <br />
            <Box style={{ textAlign: "center" }}>
              <Button
                style={{ backgroundColor: "#A92C68" }}
                type="submit"
                variant="contained"
                onClick={onSubmit}
              >
                <Typography>Submit</Typography>
              </Button>
            </Box>
          </form>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ListingForm;
