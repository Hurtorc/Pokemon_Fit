// create a react component called Pokemon that renders a card with the pokemon's name, image, and type
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Pokemon(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={props.image}
            tag={props.tag}
            alt={props.alt}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.type}
            </Typography>
        </CardContent>
        </Card>
    );
    }
    
