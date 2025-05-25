import About from "../components/About";
import { Container, Grid, Stack, Box } from "@mui/material";
import GameInfo from "../components/GameCard";
import { projects } from "../data/data-projects";
import type { Project } from "../types/Project";

function Homepage() {
  return (
    <Container sx={{ py: 4 }}>
      <Grid
        container
        spacing={4}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <About />
        <Box>
          <Stack>
            {projects.map((project: Project) => (
              <GameInfo project={project} />
            ))}
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
}

export default Homepage;
