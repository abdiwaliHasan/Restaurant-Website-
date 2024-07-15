import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from "../data/data";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", mt: 2 }}>
        {MenuList.map((menu, index) => (
          <Card sx={{ maxWidth: 345, m: 2 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {menu.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Price: ${menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
