import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { useIsFocused } from "@react-navigation/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export default function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setSearchKeyword(keyword);
    }
  }, [keyword, isFocused]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
}
