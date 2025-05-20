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
  rewards = {
    firstName: "Tracy",
    lastName: "Beasley",
    email: "roman.schoensee+1@gmail.com",
    lastTaxYearSubmission: "2022", // not sure if we should ignore this, it's hardcoded for a specific field in the joiner questionnaire
    projects: [
      {
        id: "6666f653d7f8c75f84f1da8c",
        title: "Test1",
        amount: 100,
        currency: "USD",
        status: "claimed",
        date: "2024-06-10T12:49:23.359Z",
        claimable: false,
        voucherCode: "38303233-343835313834",
        rewardClaimUrl:
          "https://demo.rybbon.net/claim?claimcode=c1e5df3b-6afa-4536-acfe-e03619efd62e",
        type: "rybbon",
        expirationDate: "2024-06-10T12:49:23.359Z",
      },
      {
        id: "7777f653d7f8c75f84f1da8d",
        title: "Test2",
        amount: 150,
        currency: "USD",
        status: "claimable",
        date: "2024-06-15T14:20:30.359Z",
        claimable: true,
        voucherCode: "48403334-454836313835",
        rewardClaimUrl:
          "https://demo.rybbon.net/claim?claimcode=d2f6ef4c-7bfa-4637-bcfe-f04728efg73f",
        type: "rybbon",
      },
      {
        id: "8888f653d7f8c75f84f1da8e",
        title: "Test3",
        amount: 200,
        currency: "USD",
        status: "expired",
        date: "2024-06-20T16:40:45.359Z",
        claimable: true,
        voucherCode: "58503435-565937313836",
        rewardClaimUrl:
          "https://demo.rybbon.net/claim?claimcode=e3g7hf5d-8cga-4738-cdfe-g05839hgf84g",
        type: "amazon",
      },
    ],
    payments: [
      {
        _id: "664db3f3404c8329266e6596",
        title: "Rybbon United States",
      },
      {
        _id: "6655dcdfbc850f4694a75423",
        title: "Rybbon United Kingdom",
      },
      {
        _id: "666708f28d7b02d267a72cc8",
        title: "Amazon",
      },
    ],
  };
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
