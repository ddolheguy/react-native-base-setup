import { ViewStyle } from 'react-native';

const screenWrapper: ViewStyle = {
  flex: 1,
};

const screenContainer: ViewStyle = {
  flex: 1,
  marginHorizontal: 16,
};

const scrollCenterContainer: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
};

const scrollTopContainer: ViewStyle = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
};

const parentCenterContainer: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

const parentLeftContainer: ViewStyle = {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
};

const footerContainer: ViewStyle = {
  paddingTop: 5,
  paddingBottom: 16,
};

export const styles = {
  screenContainer,
  screenWrapper,
  scrollCenterContainer,
  scrollTopContainer,
  parentCenterContainer,
  parentLeftContainer,
  footerContainer,
};
