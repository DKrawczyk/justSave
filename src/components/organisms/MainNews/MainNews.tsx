import React, { FC } from "react";
import { ISortedNewsList } from "../../../utils/interfaces";
import { MainNewsWrapper, NewsTag } from "../../atoms";
import { MainImage, MainImageDescription } from "../../molecules";

export const MainNews: FC<ISortedNewsList> = ({newsList}) => {
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
