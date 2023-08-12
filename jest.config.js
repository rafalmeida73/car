module.exports = {
  preset: "react-native",
  setupFiles: [
    "./jestSetupFile.js",
    "./node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!@react-native|react-native|rn-color-matrices|concat-color-matrices|react-native|@react-native-community|@react-navigation/.*|react-native-size-matters|native-base|@unform/.*)",
  ],
};
