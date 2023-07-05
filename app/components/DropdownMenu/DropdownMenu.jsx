"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DropDownMenu() {
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLinkClick = (link) => {
    setAnchorEl(null);
    navigate(`/${link}`);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleClick}
        style={{
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "19px",
          color: "#141811",
          display: "flex",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <span style={{
            color: "#fff"
        }}>Services</span>
        <span >
          <BiChevronDown fill="#fff"/>
        </span>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
       
        <div>
          <Link href="/services/academic-writing">Academic Writing</Link>
        </div>
        <div>
          <Link href="/services/blog-post">Blog Post</Link>
        </div>
        <div>
          <Link href="/services/content-marketing">Content Marketing</Link>
        </div>
        <div>
          <Link href="/services/custom-services">Custom Services</Link>
        </div>
        <div>
          <Link href="/services/seo-management">SEO Management</Link>
        </div>
        <div>
          <Link href="/services/technical-writing">Technical Writing</Link>
        </div>
      </Menu>
    </div>
  );
}
