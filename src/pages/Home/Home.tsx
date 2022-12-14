import { FC } from 'react';

import { useRecoilState } from 'recoil';

import Button from '~/components/Button';
import { GroupedButtons } from '~/components/Button/styles';
import useUserInfo from '~/hooks/useUserInfo';
import { languageState } from '~/store/languageStore';

import { Container, Title } from './styles';

const Home: FC = () => {
  const { data, isLoading } = useUserInfo();
  const [language, setLanguage] = useRecoilState(languageState);

  return (
    <Container>
      <Title>Home Page</Title>
      <p>current language: {language}</p>
      <GroupedButtons>
        <Button active={language === 'en'} onClick={() => setLanguage('en')}>
          en
        </Button>
        <Button active={language === 'es'} onClick={() => setLanguage('es')}>
          es
        </Button>
        <Button active={language === 'pt'} onClick={() => setLanguage('pt')}>
          pt
        </Button>
      </GroupedButtons>
      <pre>{!isLoading ? JSON.stringify(data, null, 2) : 'loading...'}</pre>
    </Container>
  );
};

export default Home;
