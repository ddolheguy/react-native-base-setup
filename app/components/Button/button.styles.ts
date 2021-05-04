import { theme } from 'app/theme';
import { TextStyle, ViewStyle } from 'react-native';
import { baseText } from '../Typography/typography.styles';

type Size = 'large' | 'small';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'icon' | 'link';
  size?: Size;
  disabled?: boolean;
}

const defaultContainerStyles: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'stretch',
  borderRadius: 6,
};

const primaryContainer = (size: Size, disabled?: boolean): ViewStyle => ({
  ...defaultContainerStyles,
  backgroundColor: disabled
    ? theme.colours.neutralBlack4
    : theme.colours.highlightPink1,
  borderRadius: 25,
  height: size === 'large' ? 44 : 36,
});

const secondaryContainer = (size: Size, disabled?: boolean): ViewStyle => ({
  ...defaultContainerStyles,
  backgroundColor: theme.colours.white,
  borderColor: disabled
    ? theme.colours.neutralBlack4
    : theme.colours.highlightBlue1,
  borderWidth: 1,
  borderRadius: 25,
  height: size === 'large' ? 44 : 36,
});

const linkContainer = (size: Size): ViewStyle => ({
  ...defaultContainerStyles,
  alignItems: 'flex-start',
  backgroundColor: theme.colours.white,
  height: size === 'large' ? 44 : 36,
});

const iconContainer = (size: Size, disabled?: boolean): ViewStyle => ({
  ...defaultContainerStyles,
  borderColor: disabled
    ? theme.colours.neutralBlack1
    : theme.colours.highlightBlue1,
  borderWidth: 0.5,
  padding: 10,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const baseButtText: TextStyle = {
  ...baseText,
  fontSize: 16,
  lineHeight: 24,
};

const primaryButton: TextStyle = {
  ...baseButtText,
  color: theme.colours.white,
};

const secondaryButton: TextStyle = {
  ...baseButtText,
  color: theme.colours.highlightBlue1,
};

const linkButton: TextStyle = {
  ...baseButtText,
  color: theme.colours.highlightBlue1,
};

const iconButton: TextStyle = {
  ...baseButtText,
};

const iconSpaceContainer: ViewStyle = {
  marginRight: 15,
};

export const styles = {
  getContainer: ({ type, disabled, size }: ButtonProps) => {
    switch (type) {
      case 'primary':
        return primaryContainer(size!, disabled);
      case 'secondary':
        return secondaryContainer(size!, disabled);
      case 'icon':
        return iconContainer(size!, disabled);
      case 'link':
        return linkContainer(size!);
      default:
        throw 'Container Not Implemented';
    }
  },
  getTextStyle: ({ type }: ButtonProps) => {
    switch (type) {
      case 'primary':
        return primaryButton;
      case 'secondary':
        return secondaryButton;
      case 'icon':
        return iconButton;
      case 'link':
        return linkButton;
      default:
        throw 'Text Not Implemented';
    }
  },
  iconSpaceContainer,
};
