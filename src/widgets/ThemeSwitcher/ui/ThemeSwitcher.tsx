import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/app/providers/ThemeProvider';

import * as Styled from './styled';

const ThemeSwitcher = memo(() => {
  const { t } = useTranslation();
  const { toggleTheme } = useTheme();

  return <Styled.Button onClick={toggleTheme}>{t('theme-switcher')}</Styled.Button>;
});

export default ThemeSwitcher;
