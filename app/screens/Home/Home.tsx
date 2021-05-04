import { useNavigation } from '@react-navigation/core';
import { Button } from 'app/components/Button/Button';
import { ScreenContainer } from 'app/components/ScreenContainer/ScreenContainer';
import { Typography } from 'app/components/Typography/Typography';
import { Screen } from 'app/config';
import { onLogout } from 'app/redux/authentication/authenticationAction';
import { AuthenticationSelector } from 'app/redux/authentication/authenticationSelector';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

export const Home: React.FC = () => {
  const dispatcher = useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const user = useSelector(AuthenticationSelector.getUser);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      title: 'Home',
    });
  }, [navigation]);

  const handleLogout = () => {
    navigation.navigate(Screen.login);
    dispatcher(onLogout());
  };

  return (
    <ScreenContainer
      contentHorAlign="center"
      contentVertAlign="center"
      footer={
        <Button
          type="secondary"
          text={t('home.logout')}
          onPress={handleLogout}
        />
      }>
      <Typography type="h4">
        {t('home.welcome', { name: user?.firstName })}
      </Typography>
    </ScreenContainer>
  );
};
