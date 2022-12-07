import React, { FC } from "react";
import { mockedNews } from "../../../assets/mocks/mockedNews";

import { MainNews, NewsList } from "../../organisms";
import {
  ImportantInformation,
  ImportantInfoWrapper,
  NewsLayoutWrapper,
  NewsWrapper,
  ReadLink,
} from "../../atoms";

export const NewsWebpart: FC = () => {
  const sortedNewsByDate = mockedNews.sort((a, b) => {
    return new Date(a.data) > new Date(b.data) ? -1 : 1;
  });

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
