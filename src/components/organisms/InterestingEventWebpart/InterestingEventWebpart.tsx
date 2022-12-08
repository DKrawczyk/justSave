import { FC } from "react";
import { IInterestingEventMock } from "../../../utils/interfaces";
import { useCustomHooks } from "../../../utils/useCommonHooks";
import {
  ArticleHeader,
  EventDetailsWrapper,
  ImageBackground,
  InterestingEventContent,
  InterestingEventWrapper,
  InterestingNewsWrapper,
} from "../../atoms";
import { CustomButton } from "../../molecules";

interface IInterestingEventWebpartProps {
  interestingEvents: IInterestingEventMock[];
}

export const InterestingEventWebpart: FC<IInterestingEventWebpartProps> = ({
  interestingEvents,
}) => {
  const sortedNewsByDate = useCustomHooks(interestingEvents);
  const newestInterestingNews = sortedNewsByDate;

  return (
    <InterestingEventWrapper width={"60%"}>
      <ArticleHeader>O tym się mówi</ArticleHeader>
      <InterestingNewsWrapper>
        <ImageBackground image={newestInterestingNews[0].imgUrl} />
        <EventDetailsWrapper>
          <InterestingEventContent>
            {newestInterestingNews[0].content}
          </InterestingEventContent>
          <CustomButton text={"Dowiedz się więcej"} link={"/"} />
        </EventDetailsWrapper>
      </InterestingNewsWrapper>
    </InterestingEventWrapper>
  );
};
