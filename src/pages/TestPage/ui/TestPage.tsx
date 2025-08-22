import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import * as Styled from './styled';

const TestPage = () => {
  const { t } = useTranslation();

  return (
    <Styled.Div>
      <Styled.H1>{t('test')}</Styled.H1>
      <Styled.Wrapper>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </Styled.Wrapper>
    </Styled.Div>
  );
};

export default TestPage;
