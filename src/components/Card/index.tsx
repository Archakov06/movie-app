import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import React from "react";

import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

type MovieCardProps = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
};

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  imageUrl,
  description,
}) => {
  return (
    <Link className={styles.root} to={`/movie/${id}`}>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.substr(0, 100)}...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
