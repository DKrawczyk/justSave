import { FC } from "react";
import { IMockedNews } from "../../../utils/interfaces";
import { MainNewsImage } from "../../atoms";

interface SliderImageProps {
  news: IMockedNews;
}

export const SliderImage: FC<SliderImageProps> = ({ news }) => {
  return (
      <MainNewsImage image={news} />
  );
};
