import { Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";
import { Name } from "./pages/name/Name";
import { Address } from "./pages/address/Address";
import { FinalSubmit } from "./pages/final-submit/final-submit";

export function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote/:quoteId/name" element={<Name />} />
      <Route path="/quote/:quoteId/address" element={<Address />} />
      <Route path="/quote/:quoteId/final-submit" element={<FinalSubmit />} />
    </Routes>
  );
}
