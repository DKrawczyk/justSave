import React, { FC } from "react";
import { IMockedNews } from "../../../utils/interfaces";
// import { INewsProps } from "../../../utils/interfaces";
import { MainNewsWrapper, NewsTag } from "../../atoms";
import { MainImage, MainImageDescription } from "../../molecules";

interface IMainNewsProps {
  newsList:IMockedNews[]
}

export const MainNews: FC<IMainNewsProps> = ({newsList}) => {
  const firstNews = newsList[0]

  return (
    <MainNewsWrapper>
      <MainImage news={firstNews.imgUrl} />

      <NewsTag top={"12%"} right={"15%"}>
        {firstNews.tag}
      </NewsTag>
      <MainImageDescription news={firstNews} />
    </MainNewsWrapper>
  );
};
