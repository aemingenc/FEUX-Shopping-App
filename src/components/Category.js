import { Autocomplete, Checkbox, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/thunks/appThunks";
import "./Category.css";

const Category = ({ selectedCategories, setSelectedCategories }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryPromise = dispatch(getCategories());

    categoryPromise.then((data) => setCategories(data?.data || []));
  }, [dispatch]);

  const handleChange = (event) => {
    setSelectedCategories((prev) => {
      return { ...prev, [event.target.name]: event.target.checked };
    });
  };

  return (
    <div className="container-search">
      <Autocomplete
        className="checkboxes"
        options={categories}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <div className="option">
            {" "}
            <li {...props} className="li">
              <Checkbox
                className="checkbox"
                onChange={handleChange}
                style={{ marginRight: 8, width: 50 }}
                checked={selectedCategories[option] || false}
                name={option}
              />
              {option}
            </li>
          </div>
        )}
        style={{ width: 200 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select a category"
            placeholder="Category"
          />
        )}
      />
    </div>

    // ------------- Another Way ---------------------------
    // <FormGroup>
    //   {categories.map((category) => (
    //     <FormControlLabel
    //       key={category}
    //       control={
    //         <Checkbox
    //           checked={selectedCategories[category] || false}
    //           onChange={handleChange}
    //           name={category}
    //         />
    //       }
    //       label={category}
    //     />
    //   ))}
    // </FormGroup>
  );
};

export default Category;
