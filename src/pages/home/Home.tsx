import { Button } from "@mrshmllw/smores-react";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate("/name")}>Start form</Button>;
}
