import { Loader } from '@/shared/ui/Loader/Loader';

import * as Styled from './styled.ts';

const PageLoader = () => {
  return (
    <Styled.PageLoader>
      <Loader />
    </Styled.PageLoader>
  );
};

export default PageLoader;
