import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

const ListingForm = (props) => {
  const { formTitle, apiRoute, username } = props;

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
              // onChange={}
              label="Title"
              fullWidth
              margin="normal"
            />
            <TextField
              // onChange={}
              label="Price"
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              // onChange={}
              label="Condition"
              fullWidth
              margin="normal"
            />
            <TextField
              // onChange={}
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
              multiple
              type="file"
            />
            <label htmlFor="imageUpload">
              <Button
                variant="contained"
                style={{ backgroundColor: "#C5C0C0" }}
                component="span"
                endIcon={<UploadIcon />}
              >
                <Typography>Upload Image</Typography>
              </Button>{" "}
              {image ? image : ""}
            </label>
            <br />
            <br />
            <Box style={{ textAlign: "center" }}>
              <Button
                style={{ backgroundColor: "#A92C68" }}
                type="submit"
                variant="contained"
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
