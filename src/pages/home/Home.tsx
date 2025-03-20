import { Button } from "@mrshmllw/smores-react";
import { useNavigate } from "react-router";
import useQuoteStore from "../../store/quote.store";

export function Home() {
  const navigate = useNavigate();
  const uuid = crypto.randomUUID();
  const { createQuote } = useQuoteStore();

  const handleOnClick = () => {
    createQuote(uuid);
    navigate(`/quote/${uuid}/name`);
  };

  return <Button onClick={handleOnClick}>Start form</Button>;
}
