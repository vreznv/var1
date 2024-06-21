import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import styled from 'styled-components';

const Input = styled(DebounceInput)`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
`;

const SearchBar = ({ onSearch }) => (
  <Input
    minLength={2}
    debounceTimeout={300}
    onChange={(e) => onSearch(e.target.value)}
    placeholder="Search users..."
  />
);

export default SearchBar;