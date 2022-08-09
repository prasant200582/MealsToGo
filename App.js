import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

function App() {
  return (
    <>
      <RestaurantsScreen />

      <ExpoStatusBar style="auto" />
    </>
  );
}


export default App;
