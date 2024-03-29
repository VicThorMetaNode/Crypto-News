import React, { useEffect, useState } from "react";

//IMPORT FROM ANT DESIGN
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

//IMPORT FROM ROUTER
import { Link } from "react-router-dom";

//IMPORT FROM IMAGES
import icon from "../components/img/avatar.png";

//TOGGLE NAVBAR MENU
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoSucks</Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item
            icon={<HomeOutlined />}
            onClick={() => setActiveMenu(false)}
          >
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item
            icon={<FundOutlined />}
            onClick={() => setActiveMenu(false)}
          >
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item
            icon={<BulbOutlined />}
            onClick={() => setActiveMenu(false)}
          >
            <Link to="/news">Hot News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
