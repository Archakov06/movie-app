import React from "react";
import { Home } from "./pages/Home";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/FullMovie";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Index />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
