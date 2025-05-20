import { useRef, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  SearchBarContainer,
  SearchIconWrapper,
  SearchInput,
} from "./SearchBar.style";

const SearchBar = ({ placeholder = "Search by Survey Title", onSearch }) => {
  const inputValueRef = useRef("");
  const [inputValue, setInputValue] = useState("");

  return (
    <SearchBarContainer>
      <SearchInput
        placeholder={placeholder}
        value={inputValue}
        onChangeText={(text) => {
          inputValueRef.current = text;
          setInputValue(text);
        }}
      />
      <SearchIconWrapper>
        <TouchableOpacity
          onPress={() => {
            onSearch && onSearch(inputValueRef.current);
          }}
        >
          <Image
            source={require("../../assets/images/searchIcon.png")}
            resizeMode="contain"
            style={{ height: 20, width: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onSearch && onSearch("");
            inputValueRef.current = "";
            setInputValue(""); // This clears the input visually
          }}
        >
          <Image
            source={require("../../assets/images/closeMenuIcon.png")}
            resizeMode="contain"
            style={{ height: 20, width: 30 }}
          />
        </TouchableOpacity>
      </SearchIconWrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;
