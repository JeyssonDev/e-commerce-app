import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
