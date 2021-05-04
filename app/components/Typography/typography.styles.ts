import { theme } from 'app/theme';
import { TextStyle } from 'react-native';

export type AlignTypes = 'center' | 'left' | 'right' | 'justify';

export type TypographyTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'body';

const baseStyle: TextStyle = {
  letterSpacing: 0,
};

const baseHeadline: TextStyle = {
  ...baseStyle,
  color: theme.colours.neutralBlack1,
};

export const baseText: TextStyle = {
  ...baseStyle,
  color: theme.colours.neutralBlack1,
  fontSize: 16,
  lineHeight: 22,
};

const h1: TextStyle = {
  ...baseHeadline,
  fontSize: 38,
  lineHeight: 44,
};

const h2: TextStyle = {
  ...baseHeadline,
  fontSize: 30,
  lineHeight: 36,
};

const h3: TextStyle = {
  ...baseHeadline,
  fontSize: 24,
  lineHeight: 28,
};

const h4: TextStyle = {
  ...baseHeadline,
  fontSize: 20,
  lineHeight: 28,
};

const h5: TextStyle = {
  ...baseHeadline,
  fontSize: 16,
  lineHeight: 20,
};

const h6: TextStyle = {
  ...baseHeadline,
  fontSize: 14,
  lineHeight: 18,
};

const h7: TextStyle = {
  ...baseHeadline,
  fontSize: 12,
  lineHeight: 16,
};

const body: TextStyle = {
  ...baseText,
  color: theme.colours.neutralBlack1,
};

const center: TextStyle = {
  textAlign: 'center',
};

const left: TextStyle = {
  textAlign: 'left',
};

const right: TextStyle = {
  textAlign: 'right',
};

const justify: TextStyle = {
  textAlign: 'justify',
};

const textStyle = (
  type: TypographyTypes,
  align: AlignTypes,
  color?: string,
  marginBottom?: number,
): TextStyle[] => {
  const styleOptions = {
    center,
    left,
    right,
    justify,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    body,
  };

  return [
    styleOptions[type],
    styleOptions[align],
    color ? { color } : {},
    marginBottom ? { marginBottom } : {},
  ];
};

export const styles = {
  textStyle,
};
