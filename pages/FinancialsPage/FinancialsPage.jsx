import { useState, useMemo, useCallback } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { selectRewards } from "../../features/dashboardSlice";
import Pagination from "../../components/Pagination/Pagination";
import {
  BlueSubtitles,
  CollapsableSection,
  ContainerColumn,
  HeaderWrapper,
  HonorariaAmount,
  HonorariaText,
  MainWrapper,
  NoSurveysCompletedMessage,
  RewardsWrapper,
  SearchHonariaSection,
  StatusTextItem,
  TotalHonorariaWrapper,
  WrapperContent,
} from "./FinancialsPage.style";
import {
  HeaderContentWrapper,
  HeaderText,
  HeaderTitle,
} from "../../shared/SharedStyles";
import RewardCard from "../../shared/RewardCard/RewardCard";
import SearchBar from "../../shared/SearchBar/SearchBar";

const FinancialsPage = () => {
  let rewards = useSelector(selectRewards);
  const projectsData = rewards?.projects || [];

  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [searchTerm, setSearchTerm] = useState("");

  const currentYear = new Date().getFullYear();

  const filteredData = useMemo(() => {
    const trimmed = searchTerm.trim().toLowerCase();
    if (!trimmed) return projectsData;
    return projectsData.filter((item) =>
      item?.title?.toLowerCase().includes(trimmed)
    );
  }, [searchTerm, projectsData]);

  const totalAmountClaimed = useMemo(() => {
    return projectsData
      .filter(
        (item) => item?.status?.toLowerCase() === "claimed"
        // item?.date &&
        // new Date(item.date).getFullYear() === currentYear
      )
      .reduce((sum, item) => sum + item.amount, 0);
  }, [projectsData]);

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const handleSearch = useCallback((searchValue) => {
    setSearchTerm(searchValue);
    setCurrentPage(1);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = filteredData
    .slice(startIndex, endIndex)
    .map((item, index) => (
      <RewardCard key={item?.id || index} rewardItem={item} />
    ));

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <MainWrapper>
      <ContainerColumn>
        <HeaderWrapper>
          <HeaderContentWrapper>
            <HeaderTitle>Rewards Overview</HeaderTitle>
            <HeaderText>
              On this page you can see all the rewards you received from us for
              your participation in our studies.
            </HeaderText>
          </HeaderContentWrapper>
        </HeaderWrapper>

        <SearchHonariaSection>
          <TotalHonorariaWrapper>
            <HonorariaText>Total rewards claimed:</HonorariaText>
            <HonorariaAmount>{`$ ${totalAmountClaimed}`}</HonorariaAmount>
          </TotalHonorariaWrapper>
          <SearchBar onSearch={handleSearch} />
        </SearchHonariaSection>

        <WrapperContent>
          {projectsData.length === 0 ? (
            <NoSurveysCompletedMessage>
              <Text>No Rewards Available</Text>
              <Text>
                It looks like you have not earned any rewards yet. Check back
                soon for new opportunities to share your thoughts and earn
                rewards!
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

export default FinancialsPage;
