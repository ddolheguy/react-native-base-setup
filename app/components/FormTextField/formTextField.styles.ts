import { theme } from 'app/theme';
import { TextStyle, ViewStyle } from 'react-native';
import { baseText } from '../Typography/typography.styles';

const parentContainer: ViewStyle = {
  marginBottom: 20,
  width: '100%',
};

const container: ViewStyle = {
  alignSelf: 'stretch',
  borderBottomColor: theme.colours.neutralBlack5,
  borderBottomWidth: 1,
  justifyContent: 'space-between',
  paddingVertical: 8,
  width: '100%',
};

const errorContainer: ViewStyle = {
  paddingLeft: 16,
};

const textInput: TextStyle = {
  ...baseText,
  flex: 1,
};

const textInputContainer: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: 1,
};

const textInputErrorContainer: ViewStyle = {
  borderColor: theme.colours.error,
};

const textLabelContainer: ViewStyle = {
  height: 25,
};

export const styles = {
  container,
  errorContainer,
  parentContainer,
  textLabelContainer,
  textInputContainer,
  textInput,
  textInputErrorContainer,
};
