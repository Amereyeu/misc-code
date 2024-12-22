

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import AllArticles from "./AllArticles";
import Article from "./Article";

export default function PageSwap() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" >
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AllArticles />} />
        <Route path="/post/:id" element={<Article />} />
      </Routes>
    </AnimatePresence>
  );
}
