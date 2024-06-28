"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[30px] h-[30px] object-contain pt-3"
      />
      <img
        src="/virtualPerspective-logo.png"
        alt="virtualPerspective-logo"
        className="w-[100px] h-[100px] object-contain"
      />

      <img
        src="/menu.svg"
        alt="menu"
        className="w-[30px] h-[30px] object-contain pt-3"
      />
    </div>
  </motion.nav>
);

export default Navbar;
