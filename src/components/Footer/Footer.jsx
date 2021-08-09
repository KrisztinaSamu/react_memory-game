import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div``;

const FooterText = styled.p`
  font-size: 1.3rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>&copy; Copyright 2021</FooterText>
    </FooterWrapper>
  );
}
