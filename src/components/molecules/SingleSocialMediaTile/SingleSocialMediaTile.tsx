import { FC } from "react";
import {
  SocialMediaContent,
  ImageBackground,
  SocialMediaImageWrapper,
  SocialMediaLogo,
  SocialMediaText,
  SocialMediaWrapper,
} from "../../atoms";

interface SingleSocialMediaTileProps {
  news: any;
}

export const SingleSocialMediaTile: FC<SingleSocialMediaTileProps> = ({
  news,
}) => {
  const singleNews = news?.slice(0, 3).map((el: any, idx: any) => {
    return (
      <SocialMediaWrapper key={idx}>
        {el.image && (
          <SocialMediaImageWrapper>
            <ImageBackground image={el.image} />
            <SocialMediaLogo src={el.mediaLogo} />
          </SocialMediaImageWrapper>
        )}
        <SocialMediaContent>
          <SocialMediaText fontFamily="SnTb, sans-serif">
            {el.title}
          </SocialMediaText>
          <SocialMediaText>{el.content}</SocialMediaText>
        </SocialMediaContent>
      </SocialMediaWrapper>
    );
  });
  return <>{singleNews}</>;
};
