import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './styled';

const LanguageSwitcher = memo(() => {
  const { i18n, t } = useTranslation();

  const handleSwitch = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return <Styled.Button onClick={handleSwitch}>{t('language-switcher')}</Styled.Button>;
});

export default LanguageSwitcher;
