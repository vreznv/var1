import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import { fetchUsers } from './services/api';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetchUsers(searchTerm);
      setUsers(result.result);
      setNextPageUrl(result.nextPageUrl);
    };

    if (searchTerm) {
      getUsers();
    } else {
      setUsers([]);
      setNextPageUrl(null);
    }
  }, [searchTerm]);

  const loadMoreUsers = async () => {
    if (nextPageUrl) {
      const result = await fetchUsers(searchTerm, nextPageUrl);
      setUsers([...users, ...result.result]);
      setNextPageUrl(result.nextPageUrl);
    }
  };

  return (
    <AppContainer>
      <h1>Bot User Search</h1>
      <SearchBar onSearch={setSearchTerm} />
      <UserList users={users} loadMoreUsers={nextPageUrl ? loadMoreUsers : null} />
    </AppContainer>
  );
};

export default App;
