import React from 'react';
import { Text } from 'react-native';
import { AlignTypes, styles, TypographyTypes } from './typography.styles';

interface Props {
  children: string | React.ReactNode;
  align?: AlignTypes;
  color?: string;
  type: TypographyTypes;
  marginBottom?: number;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

export const Typography: React.FC<Props> = ({
  align = 'left',
  children,
  color,
  type,
  marginBottom,
  numberOfLines,
  ellipsizeMode,
}) => (
  <Text
    style={styles.textStyle(type, align, color, marginBottom)}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}>
    {children}
  </Text>
);
