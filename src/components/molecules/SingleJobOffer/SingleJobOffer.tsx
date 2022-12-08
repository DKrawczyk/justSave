import { FC } from "react";
import {
  ShortHeader,
  ShortText,
  ListWrapper,
  SingleJobWrapper,
  JobDetails,
} from "../../atoms";
import { CustomButton } from "../CustomButton";

interface SingleJobOfferProps {
  jobList: any;
}

export const SingleJobOffer: FC<SingleJobOfferProps> = ({ jobList }) => {
  const jobs = jobList?.map((el: any, idx: any) => {
    return (
      <SingleJobWrapper key={idx}>
        <JobDetails>
          <ShortHeader
            whiteSpace={"nowrap"}
            fontSize={"1.4rem"}
            color={"#3ab8b7"}
            fontFamily={"SnTl, sans-serif"}
          >
            {el.jobTitle}
          </ShortHeader>
          <ShortText fontFamily={"SnTb, sans-serif"}>{el.location}</ShortText>
          <ShortText>Bonus za polecenie: {el.recBonus}</ShortText>
          <CustomButton
            text={"Generuj link"}
            link={el.PPKUrl}
            style={{ padding: "5px", width: "110px" }}
          />
        </JobDetails>
      </SingleJobWrapper>
    );
  });
  return <ListWrapper>{jobs}</ListWrapper>;
};
