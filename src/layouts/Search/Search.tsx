import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background-color: #030E4F;
  padding: 8px;
  border-radius: 4px;
`;

const CategoryWrapper = styled.div`
  flex: 1;
  margin-right: 8px;
`;

const CategoryList = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  font-size: 14px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: #030E4F;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 1.2rem;
`;

const SearchComponent = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };
  
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic using the selected category and search term
    console.log('Category:', category);
    console.log('Search Term:', searchTerm);
  };

  return (
      <SearchWrapper>
        <CategoryWrapper>
          <CategoryList value={category} onChange={handleCategoryChange}>
            <option value="all">All</option>
            <option value="computer">Computer</option>
            <option value="phone">Phone</option>
            <option value="tablet">Tablet</option>
          </CategoryList>
        </CategoryWrapper>
        <SearchInput
          type="text"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <SearchButton onClick={handleSearch}>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>
  );
};

export default SearchComponent;