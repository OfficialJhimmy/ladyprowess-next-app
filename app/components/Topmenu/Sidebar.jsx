"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IoMdMenu } from "react-icons/io";
import logo from "../../../public/Logo2.png";
import Link from "next/link";
import styles from "./topmenu.module.css";
// import { useNavigate, useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";

import SupportButton from "../Button/SupportButton";
import DropDownMenu from "../DropdownMenu/DropdownMenu";

const useStyles = makeStyles({
  list: {
    width: 350,
    background: "#507b80",
    padding: '30px 15px'
  },
  fullList: {
    width: "auto",
    height: "fit-content",
    background: "#507b80",
  },
});

export default function Sidebar() {
  // const navigation = useNavigate();
  // let location = useLocation();
  const pathname = usePathname();

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <List
        style={{
          padding: "30px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={{
            padding: "0",
           
          }}
        >
          <Link href="/">
            <Image src={logo} width={190} height={90} alt="Logo of ladyprowess" />
          </Link>
        </ListItem>

        <div
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={
            {
              marginBottom: '20px'
            }
          }
        >
          <Link
            href="/"
            className={
              pathname.startsWith("/")
                ? styles.linksContLinkActive
                : styles.linksContLink
            }
          >
            Home
          </Link>
        </div>

        <div
          style={
            {
              marginBottom: '20px'
            }
          }
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <Link
            href="/about"
            className={
              pathname.startsWith("/about")
                ? styles.linksContLinkActive
                : styles.linksContLink
            }
          >
            About Us
          </Link>
        </div>

         <DropDownMenu/> 

        <div
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={
            {
              marginBottom: '20px'
            }
          }
        >
          <Link
            href="/profile"
            className={
              pathname.startsWith("/profile")
                ? styles.linksContLinkActive
                : styles.linksContLink
            }
          >
            Profile
          </Link>
        </div>

        {/* <div
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={
            {
              marginBottom: '20px'
            }
          }
        >
          <Link
            href="/"
            className={
              pathname.startsWith("/")
                ? styles.linksContLinkActive
                : styles.linksContLink
            }
          >
            Resources
          </Link>
        </div> */}

        {/* <Divider /> */}

        <div
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={
            {
              marginBottom: '20px'
            }
          }
        >
          <a
            href="https://ladyprowessblog.com.ng/"
            target="_blank"
            rel="noreferrer"
            className={
              
                styles.linksContLink
            }
          >
            Blog
          </a>
        </div>

        <ListItem
         style={{
          padding: "0",
         
        }}>
          <SupportButton
            type="button"
            txtColor="#507b80"
            pd="6px"
            br="5px"
            fs="16px"
            w="120px"
            bg="#fff"
            hoverBG=""
            txt="Support Us"
            fw="500"
            border="1px solid fff"
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={styles.sideBarDrawer}>
            <IoMdMenu
              onClick={toggleDrawer(anchor, true)}
              style={{ fontSize: "30px" }}
            >
              {anchor}
            </IoMdMenu>
            
              <Image src={logo} alt="Ladyprowess logo"/>
           
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
