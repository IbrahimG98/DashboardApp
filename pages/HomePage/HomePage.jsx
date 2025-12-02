import Card from "../../components/Card/Card";
import {
  AvailSurveysNote,
  ContainerColumn,
  DisclaimerText,
  GridContainer,
  ImageContainer,
  InfoLabel,
  InfoRow,
  InfoValue,
  NoAvailableSurveysMessage,
  SectionTitle,
  WelcomeSection,
  WrapperMain,
} from "./HomePage.style";
import { CarouselProvider } from "../../context/CarouselContext";
import { useSelector } from "react-redux";
import {
  selectAvailableSurveys,
  selectRewards,
  selectUser,
} from "../../features/dashboardSlice";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

const HomePage = () => {
  let availableSurveys = useSelector(selectAvailableSurveys);

  const carouselItems = availableSurveys?.map((item, idx) => (
    <Card item={item} key={idx} />
  ));

  const [show, setShow] = useState(false);
  const user = useSelector(selectUser);
  let rewards = useSelector(selectRewards);
  const projectsData = rewards?.projects || [];

  const totalAmountClaimed = useMemo(() => {
    return projectsData
      .filter(
        (item) => item?.status?.toLowerCase() === "claimed"
        // item?.date &&
        // new Date(item.date).getFullYear() === currentYear
      )
      .reduce((sum, item) => sum + item.amount, 0);
  }, [projectsData]);

  return (
    <WrapperMain>
      <ContainerColumn>
        <WelcomeSection>
          {carouselItems?.length > 0 ? (
            <SectionTitle>
              Hello {user.firstName || "user"}!
              <InfoRow>
                <InfoLabel>Total rewards claimed:</InfoLabel>
                <InfoValue>{`$${totalAmountClaimed}`}</InfoValue>
              </InfoRow>
              <InfoRow>
                <AvailSurveysNote>
                  You have {carouselItems?.length} available survey(s):
                </AvailSurveysNote>
              </InfoRow>
            </SectionTitle>
          ) : (
            <NoAvailableSurveysMessage>
              <Text>No Available Surveys</Text>
              <Text>
                You have no available surveys right now. Check back soon for new
                opportunities to share your thoughts and earn rewards!
              </Text>
            </NoAvailableSurveysMessage>
          )}

          <ImageContainer show={show.toString()}>
            {/* <ImageRow>
              <Image  source={require("../../assets/images/welcome1.png")}
            contentFit="contain" />
             <Image  source={require("../../assets/images/welcome2.png")}
            contentFit="contain" />
            </ImageRow>
            <ImageRow>
            <Image  source={require("../../assets/images/welcome3.png")}
            contentFit="contain" />
             <Image  source={require("../../assets/images/welcome4.png")}
            contentFit="contain" />
            </ImageRow> */}

            <DisclaimerText>
              *If you qualify and complete the entire survey, our client will
              review your answers and approve your payment. If you speed through
              the survey or don’t provide thoughtful answers your answers may
              not be accepted and therefore you would not receive the gift card
              for this survey. It can take 4-6 weeks for your answers to be
              reviewed, accepted and for the gift card to be available in your
              survey portal. *You may earn only one payment per survey. If we
              determine that an individual has claimed more than one payment for
              the same survey we will not make the excess payments.
            </DisclaimerText>
          </ImageContainer>
        </WelcomeSection>

        {carouselItems?.length > 0 && (
          // <WelcomeSection>
          //   {carouselItems?.length == 1 ? (
          //     <NoCarouselWrapper numOfItems={carouselItems?.length}>
          //       {carouselItems}
          //     </NoCarouselWrapper>
          //   ) : (
          //     <CardsCarouselWrapper numOfItems={carouselItems?.length}>
          //       <CarouselProvider items={carouselItems} />
          //     </CardsCarouselWrapper>
          //   )}
          // </WelcomeSection>
          <GridContainer>{carouselItems}</GridContainer>
        )}

        {/* <DisclaimerText>
        
        </DisclaimerText>
        <DisclaimerText>
       
        </DisclaimerText> */}
      </ContainerColumn>
    </WrapperMain>
  );
};
export default HomePage;
