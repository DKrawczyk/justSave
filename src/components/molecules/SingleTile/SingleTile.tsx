import { FC } from "react";
import { monthVariation } from "../../../utils/dateHandler/variable";
import { ISingleNewsProp } from "../../../utils/interfaces";
import {
  ArticleHeader,
  DataNewsStyling,
  NewsContent,
  NewsTag,
  NewsTileDesriptionWrapper,
  NewsTileWrapper,
  TileImage,
} from "../../atoms";


export const SingleTile: FC<ISingleNewsProp> = ({ news }) => {
  const adjustDateFormat = (formatDate: Date) =>
    `${formatDate.getDate()} ${
      monthVariation[formatDate.getMonth()]
    } ${formatDate.getFullYear()}`;
  return (
    <NewsTileWrapper>
      <NewsTag left={"4%"}>{news.tag}</NewsTag>
      <TileImage image={news.imgUrl} />
      <NewsTileDesriptionWrapper>
        <ArticleHeader>{news.title + news.id}</ArticleHeader>
        <NewsContent>
          {news.content.length > 180
            ? `${news.content.substring(0, 181)}...`
            : news.content}
        </NewsContent>

        <DataNewsStyling>
          {adjustDateFormat(new Date(news.created))}
        </DataNewsStyling>
      </NewsTileDesriptionWrapper>
    </NewsTileWrapper>
  );
};
