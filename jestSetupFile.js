jest.mock("@expo/vector-icons/FontAwesome", () => "lock");

jest.mock("react-native-paper", () => {
  const RealModule = jest.requireActual("react-native-paper");
  const MockedModule = {
    ...RealModule,
    Checkbox: () => "",
  };
  return MockedModule;
});

jest.mock("expo-secure-store", () => jest.fn());

export const mockPush = jest.fn();
export const mockBack = jest.fn();
jest.mock("expo-router", () => {
  return {
    useRouter: () => ({
      push: mockPush,
      canGoBack: () => true,
      back: mockBack,
    }),
    useNavigation: () => ({
      addListener: jest.fn(),
    }),
  };
});

jest.mock("react-native-video", () => "ReactNativeVideo");
jest.mock("expo-constants", () => 10);
