jest.mock("@expo/vector-icons/FontAwesome", () => "lock");

jest.mock("react-native-paper", () => {
  const RealModule = jest.requireActual("react-native-paper");
  const MockedModule = {
    ...RealModule,
    Checkbox: () => "",
  };
  return MockedModule;
});
