import React, { FC } from "react";
import { monthVariation } from "../../../utils/dateHandler/variable";
import { INewsProps } from "../../../utils/interfaces";
import {
  DataNewsStyling,
  Header,
  MainNewsDescription,
  MainNewsDescriptionWrapper,
  MainNewsFooter,
  MainNewsFooterRef,
  NewsContent,
} from "../../atoms";

export const MainImageDescription: FC<INewsProps> = ({ news }) => {
  const adjustDateFormat = (formatDate: Date) =>
    `${formatDate.getDate()} ${
      monthVariation[formatDate.getMonth()]
    } ${formatDate.getFullYear()}`;

  return (
    <MainNewsDescription>
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
          {adjustDateFormat(new Date(news.data))}
        </DataNewsStyling>
        <MainNewsFooterRef>Czytaj dalej</MainNewsFooterRef>
      </MainNewsFooter>
    </MainNewsDescription>
  );
};
