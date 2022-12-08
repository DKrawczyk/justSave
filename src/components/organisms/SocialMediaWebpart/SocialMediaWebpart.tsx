import { FC } from "react";
import { ISocialMediaMock } from "../../../utils/interfaces";
import {
  ArticleHeader,
  Hyperlink,
  SocialMediaWebpartWrapper,
} from "../../atoms";
import { SingleSocialMediaTile } from "../../molecules";

export const SocialMediaWebpart: FC<ISocialMediaMock> = ({ socialMedias }) => {
  return (
    <SocialMediaWebpartWrapper>
      <ArticleHeader>Social Media</ArticleHeader>
      <SingleSocialMediaTile news={socialMedias} />
      <Hyperlink href="/">Zobacz wszystkie</Hyperlink>
    </SocialMediaWebpartWrapper>
  );
};
