import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useProduct } from "../../context/ProductContext";

const initialValue = {
  name: "",
  lastName: "",
  image: "",
  phoneNumber: "",
};

function AddProduct() {
  const { addProduct } = useProduct();
  const [inputValues, setInputValues] = useState(initialValue);

  const checkInput = (e) => {
    if (e.target.name === "phoneNumber") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  };

  const sendData = () => {
    if (
      inputValues.image === "" ||
      inputValues.name === "" ||
      inputValues.lastName === "" ||
      inputValues.phoneNumber === ""
    ) {
      alert("Fill in the field!!");
      return;
    }
    let obj = { ...inputValues, id: Date.now() };
    addProduct(obj);
    setInputValues(initialValue);
  };

  return (
    <div className="inputBox">
      <div className="container">
        <div className="content">
          <Box
            component="form"
            sx={{
              width: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
            noValidate
            autoComplete="off"
          >
            <h1>Add Product</h1>
            <TextField
              onChange={(e) => checkInput(e)}
              value={inputValues.name}
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
            />
            <TextField
              onChange={(e) => checkInput(e)}
              value={inputValues.lastName}
              fullWidth
              label="LastName"
              variant="outlined"
              name="lastName"
            />
            <TextField
              onChange={(e) => checkInput(e)}
              value={inputValues.image}
              fullWidth
              label="Image"
              variant="outlined"
              name="image"
            />
            <TextField
              onChange={(e) => checkInput(e)}
              value={inputValues.phoneNumber}
              fullWidth
              label="PhoneNumber"
              variant="outlined"
              name="phoneNumber"
              type="number"
            />

            <Button
              sx={{ width: "150px", marginBlock: "15px" }}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendData}
            >
              Create
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
