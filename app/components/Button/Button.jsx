import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

function Button({ title, url }) {
  return (
   
      <Link href={url} className={styles.button__wrapper}>
        <button>
          {title}
        </button>
      </Link>
    
  );
}

export default Button;