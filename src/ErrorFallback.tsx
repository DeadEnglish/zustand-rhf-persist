import { Box, Button, Text } from "@mrshmllw/smores-react";
import { useNavigate } from "react-router";

interface Props {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    resetErrorBoundary();
    navigate("/");
  };

  return (
    <Box flex alignItems="center" direction="column">
      <Text tag="h1" typo="hero" mb="16px">
        Something went wrong
      </Text>
      {error.message ? <Text>{error.message}</Text> : null}
      <Box mt="16px">
        <Button onClick={handleClick}>Restart the form</Button>
      </Box>
    </Box>
  );
}
