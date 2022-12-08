import { FC } from "react";
import { IMockedNews } from "../../../utils/interfaces";
import { NewsListWrapper } from "../../atoms";
import { SingleTile } from "../../molecules";

interface INewsListProps {
  newsList: IMockedNews[]
}

export const NewsList: FC<INewsListProps> = ({ newsList }) => {
  const sortedNewsList = newsList
    .map((image, idx) => {
      return <SingleTile key={idx} news={image} />;
    })
    .slice(1, 4);

  return <NewsListWrapper>{sortedNewsList}</NewsListWrapper>;
};
