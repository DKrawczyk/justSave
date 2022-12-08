import { FC } from "react";
import { IMockedNews } from "../../../utils/interfaces";
import {
  MainNewsDescription,
  MainNewsDescriptionWrapper,
  Header,
  NewsContent,
} from "../../atoms";
import { CustomButton } from "../CustomButton";

interface SliderDescriptionProps {
  news: IMockedNews;
}

export const SliderDescription: FC<SliderDescriptionProps> = ({ news }) => {
  return (
    <MainNewsDescription
      width={"36%"}
      topPosition={"calc(50% - 350px / 2)"}
      right={"64%"}
      height={"70%"}
      justifyContent={"space-evenly"}
    >
      <MainNewsDescriptionWrapper>
        <Header>{news.title}</Header>
        <NewsContent>
          {news.content.length > 120
            ? `${news.content.substring(0, 121)}...`
            : news.content}
        </NewsContent>
      </MainNewsDescriptionWrapper>
      <CustomButton text="Dowiedz się więcej" link="" />
    </MainNewsDescription>
  );
};
