import { FontAwesome } from "@expo/vector-icons";
import { TextInput, TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  name: string;
  onChangeText?: (value: string) => void;
  icon?: keyof typeof FontAwesome.glyphMap;
}

export interface InputStylesProps {
  hasIcon: boolean;
  ref: React.MutableRefObject<TextInput>;
}
