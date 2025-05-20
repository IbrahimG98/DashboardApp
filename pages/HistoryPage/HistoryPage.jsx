import { useEffect, useState } from "react";
import { HeaderText, HeaderTitle } from "../../shared/SharedStyles";
import {
  BlueSubtitles,
  ContainerColumn,
  DisclaimerText,
  HeaderWrapper,
  MainWrapper,
  NoSurveysCompletedMessage,
  RewardsWrapper,
  StatusTextContainer,
  StatusTextItem,
  WelcomeSection,
  WrapperContent,
} from "./HistoryPage.style";
import { useSelector } from "react-redux";
import { selectSurveyHistory } from "../../features/dashboardSlice";
import Pagination from "../../components/Pagination/Pagination";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import { Text } from "react-native";

const HistoryPage = () => {
  let rewardHistoryData = useSelector(selectSurveyHistory);
  // rewardHistoryData = [
  //   {
  //     surveyTopic: "A test survey 150",
  //     surveyLenghtOfInterview: 100,
  //     surveyIncentive: "150",
  //     surveyIncentiveCurrency: "USD",
  //     surveyEndDate: "2024-01-06",
  //     surveyLink:
  //       "https://q-one.tech/panel-manager/projects/pages/invite?projectId=659813676b2b95a59aac642c&memberId=BENAr6oD0NdV",
  //     surveyStatus: "Terminated",
  //   },
  //   {
  //     surveyTopic: "A test survey 1",
  //     surveyLenghtOfInterview: 5,
  //     surveyIncentive: "1",
  //     surveyIncentiveCurrency: "USD",
  //     surveyEndDate: "2024-01-24",
  //     surveyLink:
  //       "https://q-one.tech/panel-manager/projects/pages/invite?projectId=65a7dab20544eb13cbb64d5b&memberId=WLvOdHxxXbee",
  //     surveyStatus: "Invited - Not Started",
  //   },
  //   {
  //     surveyTopic: "A test survey 150",
  //     surveyLenghtOfInterview: 100,
  //     surveyIncentive: "150",
  //     surveyIncentiveCurrency: "USD",
  //     surveyEndDate: "2024-01-06",
  //     surveyLink:
  //       "https://q-one.tech/panel-manager/projects/pages/invite?projectId=659813676b2b95a59aac642c&memberId=BENAr6oD0NdV",
  //     surveyStatus: "Terminated",
  //   },
  // ];

  const numberOfDoneSurveys = rewardHistoryData?.length || 0;
  const mobileHistoryItems = rewardHistoryData.map((item, index) => (
    <HistoryCard key={index} item={item} />
  ));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // calculate the displayed items based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mobileHistoryItems.slice(startIndex, endIndex);

  // calculate the total number of pages
  const totalPages = Math.ceil(numberOfDoneSurveys / itemsPerPage);

  // handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);

  return (
    <MainWrapper>
      <ContainerColumn>
        <HeaderWrapper>
          <HeaderTitle>Survey History</HeaderTitle>
          <HeaderText>
            Thank you for being an active member! Below you can find all the
            surveys you have been invited to and your current status for each.
          </HeaderText>
          <WelcomeSection>
            <StatusTextContainer show={show.toString()}>
              <StatusTextItem>
                For all surveys you will be asked a series of screener questions
                in order to determine if you meet the survey
                qualification/eligibility criteria. If you qualify and complete
                the entire survey and your completed survey responses are
                accepted upon review by our client, you will receive your
                Amazon.com Gift Card* within 4-6 weeks of the study closing. The
                following is a description of the various survey statuses you
                may see in your Survey History. The survey history only displays
                surveys that you have participated in.
              </StatusTextItem>
              <StatusTextItem>
                Completed, Reward Pending Approval: You completed the survey and
                responses are still being reviewed.  The review may take 4-6
                weeks. If your responses are accepted, we will email you
                information on obtaining your reward.
              </StatusTextItem>

              <StatusTextItem>
                Completed, Approved for Reward: Your survey responses have been
                reviewed and accepted. We will email you information on
                obtaining your reward shortly.
              </StatusTextItem>
            </StatusTextContainer>
          </WelcomeSection>
        </HeaderWrapper>

        <WrapperContent>
          {numberOfDoneSurveys === 0 ? (
            <NoSurveysCompletedMessage>
              <Text>No Survey History</Text>
              <Text>
                It looks like you have not participated in any surveys yet.
                Check the ‘Available Surveys’ section for new opportunities to
                share your thoughts and earn rewards!
              </Text>
            </NoSurveysCompletedMessage>
          ) : (
            <RewardsWrapper>
              {currentItems}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </RewardsWrapper>
          )}
        </WrapperContent>
      </ContainerColumn>
    </MainWrapper>
  );
};

export default HistoryPage;
