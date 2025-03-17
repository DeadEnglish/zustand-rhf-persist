import { Box, Button, theme } from "@mrshmllw/smores-react";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  return (
    <Box
      flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      style={{ background: theme.colors.mascarpone }}
    >
      <Button onClick={() => navigate("/name")}>Start form</Button>
    </Box>
  );
}
