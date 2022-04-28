import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleLightMode } from "../redux/themeSlice";
import { motion } from "framer-motion";

import "@theme-toggles/react/css/InnerMoon.css";
import { InnerMoon } from "@theme-toggles/react";

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const [isToggled, setToggle] = useState(false);
  const theme = useSelector((state) => state.theme.defaultTheme);
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <InnerMoon
        toggled={isToggled}
        toggle={isToggled}
        duration={750}
        onClick={() => {
          if (theme.mode === "light") {
            dispatch(toggleDarkMode());
          }
          if (theme.mode === "dark") {
            dispatch(toggleLightMode());
          }
          setToggle(!isToggled);
        }}
      />
    </motion.div>
  );
};

export default SwitchTheme;
