import {
  FooterContainer,
  LogoAndSocialContainer,
  FooterNavContainer,
  NavAndFormContainer,
  DocsLink,
  DocsContainer,
  DocsSubContainer,
} from './Footer.styled';
import { FooterNavigation } from './FooterNavigation/FooterNavigation';
import PrivacyPolicy from '../../assets/docs/PrivacyPolicy.txt';
import PublicAgreement from '../../assets/docs/PublicAgreement.txt';

export const Footer = () => {
  return (
    <FooterContainer>
      <NavAndFormContainer>
        <FooterNavContainer>
          <LogoAndSocialContainer>
          </LogoAndSocialContainer>
          <FooterNavigation />
        </FooterNavContainer>
      </NavAndFormContainer>
      <DocsContainer>
        <DocsLink
          href="/"
          target="blank"
        >
          ©2023 Rent a car cite by Valeriia Yefremova. All rights reserved.
        </DocsLink>
        <DocsSubContainer>
          <DocsLink href={PrivacyPolicy} download>
            Privacy Policy
          </DocsLink>
          <DocsLink href={PublicAgreement} download>
            Terms of Service
          </DocsLink>
        </DocsSubContainer>
      </DocsContainer>
    </FooterContainer>
  );
};
