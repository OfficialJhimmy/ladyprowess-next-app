"use client";

import React from "react";
import styles from "./topmenu.module.css";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import SupportButton from "../Button/SupportButton";
import logo from "../../../public/Logo2.png";
import Link from "next/link";
import DropDownMenu from "../DropdownMenu/DropdownMenu";

function Topmenu() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.show_desktop}>
        <div className={styles.home_max_width}>
          <div className={styles.topBar}>
            <div className={styles.Container_topmenu}>
              <div className={styles.displayDesktop}>
                <div className={styles.topbarbody}>
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="Ladyprowess logo"
                      style={{ cursor: "pointer" }}
                      width={190}
                      height={90}
                    />
                  </Link>
                </div>

                <div className={styles.linksCont}>
                  <Link href="/">
                    <span
                      className={
                        pathname.startsWith('/')
                          ? styles.linksContLinkActive
                          : styles.linksContLink
                      }
                    >
                      Home
                    </span>
                  </Link>
                  <Link href="/about">
                    <span
                      className={
                        pathname.startsWith('/about')
                          ? styles.linksContLinkActive
                          : styles.linksContLink
                      }
                    >
                      About
                    </span>
                  </Link>

                  <DropDownMenu/>

                  <Link href="/profile">
                    <span
                      className={
                        pathname.startsWith('/profile')
                          ? styles.linksContLinkActive
                          : styles.linksContLink
                      }
                    >
                      Profile
                    </span>
                  </Link>

                  {/* <Link href='/'>
                    <span
                      className={
                        pathname.startsWith('/')
                          ? styles.linksContLinkActive
                          : styles.linksContLink
                      }
                    >
                      Resources
                    </span>
                  </Link> */}

                  <a
                    href="https://ladyprowessblog.com.ng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "18px"
                    }}
                  >
                    Blog
                  </a>

                  <SupportButton
                    type="button"
                    txtColor="#507B80"
                    pd="7px"
                    br="7px"
                    fs="14px"
                    w="120px"
                    bg="#fff"
                    txt="Support Us"
                    border="0px solid white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.show_mobile}>
        <Sidebar />
      </div>
    </>
  );
}

export default Topmenu;
