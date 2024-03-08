import styled from 'styled-components';

export const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px); /* Размытие фона */
  z-index: 9999;
  overflow: hidden;
`;