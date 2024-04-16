import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #030E4F;
  color: #fff;
`;

const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyrightText = styled.span`
  margin-right: 5px;
`;

const CopyrightIcon = styled.span`
  margin-right: 5px;
`;

const PoweredBy = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #fff;
  margin: 0 5px;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <CopyrightWrapper>
        <CopyrightIcon>&copy;</CopyrightIcon>
        <CopyrightText>All rights reserved</CopyrightText>
      </CopyrightWrapper>
      <PoweredBy>Powered by NileSoft</PoweredBy>
      <SocialLinksWrapper>
        <SocialLink href="https://example.com">Facebook</SocialLink>
        <SocialLink href="https://example.com">Twitter</SocialLink>
        <SocialLink href="https://example.com">Instagram</SocialLink>
      </SocialLinksWrapper>
    </FooterWrapper>
  );
};

export default Footer;