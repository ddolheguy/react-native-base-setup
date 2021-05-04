import { useNavigation } from '@react-navigation/native';
import { Button } from 'app/components/Button/Button';
import { Form } from 'app/components/Form/Form';
import { FormTextField } from 'app/components/FormTextField/FormTextField';
import { ScreenContainer } from 'app/components/ScreenContainer/ScreenContainer';
import { Typography } from 'app/components/Typography/Typography';
import { onLogin } from 'app/redux/authentication/authenticationAction';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { LoginRequest } from 'types/interface';
import { authenticationSchema } from './authentication.schema';

export const Authentication: React.FC = () => {
  const { t } = useTranslation();
  const dispatcher = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      title: t('authentication.screen.title'),
    });
  }, [navigation, t]);

  const handleLoginRequest = async (request: LoginRequest) => {
    dispatcher(onLogin.request(request));
  };

  return (
    <Form
      initialValues={{
        emailAddress: '',
        password: '',
      }}
      validationSchema={authenticationSchema}
      validateOnMount
      onSubmit={(values) =>
        handleLoginRequest({
          emailAddress: values.emailAddress,
          password: values.password,
        })
      }>
      {({ submitForm, isValid }) => (
        <>
          <ScreenContainer
            footer={
              <Button
                disabled={!isValid}
                type="primary"
                text={t('authenticate.loginButton')}
                onPress={submitForm}
              />
            }>
            <Typography type="h2" align="center" marginBottom={20}>
              {t('authenticate.title')}
            </Typography>
            <FormTextField
              autoCapitalize="none"
              autoCorrect={false}
              label={t('authenticate.emailAddress.label')}
              name="emailAddress"
              keyboardType="email-address"
            />
            <FormTextField
              label={t('authenticate.password.label')}
              name="password"
              secureTextEntry
            />
          </ScreenContainer>
        </>
      )}
    </Form>
  );
};
