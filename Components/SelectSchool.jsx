import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import schoolObject from "../Utils/schools";

function SelectSchool({ setSchool }) {
  return (
    <Autocomplete
      id="school-select"
      sx={{ width: 500 }}
      options={schoolObject}
      autoHighlight
      onChange={(e) => setSchool(e.target.innerText)}
      getOptionLabel={(option) => option.institution}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.institution}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Choose a School" />
      )}
    />
  );
}

export default SelectSchool;
