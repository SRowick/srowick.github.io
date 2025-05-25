import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Project } from "../types/Project";
import { useNavigate } from "react-router-dom";
import FadeInUp from "./FadeInUp";

function GameCard({ project }: { project: Project }) {
  const navigate = useNavigate();
  const siteBtnColor = "#66bff3";
  const storeBtnColor = project.released ? "#75b022" : siteBtnColor;

  return (
    <FadeInUp>
      <Card
        sx={{
          maxWidth: 345,
          color: "#e3e4e5",
          backgroundColor: "#171a21",
          borderRadius: "12px",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
          "&:hover": {
            boxShadow: "0px 0px 15px rgba(240, 240, 240, 0.1)",
          },
        }}
      >
        <CardMedia
          component="img"
          alt="Header capsule image"
          height="160px"
          image={`/projects/${project.page}.jpg`}
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            {project.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              minHeight: "60px", // At least 3 lines to maintain card height consistency
            }}
          >
            {project.shortDesc}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: "8px 16px 16px",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(`/${project.page}`)}
            sx={{
              color: siteBtnColor,
              borderColor: siteBtnColor,
              fontWeight: "600",
              "&:hover": {
                backgroundColor: siteBtnColor,
                color: "white",
                borderColor: siteBtnColor,
              },
            }}
          >
            SITE
          </Button>
          <Button
            variant="outlined"
            size="small"
            href={`https://store.steampowered.com/app/${project.steamId}/`}
            target="_blank"
            sx={{
              color: storeBtnColor,
              borderColor: storeBtnColor,
              fontWeight: "600",
              "&:hover": {
                backgroundColor: storeBtnColor,
                color: "white",
                borderColor: storeBtnColor,
              },
              "&:visited:hover": {
                color: "white",
              },
            }}
          >
            {project.released ? "BUY" : "WISHLIST"}
          </Button>
        </CardActions>
      </Card>
    </FadeInUp>
  );
}

export default GameCard;
