import sprite from '/src/assets/icons/icons.svg';
import {  LogoLink, IconText } from './LogoHeader.styled';

const LogoHeader = ({handleClick}) => {
  return (
    <>
      <LogoLink to="/" onClick={handleClick}>
        <IconText>Rent a car</IconText>
      </LogoLink>
    </>
  );
};

export default LogoHeader;
