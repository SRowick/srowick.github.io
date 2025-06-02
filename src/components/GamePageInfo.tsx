import { useNavigate } from "react-router-dom";

import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import type { Project } from "../types/Project";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function GamePageInfo({ project }: { project: Project }) {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = Array.from({ length: 6 }).map((_, idx) => ({
    src: `/screenshots/${project.page}/${idx}.jpg`,
  }));

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: "black" }}>
      <Stack maxWidth={646}>
        <img src={`/textHeaders/${project.page}.png`} alt="text header" />

        <iframe
          title={`${project.name} Trailer`}
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          allowFullScreen
          style={{
            border: 0,
            width: "100%",
            aspectRatio: "16/9",
          }}
        />

        <iframe
          src={`https://store.steampowered.com/widget/${project.steamId}`}
          style={{ border: 0 }}
          width="100%"
          height="190px"
        ></iframe>

        <Box sx={{ padding: 2 }}>
          <Typography variant="h3" sx={{ fontFamily: "'Georgia', serif" }}>
            {project.released ? "Want to see more?" : "Sign up for the demo!"}
          </Typography>

          <Typography variant="subtitle1">
            {project.released
              ? "Get notified when we release new games!"
              : "Get notified when we release the free demo for you to try!"}
          </Typography>

          <iframe
            title="Subscribe on Substack"
            src="https://absentdragon.substack.com/embed?teaser=true&show_popout=true"
            width="100%"
            style={{ border: 0 }}
          />
        </Box>

        <Typography variant="subtitle2" color="grey">
          Click an image to view full size
        </Typography>

        <ImageList cols={2} gap={8}>
          {slides.map((slide, idx) => (
            <ImageListItem
              key={idx}
              sx={{ cursor: "pointer" }}
              onClick={() => handleOpenLightbox(idx)}
            >
              <img
                src={slide.src}
                alt={`Screenshot ${idx}`}
                style={{ borderRadius: 8 }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          slides={slides}
          noScroll={{ disabled: true }}
          styles={{ container: { backgroundColor: "black" } }}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 4,
            zoomInMultiplier: 1.5,
            doubleTapDelay: 300,
            keyboardMoveDistance: 50,
          }}
        />

        <Box>{project.longDesc}</Box>

        <IconButton
          onClick={() => navigate(`/`)}
          sx={{
            "& img": {
              width: "46%",
              height: "auto",
              transition: "filter 0.3s",
              filter: "brightness(100%)",
            },
            "&:hover img": {
              filter: "brightness(40%)", // Grey on hover
            },
          }}
        >
          <img src="/logo.png" alt="Absent Dragon Logo" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default GamePageInfo;
