import { theme } from 'app/theme';
import { useField } from 'formik';
import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Typography } from '../Typography/Typography';
import { styles } from './formTextField.styles';

type Props = TextInputProps & {
  editable?: boolean;
  name: string;
  label: string;
  rightAccessory?: React.ReactNode;
};

export const FormTextField: React.FC<Props> = ({
  editable = true,
  name,
  label,
  rightAccessory,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <View style={styles.textLabelContainer}>
          {field.value?.length > 0 ? (
            <Typography type="body" color={theme.colours.neutralBlack3}>
              {label}
            </Typography>
          ) : null}
        </View>

        <View
          style={[
            styles.textInputContainer,
            meta.error && meta.touched ? styles.textInputErrorContainer : null,
          ]}>
          <TextInput
            {...rest}
            editable={editable}
            placeholder={label}
            placeholderTextColor={theme.colours.neutralBlack3}
            style={styles.textInput}
            onBlur={field.onBlur(field.name)}
            onChangeText={field.onChange(field.name)}
            value={field.value}
          />
          {rightAccessory ? rightAccessory : null}
        </View>
      </View>
      {meta.error && meta.touched ? (
        <View style={styles.errorContainer}>
          <Typography type="body" align="right" color={theme.colours.error}>
            {meta.error}
          </Typography>
        </View>
      ) : null}
    </View>
  );
};
