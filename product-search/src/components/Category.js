import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/thunks/appThunks";

const Category = ({ selectedCategories, setSelectedCategories }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryPromise = dispatch(getCategories());

    categoryPromise.then((data) => setCategories(data?.data || []));
  }, [dispatch]);
  console.log("useess");
  // if (loading) return <>Loading...</>

  const handleChange = (event) => {
    setSelectedCategories((prev) => {
      return { ...prev, [event.target.name]: event.target.checked };
    });
  };

  return (
    <FormGroup>
      {categories.map((category) => (
        <FormControlLabel
          key={category}
          control={
            <Checkbox
              checked={selectedCategories[category] || false}
              onChange={handleChange}
              name={category}
            />
          }
          label={category}
        />
      ))}
    </FormGroup>
  );
};

export default Category;
