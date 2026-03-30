import { ThemeProvider } from "@react-navigation/native";
import React from "react";
import { useTheme } from "./hook";

type ThemeProviderComponentProps = {
  children: React.ReactNode;
};

const ThemeProviderComponent: React.FC<ThemeProviderComponentProps> = ({
  children,
}) => {
  const theme = useTheme();

  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
