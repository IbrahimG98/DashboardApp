// import React, { createContext, useContext, useRef } from "react";
// import Slider from "react-slick";
// import LeftArrow from "../assets/chevron_left.svg";
// import RightArrow from "../assets/chevron_right.svg";
// import { ArrowContainer } from "./CarouselContext.style";

// const CarouselContext = createContext();

// const useCarousel = () => {
//   return useContext(CarouselContext);
// };
// export const SamplePrevArrow = () => {
//   const carousel = useCarousel();
//   return (
//     <ArrowContainer direction="left" onClick={() => carousel.handlePrev()}>
//       <img src={LeftArrow} alt="left_arrow" />
//     </ArrowContainer>
//   );
// };
// export const SampleNextArrow = () => {
//   const carousel = useCarousel();
//   return (
//     <ArrowContainer direction="right" onClick={() => carousel.handleNext()}>
//       <img src={RightArrow} alt="right_arrow" />
//     </ArrowContainer>
//   );
// };

// const settingsDefault = {
//   dots: false,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   prevArrow: <SamplePrevArrow />,
//   nextArrow: <SampleNextArrow />,
//   responsive: [
//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//         speed: 500,
//         arrows: true,
//       },
//     },
//     {
//       breakpoint: 1399,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//         speed: 500,
//         arrows: false,
//       },
//     },
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: false,
//         dots: false,
//         speed: 500,
//         arrows: true,
//       },
//     },
//   ],
// };

// export const CarouselProvider = ({ children, items, settings }) => {
//   const numberOfItems = items?.length;
//   let sliderRef = useRef(null);
//   const settingsAlt = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: numberOfItems,
//     slidesToScroll: 1,
//     arrows: false,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//           speed: 500,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 1399,
//         settings: {
//           slidesToShow: numberOfItems,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//           speed: 500,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 1400,
//         settings: {
//           slidesToShow: numberOfItems,
//           slidesToScroll: 1,
//           infinite: false,
//           dots: false,
//           speed: 500,
//           arrows: false,
//         },
//       },
//     ],
//   };
//   let settingsProp = items?.length < 3 ? settingsAlt : settingsDefault;

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <CarouselContext.Provider value={{ handleNext, handlePrev }}>
//       <React.Fragment>
//         {children}
//         <Slider
//           ref={(slider) => {
//             sliderRef.current = slider;
//           }}
//           {...settingsProp}
//         >
//           {items}
//         </Slider>
//       </React.Fragment>
//     </CarouselContext.Provider>
//   );
// };
