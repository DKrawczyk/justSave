import { FC, useState } from "react";
import styled from "styled-components";
import { IMockedNews, IPropsStyle } from "../../../utils/interfaces";
import images from "../../../assets/images";
import { SliderDescription, SliderImage } from "../../molecules";

interface SliderWebpartProps {
  newsList: IMockedNews[];
}

const SliderWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
`;

const Carousel = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: end;
  align-items: flex-end;
  /* height: 500px; */
  position: relative;
  overflow: hidden;
`;

const SliderSwitch = styled.button<IPropsStyle>`
  height: 25px;
  width: 40px;
  background: none;
  position: absolute;
  border: none;
  top: calc(50% - 19px);
  z-index: 99;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
`;

const SliderButtonIcon = styled.img<IPropsStyle>`
  rotate: ${(props) => props.rotate};
`;

const SliderBottomWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  /* border: 1px solid; */
`;

const SliderDots = styled.span`
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0 6px;
  cursor: pointer;
  &:first-of-type {
    background-color: #31528f;
  }
`;

const CarouselWrapper = styled.div`
  width: 80%;
  height: 500px;
`;

export const SliderWebpart: FC<SliderWebpartProps> = ({ newsList }) => {
  console.log(newsList);
  // const [activeSlide, setActiveSlide] = useState(1);
  const renderImages = newsList.map((el, idx) => {
    return (
      <>
        <SliderImage news={el.imgUrl} />
        <SliderDescription news={el} /> 
        {/* CUSTOM DESC IS RWD PROBLEM  */}
      </>
    );
  });
  const renderDots = newsList.map((el) => {
    return <SliderDots />;
  });
  return (
    <SliderWrapper>
      <Carousel>
        <CarouselWrapper>
          {/* <SliderImage news={newsList[0].imgUrl} /> */}
          {renderImages}
        </CarouselWrapper>
        <SliderSwitch right={"-50px"}>
          <SliderButtonIcon src={images.dropdownIcon} />
        </SliderSwitch>
        <SliderSwitch left={"-50px"}>
          <SliderButtonIcon src={images.dropdownIcon} rotate={"180deg"} />
        </SliderSwitch>
      </Carousel>
      <SliderBottomWrapper>
        {renderDots}
      </SliderBottomWrapper>
    </SliderWrapper>
  );
};
