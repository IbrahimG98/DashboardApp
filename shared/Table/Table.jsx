import { useState } from "react";
import { convertToMMDDYYYY, getCurrencySymbol } from "../../utils/utils";
import { SupportLink, Table, Td, Th, Thead, Tr } from "./Table.style";
import Modal from "../Modal/Modal";
import RewardModal from "../RewardModal/RewardModal";
import Pagination from "../../components/Pagination/Pagination";

const StyledTable = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rewardDetailsModal, setRewardDetailsModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const rowsPerPage = 10;

  // Total number of pages for pagination
  const totalPages = Math.ceil(data?.length / rowsPerPage);

  // Handle sorting when a table header is clicked
  const handleSort = (columnKey) => {
    let direction = "ascending";

    // Toggle the sorting direction if already sorted in ascending order
    if (sortConfig.key === columnKey && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key: columnKey, direction: direction });
  };

  // Function to sort data based on the current sort configuration
  const getSortedData = () => {
    const sortedData = [...data];

    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Handle sorting by date (if the column is 'date')
        if (sortConfig.key === "date") {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        // Handle sorting by currency (if the column is 'amount')
        if (sortConfig.key === "amount") {
          aValue = parseFloat(aValue.toString().replace("$", ""));
          bValue = parseFloat(bValue.toString().replace("$", ""));
        }

        // Handle sorting for strings and other data types
        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  };

  // Get sorted and paginated data
  const sortedData = getSortedData();
  const currentRows = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th onClick={() => handleSort("date")}>
              Date Taken{" "}
              {sortConfig.key === "date" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </Th>
            <Th onClick={() => handleSort("title")}>
              Survey Title{" "}
              {sortConfig.key === "title" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </Th>
            <Th onClick={() => handleSort("amount")}>
              Amount (USD){" "}
              {sortConfig.key === "amount" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </Th>
            <Th onClick={() => handleSort("status")}>
              Payment Status{" "}
              {sortConfig.key === "status" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </Th>
            <Th>Claim Exp. Date</Th>
          </Tr>
        </Thead>
        <tbody>
          {currentRows.map((row, index) => (
            <Tr key={index}>
              <Td>{convertToMMDDYYYY(row?.date)}</Td>
              <Td>{row?.title}</Td>
              <Td>
                {getCurrencySymbol(row?.currency)}
                {row?.amount}
              </Td>
              {/* <Td>{toTitleCase(row?.status)}</Td> */}
              {row?.status?.toLowerCase() === "ready" ||
              row?.status?.toLowerCase() === "claimable" ? (
                <Td>
                  <SupportLink
                    onClick={() => {
                      setTimeout(() => {
                        setIsModalOpen(true);
                        setSelectedReward(row);
                      }, 0);
                    }}
                  >
                    Claim
                  </SupportLink>
                </Td>
              ) : (
                row?.status?.toLowerCase() === "claimed" && (
                  <Td>
                    <SupportLink
                      onClick={() => {
                        setRewardDetailsModal(true);
                        setSelectedReward(row);
                      }}
                    >
                      Issued
                    </SupportLink>
                  </Td>
                )
              )}
              <Td>
                {row?.dateExpiration &&
                  row?.status !== "claimed" &&
                  convertToMMDDYYYY(row?.dateExpiration)}
              </Td>
            </Tr>
          ))}
        </tbody>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          rewardId={selectedReward?.id}
        />
        <RewardModal
          isOpen={rewardDetailsModal}
          onClose={() => setRewardDetailsModal(false)}
          rewardType={selectedReward?.type}
          rewardData={selectedReward}
        />
      </Table>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default StyledTable;
