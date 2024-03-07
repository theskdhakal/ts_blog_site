import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <hr />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
