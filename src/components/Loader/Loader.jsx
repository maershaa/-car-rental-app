import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './LoaderWrapper';
import { BlurBackground } from './BlurBackground';

export const Loader = () => (
  <BlurBackground>

  <LoaderWrapper>
    <ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  </LoaderWrapper>
  </BlurBackground>
);
