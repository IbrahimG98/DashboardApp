import { useState } from "react";
import {
  convertToMMDDYYYY,
  getCurrencySymbol,
  toTitleCase,
} from "../../utils/utils";
import { Table, Td, Th, Thead, Tr } from "./HistoryTable.style";
import Pagination from "../../components/Pagination/Pagination";

const HistoryTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const rowsPerPage = 10;

  // Function to handle sorting based on column clicked
  const handleSort = (columnKey) => {
    let direction = "ascending";

    // Toggle the sorting direction if already sorted in ascending order
    if (sortConfig.key === columnKey && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key: columnKey, direction: direction });
  };

  // Custom sorting logic to handle dates and currency values
  const getSortedData = () => {
    // Clone the data array to avoid mutating the original data
    const sortedData = [...data];

    // Sort based on key and direction in sortConfig
    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Handle sorting by date (if the column is 'surveyRewardedDate')
        if (sortConfig.key === "surveyRewardedDate") {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        // Handle sorting by currency (if the column is 'surveyRewardedIncentive')
        if (sortConfig.key === "surveyRewardedIncentive") {
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

  const totalPages = Math.ceil(sortedData?.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th onClick={() => handleSort("surveyRewardedDate")}>
              Date{" "}
              {sortConfig.key === "surveyRewardedDate" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </Th>
            <Th onClick={() => handleSort("surveyTopic")}>
              Survey Title{" "}
              {sortConfig.key === "surveyTopic" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </Th>
            <Th onClick={() => handleSort("surveyRewardedIncentive")}>
              Amount (USD){" "}
              {sortConfig.key === "surveyRewardedIncentive" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </Th>
            <Th onClick={() => handleSort("status")}>
              Status{" "}
              {sortConfig.key === "status" &&
                (sortConfig.direction === "ascending" ? "▲" : "▼")}
            </Th>
          </Tr>
        </Thead>
        <tbody>
          {currentRows.map((row, index) => (
            <Tr key={index}>
              <Td>
                {row?.surveyEndDate && convertToMMDDYYYY(row?.surveyEndDate)}
              </Td>
              <Td>{row?.surveyTopic}</Td>
              <Td>
                {row?.surveyIncentiveCurrency &&
                  getCurrencySymbol(row?.surveyIncentiveCurrency)}
                {row?.surveyIncentive}
              </Td>
              <Td>{row?.surveyStatus && toTitleCase(row?.surveyStatus)}</Td>
            </Tr>
          ))}
        </tbody>
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

export default HistoryTable;
