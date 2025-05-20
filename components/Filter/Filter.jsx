import { Picker } from "react-native-web";
import {
  SearchButton,
  SearchContainer,
  SearchDropdown,
  SearchInput,
  SearchWrapper,
  StyledPicker,
} from "./Filter.style";

const options = [
  { label: "All", value: "all" },

  { label: "All", value: "all" },
];
const datesOptions = [
  { label: "Date ascending", value: "asc" },

  { label: "Date descending", value: "desc" },
];

const Filter = () => {
  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchInput placeholder="Enter at least 3 letters to search..." />
        <SearchButton>Search</SearchButton>
      </SearchWrapper>

      <SearchDropdown>
        <StyledPicker>
          {options.map((item, index) => {
            return <Picker.Item label={item?.value} value={item?.value} />;
          })}
        </StyledPicker>
      </SearchDropdown>
      <SearchDropdown>
        <StyledPicker>
          {datesOptions.map((item, index) => {
            return <Picker.Item label={item?.value} value={item?.value} />;
          })}
        </StyledPicker>
      </SearchDropdown>
    </SearchContainer>
  );
};
export default Filter;
