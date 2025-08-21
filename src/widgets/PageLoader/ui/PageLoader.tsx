import { Loader } from '@/shared/ui/Loader/Loader';

import * as Styled from './styled';

const PageLoader = () => {
  return (
    <Styled.PageLoader>
      <Loader />
    </Styled.PageLoader>
  );
};

export default PageLoader;
