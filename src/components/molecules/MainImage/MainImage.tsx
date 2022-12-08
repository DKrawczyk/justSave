import { FC } from "react";
import { IMockedNews } from "../../../utils/interfaces";
import { MainNewsImage, MainNewsImgWrapper } from "../../atoms";

interface IMainImageProps {
  news:IMockedNews
}

export const MainImage: FC<IMainImageProps> = ({ news }) => {
  return (
    <MainNewsImgWrapper>
      <MainNewsImage image={news} />
    </MainNewsImgWrapper>
  );
};
