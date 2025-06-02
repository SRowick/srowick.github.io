import { IconButton, Stack, Typography } from "@mui/material";
import { FaDiscord, FaEnvelope, FaYoutube } from "react-icons/fa";
import FadeInUp from "./FadeInUp";

function About() {
  return (
    <FadeInUp>
      <Stack maxWidth={250}>
        <img
          src="/logo.png"
          alt="Absent Dragon logo"
          style={{ width: "91.5%" }}
        />
        <Typography variant="body2">
          Absent Dragon is an independent game studio based in Australia and
          working with people around the world.
        </Typography>

        <Stack direction="row">
          <IconButton
            aria-label="YouTube"
            href="https://www.youtube.com/@tavernking8695/"
            target="_blank"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(240, 240, 240, 0.1)",
              },
            }}
          >
            <FaYoutube color="#ff0033" size={24} />
          </IconButton>

          <IconButton
            aria-label="Discord"
            href="https://discord.gg/EVu4VxRy4y"
            target="_blank"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(240, 240, 240, 0.1)",
              },
            }}
          >
            <FaDiscord color="#5865F2" size={24} />
          </IconButton>

          <IconButton
            aria-label="Email"
            href="mailto:tavernkingdev@gmail.com"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(240, 240, 240, 0.1)",
              },
            }}
          >
            <FaEnvelope color="#a2a2a2" size={24} />
          </IconButton>
        </Stack>
      </Stack>
    </FadeInUp>
  );
}

export default About;
