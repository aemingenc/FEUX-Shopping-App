import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = ({ product, onAdd }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="product photo"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="h6" pl={1} color="initial">
            {product.price} $
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{}} size="small" onClick={() => onAdd(product)}>
            Sepete Ekle
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
