// this should container post name, thumbnail of image, username and display total radio liked elements
import Link from "next/link";
import Image from 'next/image'

import styles from "./styles.module.css";

const postContainer = () => {
    return (
        <div>
      <div className="title"></div>
      <div className="img-container"></div>
      <div className="username"></div>
      </div>
    );
  };
  
  export default postContainer;