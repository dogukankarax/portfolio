import { Colors } from "./ColorPalette";

export const lightTheme = {
  ...Colors,
  mode: "light",
  background: Colors.SnowStorm[100],
  background2: Colors.SnowStorm[200],
  background3: Colors.SnowStorm[300],
  background4: Colors.SnowStorm[400],
  text: Colors.PolarNight[100],
};

export const darkTheme = {
  ...Colors,
  mode: "dark",
  background: Colors.PolarNight[100],
  background2: Colors.PolarNight[200],
  background3: Colors.PolarNight[300],
  background4: Colors.PolarNight[400],
  text: Colors.SnowStorm[400],
};
