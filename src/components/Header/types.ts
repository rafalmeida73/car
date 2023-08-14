export interface HeaderProps {
  title: string;
  icons?: Array<{
    name: string;
    onPress: () => void;
  }>;
  backIcon?: boolean;
}
