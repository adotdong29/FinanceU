import { Platform } from "react-native";

// Runtime dispatch so TypeScript always has a concrete module to import.
// Metro will still pick the right platform file at build time.
let Impl: any;

if (Platform.OS === "web") {
  Impl = require("./MapView.web").default;
} else {
  Impl = require("./MapView.native").default;
}

export default Impl;
export type { default as React } from "react";
