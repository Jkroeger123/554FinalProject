import React, { useState } from "react";
import axios from "axios";
import { validateListing } from "../../Utils/db/schema";

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
  const [errors, setErrors] = useState({
    title: false,
    price: false,
    condition: false,
    description: false,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrors({
      ...errors,
      condition: false,
    });

    // TODO: upload Image
    const imageURI =
      "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg";

    // TODO: get school
    const school = "Stevens Institute of Technology";
    console.log(JSON.stringify(errors));

    // object
    const listingData = {
      image: imageURI,
      title: title.trim(),
      description: description.trim(),
      price,
      madeBy: username.trim(),
      school,
      condition: condition.trim(),
    };

    // remove null values from new listing data
    Object.keys(listingData).forEach(
      (k) => !listingData[k] && delete listingData[k]
    );

    const validationError = validateListing(
      listingData,
      formTitle === "Create a New Listing"
    );

    if (validationError) {
      if (formTitle === "Create a New Listing") {
        const newErrors = {};
        validationError.forEach((e) => {
          newErrors[e.params.missingProperty] = true;
        });
        setErrors({ ...errors, ...newErrors });
      }
      if (formTitle === "Edit Listing") {
        validationError.forEach((e) => {
          setErrors({ ...errors, [e.instancePath.slice(1)]: true });
        });
      }
    } else {
      await axios.post(endpoint, {
        listingData,
      });
    }
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
                {
                  setTitle(e.target.value);
                  setErrors({ ...errors, title: false });
                }
              }}
              label="Title"
              fullWidth
              margin="normal"
              error={errors.title}
              required={formTitle === "Create a New Listing"}
            />
            <TextField
              onChange={(e) => {
                {
                  setPrice(parseInt(e.target.value));
                  setErrors({ ...errors, price: false });
                }
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
              error={errors.price}
              required={formTitle === "Create a New Listing"}
            />
            <TextField
              onChange={(e) => {
                {
                  setCondition(e.target.value);
                  setErrors({ ...errors, condition: false });
                }
              }}
              label="Condition"
              fullWidth
              margin="normal"
              error={errors.condition}
              required={formTitle === "Create a New Listing"}
            />
            <TextField
              onChange={(e) => {
                {
                  setDescription(e.target.value);
                  setErrors({
                    ...errors,
                    description: false,
                  });
                }
              }}
              label="Description"
              multiline
              rows={5}
              fullWidth
              margin="normal"
              error={errors.description}
              required={formTitle === "Create a New Listing"}
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
                <Typography>
                  Upload Image{formTitle === "Create a New Listing" ? "*" : ""}
                </Typography>
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
