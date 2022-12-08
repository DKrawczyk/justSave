import React, { FC } from "react";

import { MainNews, NewsList } from "../../organisms";
import {
  ImportantInformation,
  ImportantInfoWrapper,
  NewsLayoutWrapper,
  NewsWrapper,
  ReadLink,
} from "../../atoms";
import { useCustomHooks } from "../../../utils/useCommonHooks";
import { IMockedNews } from "../../../utils/interfaces";

interface INewsWebpartProps {
  newsList: IMockedNews[]
}

export const NewsWebpart: FC<INewsWebpartProps> = ({newsList}) => {
  const sortedNewsByDate = useCustomHooks(newsList)
  const lastImportantNews = sortedNewsByDate.find((el) => el.isImportant);
  return (
    <NewsLayoutWrapper>
      {lastImportantNews && (
        <ImportantInfoWrapper>
          <ImportantInformation>
            {lastImportantNews.title.length > 99
              ? `${lastImportantNews.title.substring(0, 100)}...`
              : lastImportantNews.title}
            {" "}
            <ReadLink href={lastImportantNews.url}>Czytaj dalej</ReadLink>
          </ImportantInformation>
        </ImportantInfoWrapper>
      )}
      <NewsWrapper>
        <MainNews newsList={sortedNewsByDate} />
        <NewsList newsList={sortedNewsByDate} />
      </NewsWrapper>
    </NewsLayoutWrapper>
  );
};
