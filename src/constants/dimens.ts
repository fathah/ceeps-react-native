import {Dimensions} from 'react-native';

export const size = {
  xxs: 4,
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14,
  xl: 16,
  xl2: 18,
  xl3: 20,
  xl4: 24,
  xl5: 48,
};

export const lineHeight = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 22,
  xl2: 24,
  xl3: 26,
  xl4: 30,
  xl5: 54,
};

export const appContainer = {
  standardButtonSize: 52,
  standardCheckBoxSize: 25,
  standardTextSize: size.lg,
  standardRadius: size.md,
  standardSpacing: 40,
  horizontalPadding: size.xl2,
  topContainerFlex: 0.85,
  bottomContainerFlex: 0.15,
  questionnaireTopFlex: 0.8,
  questionnaireBottomFlex: 0.2,
  smallImageSize: size.md,
  dotSize: size.xs,
};

export const SCREEN_WIDTH = Dimensions.get('window');
