import { useParams } from "react-router-dom";
import { projects } from "../data/data-projects";
import type { Project } from "../types/Project";
import GamePageInfo from "../components/GamePageInfo";
import { Box } from "@mui/material";

function GamePage() {
  const { gameId } = useParams<{ gameId: string }>();

  const project: Project | undefined = projects.find(
    (proj) => proj.page === gameId
  );

  if (!project) {
    return <div>This page has been deleted or never existed.</div>;
  }

  return (
    <Box>
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          maskImage:
            "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <img
          src={`/pageBackgrounds/${project.page}.jpg`}
          alt="Background"
          style={{
            height: "auto",
          }}
        />
      </Box>

      {/* Foreground Content */}
      <GamePageInfo project={project} />
    </Box>
  );
}

export default GamePage;
