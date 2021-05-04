import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from './screenContainer.styles';

interface Props {
  contentVertAlign?: 'center' | 'top';
  contentHorAlign?: 'center' | 'left';
  children: React.ReactNode;
  footer?: React.ReactElement;
}

export const ScreenContainer: React.FC<Props> = ({
  contentVertAlign = 'top',
  contentHorAlign = 'left',
  children,
  footer,
}) => {
  return (
    <View style={styles.screenWrapper}>
      <SafeAreaView style={styles.screenContainer}>
        <KeyboardAwareScrollView
          contentContainerStyle={
            contentVertAlign === 'center'
              ? styles.scrollCenterContainer
              : styles.scrollTopContainer
          }
          showsVerticalScrollIndicator={false}>
          <View
            style={
              contentHorAlign === 'center'
                ? styles.parentCenterContainer
                : styles.parentLeftContainer
            }>
            {children}
          </View>
        </KeyboardAwareScrollView>
        {footer ? <View style={styles.footerContainer}>{footer}</View> : null}
      </SafeAreaView>
    </View>
  );
};
