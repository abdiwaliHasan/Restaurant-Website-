import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API or display a success message)
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          mx: 5,
          p: 2,
          textAlign: "center",
          "& h4": {
            marginBottom: 2,
          },
          "& form": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          "& .MuiTextField-root": {
            marginBottom: 2,
            width: "300px",
          },
          "& .MuiButton-root": {
            marginTop: 2,
          },
        }}
      >
        <Typography variant="h4">Contact Us</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default Contact;
