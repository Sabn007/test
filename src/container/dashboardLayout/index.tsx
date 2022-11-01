import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <div>
        <Sidebar />
      </div>

      <div className={"admin__main__content__left__side"}>{children}</div>
    </>
  );
};

export default MainLayout;
