import { FC } from "react";
import styled from "styled-components";
import { IPropsStyle, ISocialMediaMock } from "../../../utils/interfaces";
import { ArticleHeader } from "../../atoms";

const WebpartWrapper = styled.div<IPropsStyle>`
  display: flex;
  justify-content: space-between;
  padding: 40px 16px;
  flex-direction: column;


  @media (min-width: 1280px) {
    width: ${(props) => props.width || "42%"};
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28%;
  border-bottom: 3px solid lightgray;
  padding: 16px 0;

  @media (min-width: 786px) and (max-width: 1279px) {
    justify-content: space-evenly;
  }
`;

const ShowAllLink = styled.a`
  font-size: 0.75rem;
  color: #31528f;
  font-weight: bold;
`;

const SocialMediaImage = styled.div<IPropsStyle>`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const EmployeeDetails = styled.div`
  width: 68%;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const DescriptionText = styled.p<IPropsStyle>`
  color: #31528f;
  font-size: 0.85rem;
  color: black;
  font-family: ${(props) => props.fontFamily};
  line-height: 18px;
`;

const ImageWrapper = styled.div`
  position: relative;
  @media (max-width: 785px){
    width: 25%;
    height: 130px;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    width: 25%;
    height: 130px;
  }
  @media (min-width: 1280px) {
    width: 34%;
    height: 100%;
  }
`;

const SocialMediaLogo = styled.img`
  height: 26px;
  width: 26px;
  position: absolute;
  bottom: 4%;
  right: 4%;
`;

export const SocialMediaWebpart: FC<ISocialMediaMock> = ({ socialMedias }) => {
  const socialMediaNews = socialMedias?.slice(0, 3).map((el, idx) => {
    return (
      <SocialMediaWrapper key={idx}>
        {el.image && (
          <ImageWrapper>
            <SocialMediaImage image={el.image} />
            <SocialMediaLogo src={el.mediaLogo} />
          </ImageWrapper>
        )}
        <EmployeeDetails>
          <DescriptionText fontFamily="SnTb, sans-serif">
            {el.title}
          </DescriptionText>
          <DescriptionText>{el.content}</DescriptionText>
        </EmployeeDetails>
      </SocialMediaWrapper>
    );
  });
  return (
    <WebpartWrapper>
      <ArticleHeader>Social Media</ArticleHeader>
      {socialMediaNews}
      <ShowAllLink href="/">Wszystkie oferty pracy</ShowAllLink>
    </WebpartWrapper>
  );
};
