import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FooterWrapper = styled.footer`
  background-color: #005183;
  color: white;
  margin: 0px auto;
  padding: 0 100px;
`;

const FooterWebDetails = styled.div`
  display: flex;
  /* justify-content: center; */
  border-bottom: 1px solid white;
  padding: 50px 0;
`;

const FooterHyperLinks = styled.div`
  /* margin-top: 10px; */
  width: 48%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0 80px;
`;

const FooterContent = styled.div`
  padding: 20px 20px;
  margin: auto;
`;

const FooterContentTitle = styled.h4`
  font-size: 25px;
  color: #39b8b8;
  width: 100%;
`;

const FooterSocialMedia = styled.div`
  padding-top: 30px;
  width: 20%;
  display: flex;
  flex-direction: row-reverse;
`;

const FooterSocialMediaIcon = styled.div`
  border: 1px solid;
  width: 40px;
  height: 40px;
`;

const FooterLogo = styled.div`
  padding: 20px 0px;
  width: 20%;
  font-size: 60px;
`;

const FooterLink = styled.a`
  /* padding-right: 10px; */
  /* border-right: 1px solid white; */
  /* margin-right: 10px; */
  text-decoration: none;
  color: white;
  /* width: 20%; */
  text-align: center;
  white-space: nowrap;
  &:last-of-type {
    border-right: 0px;
  }
`;

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterWebDetails>
          <FooterLogo>S&T</FooterLogo>
          <FooterContent>
            {/* 3ab8b7 */}
            <FooterContentTitle>S&T Poland Sp. z o.o.</FooterContentTitle>
            <br />
            <p>S&T Poland Sp. z o.o.</p>
            <p>ul. Postępu 21D</p>
            <p>02-676 Warszawa</p>
            <br />
            <p>KRS 0000100284</p>
            <p>NIP 526-030-68-85</p>
            <p>Kapitał Zakładowy 13 487 000,00 PLN</p>
            <p>nr BDO 000002589</p>
          </FooterContent>
          <FooterContent>
            <FooterContentTitle>
              S&T Services Polska Sp. z o.o.
            </FooterContentTitle>
            <br />
            <p>S&T Services Polska Sp. z o.o.</p>
            <p>ul. Postępu 21D</p>
            <p>02-676 Warszawa</p>
            <br />
            <p>KRS 0000029743</p>
            <p>NIP 526-030-06-41</p>
            <p>Kapitał Zakładowy 1 060 000,00 PLN</p>
            <p>nr BDO 000002723</p>
          </FooterContent>

          <FooterSocialMedia>
            <FooterSocialMediaIcon />
            <FooterSocialMediaIcon />
            <FooterSocialMediaIcon />
            <FooterSocialMediaIcon />
          </FooterSocialMedia>
        </FooterWebDetails>
        <FooterHyperLinks>
          <FooterLink href="#">Nota prawna</FooterLink>
          <FooterLink href="#">Dane Rejestore</FooterLink>
          <FooterLink href="#">Politykę prywatnośći</FooterLink>
          <FooterLink href="#">Kodeks Postępowania</FooterLink>
          <FooterLink href="#">Ogólne warunki umów</FooterLink>
        </FooterHyperLinks>
      </Container>
    </FooterWrapper>
  );
};
