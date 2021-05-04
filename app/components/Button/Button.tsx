import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { theme } from 'app/theme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ButtonProps, styles } from './button.styles';

type Props = ButtonProps & {
  children?: React.ReactNode;
  onPress: () => void;
  text?: string;
  disabled?: boolean;
  icon?: IconProp;
};

export const Button: React.FC<Props> = ({
  children,
  onPress,
  text,
  disabled,
  icon,
  size = 'large',
  ...rest
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      style={styles.getContainer({ ...rest, size, disabled })}
      onPress={onPress}>
      {icon ? (
        <View style={styles.iconSpaceContainer}>
          <FontAwesomeIcon icon={icon} color={theme.colours.white} size={30} />
        </View>
      ) : null}

      {text ? (
        <Text style={styles.getTextStyle({ ...rest, disabled })}>{text}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
