import styled from 'styled-components';

export const StyledCarsList = styled.div`
    .carsList {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media (min-width: 768px) {
      gap: 20px;
    }

    @media (min-width: 1280px) {
      gap: 40px;
    }
  }
`;

export default StyledCarsList;