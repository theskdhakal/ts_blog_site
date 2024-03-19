import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <hr />
      <div className="main bg-gray-300">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
