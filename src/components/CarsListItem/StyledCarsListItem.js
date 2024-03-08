import styled from "styled-components";

export const StyledCarsListItem = styled.li`
  margin-bottom: 40px;
  border-radius: 8px;
  max-width: 274px;
  @media (min-width: 768px) {
    margin-bottom: 80px;
    width: calc(150% - 20px);
  }

  @media (min-width: 1280px) {
    width: calc(100% - 60px);
  }

  .custom-image {
    display: block;
    object-fit: cover;
    margin-bottom: 14px;
    border-radius: 14px;
    width: 274px;
    height: 268px;
  }

  .carDetails {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .details {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .model {
    font-weight: bold;
    color: #3470ff;
  }

  .cost {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
  }

  .additionalInfo {
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
    max-width: 270px;
    max-height: 40px;
    overflow: hidden;
    word-spacing: 2px;

    margin-bottom: 28px;
  }

  .LearnMoreLink {
    cursor: pointer;

    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    text-align: center;

    background: #3470ff;
    border-radius: 12px;
    padding: 12px 99px;
    width: 274px;
    height: 44px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    .seeMoreLink {
      font-size: 16px;
      line-height: 1.125;
    }
  }
`;

export default StyledCarsListItem;
