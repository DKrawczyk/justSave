import { FC } from "react";
import { ISortedNewsList } from "../../../utils/interfaces";
import { NewsListWrapper } from "../../atoms";
import { SingleTile } from "../../molecules";

export const NewsList: FC<ISortedNewsList> = ({ newsList }) => {
  const sortedNewsList = newsList
    .map((image, idx) => {
      return <SingleTile key={idx} news={image} />;
    })
    .slice(1, 4);

  return <NewsListWrapper>{sortedNewsList}</NewsListWrapper>;
};
