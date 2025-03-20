import { Box, Button } from "@mrshmllw/smores-react";
import { useNavigate } from "react-router";

interface Props {
  showBackButton?: boolean;
  primaryButtonText?: string;
}

export const ContinueButtons = ({
  showBackButton = true,
  primaryButtonText = "continue",
}: Props) => {
  const navigate = useNavigate();
  return (
    <Box as="section" flex columnGap="24px">
      {showBackButton && (
        <Button
          type="button"
          secondary
          style={{ flexBasis: "30%" }}
          onClick={() => navigate(-1)}
        >
          back
        </Button>
      )}
      <Button style={{ flexBasis: "70%" }} type="submit">
        {primaryButtonText}
      </Button>
    </Box>
  );
};
