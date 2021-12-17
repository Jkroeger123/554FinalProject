import React, { useState } from "react";
import axios from "axios";
import { validateListing } from "../../Utils/db/schema";
import { makeStyles } from "@mui/styles";
import { useUser } from "../UserContext";

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

const useStyles = makeStyles({
  "update-listing-form": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    width: "75%",
  },
  "new-listing-form": {},
});

const ListingForm = (props) => {
  const styles = useStyles();
  const { formTitle, setListing, setOpen, endpoint } = props;
  const { user } = useUser();
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
      "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/surfing-dog-photo-is-funner-or-funnest-a-real-word-5670-6d512231d0a52079b0c9fbf474f9a6c9@1x.jpg";

    // TODO: get school
    const school = "Stevens Institute of Technology";

    // object
    const listingData = {
      image: imageURI,
      title: title.trim(),
      description: description.trim(),
      price,
      madeBy: user.displayName,
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
      const { data } = await axios.post(endpoint, {
        listingData,
      });

      if (setListing) {
        setListing(data);
      }

      if (setOpen) {
        setOpen(false);
      }
    }
  };

  return (
    <Card
      className={
        styles[
          formTitle === "Edit Listing"
            ? "update-listing-form"
            : "new-listing-form"
        ]
      }
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
