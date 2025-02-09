import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../../context/ProductContext";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { CircularProgress, Box } from "@mui/material";

function ListProduct() {
  const { product, readProduct, deleteProduct } = useProduct();
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className="cards">
      <div className="container">
        <div className="cardBox">
          {product.length > 0 ? (
            product.map((item, index) => (
              <Card key={index} sx={{ width: "345px" }}>
                <CardMedia
                  component="img"
                  alt="user image"
                  image={item.image}
                  sx={{ objectFit: "cover", height: "200px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {`${item.name}  ${item.lastName}`}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.phoneNumber}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => deleteProduct(item.id)}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>

                  <Button variant="contained" endIcon={<SendIcon />}>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Box
              sx={{
                margin: "0 auto",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </div>
      </div>
    </div>
  );
}
export default ListProduct;
