import {
  PaginationWrapper,
  PaginationButton,
  PaginationButtonText,
  PageNumberContainer,
  PageNumber,
  Dots,
} from "./Pagination.style";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PageNumberContainer
            key={i}
            onPress={() => {
              handlePageClick(i);
            }}
            active={i === currentPage}
          >
            <PageNumber active={i === currentPage}>{i.toString()}</PageNumber>
          </PageNumberContainer>
        );
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        pages.push(
          <PageNumberContainer
            key={i}
            onPress={() => {
              handlePageClick(i);
            }}
            active={i === currentPage}
          >
            <PageNumber active={i === currentPage}>{i.toString()}</PageNumber>
          </PageNumberContainer>
        );
      }

      if (currentPage > 5) {
        pages.push(<Dots key="dots1">...</Dots>);
      }

      for (
        let i = Math.max(currentPage - 1, 4);
        i <= Math.min(currentPage + 1, totalPages - 3);
        i++
      ) {
        pages.push(
          <PageNumberContainer
            key={i}
            onPress={() => {
              handlePageClick(i);
            }}
            active={i === currentPage}
          >
            <PageNumber active={i === currentPage}>{i.toString()}</PageNumber>
          </PageNumberContainer>
        );
      }

      if (currentPage < totalPages - 4) {
        pages.push(<Dots key="dots2">...</Dots>);
      }

      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(
          <PageNumberContainer
            key={i}
            onPress={() => {
              handlePageClick(i);
            }}
            active={i === currentPage}
          >
            <PageNumber active={i === currentPage}>{i.toString()}</PageNumber>
          </PageNumberContainer>
        );
      }
    }

    return pages;
  };

  return (
    <PaginationWrapper>
      {currentPage > 1 && (
        <PaginationButton
          onPress={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <PaginationButtonText>Previous</PaginationButtonText>
        </PaginationButton>
      )}

      {renderPageNumbers()}

      {currentPage < totalPages && (
        <PaginationButton
          onPress={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <PaginationButtonText>Next</PaginationButtonText>
        </PaginationButton>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
