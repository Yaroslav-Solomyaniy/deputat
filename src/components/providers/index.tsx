import {
  HeroUINativeConfig,
  HeroUINativeProvider,
} from "heroui-native/provider";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import ThemeProviderComponent from "./ThemeProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

const config: HeroUINativeConfig = {
  devInfo: {
    stylingPrinciples: false,
  },
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <GestureHandlerRootView>
      <KeyboardProvider>
        <HeroUINativeProvider config={config}>
          <ThemeProviderComponent>{children}</ThemeProviderComponent>
        </HeroUINativeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
};

export default AppProvider;
