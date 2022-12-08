import React, { FC } from "react";
import { monthVariation } from "../../../utils/dateHandler/variable";
import { IMockedNews } from "../../../utils/interfaces";
import {
  DataNewsStyling,
  Header,
  MainNewsDescription,
  MainNewsDescriptionWrapper,
  MainNewsFooter,
  MainNewsFooterRef,
  NewsContent,
} from "../../atoms";

interface IMainImageDescription {
  news:IMockedNews
}

export const MainImageDescription: FC<IMainImageDescription> = ({ news }) => {
  const adjustDateFormat = (formatDate: Date) =>
    `${formatDate.getDate()} ${
      monthVariation[formatDate.getMonth()]
    } ${formatDate.getFullYear()}`;

  return (
    <MainNewsDescription topPosition={'calc(50% - 235px / 2)'}>
      <MainNewsDescriptionWrapper>
        <Header>{news.title}</Header>
        <NewsContent>
          {news.content.length > 120
            ? `${news.content.substring(0, 121)}...`
            : news.content}
        </NewsContent>
      </MainNewsDescriptionWrapper>
      <MainNewsFooter>
        <DataNewsStyling>
          {adjustDateFormat(new Date(news.created))}
        </DataNewsStyling>
        <MainNewsFooterRef>Czytaj dalej</MainNewsFooterRef>
      </MainNewsFooter>
    </MainNewsDescription>
  );
};
