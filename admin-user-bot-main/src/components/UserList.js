import React from 'react';
import UserItem from './UserItem';
import styled from 'styled-components';

const ListContainer = styled.div`
  max-height: 80vh;
  overflow-y: auto;
`;

const UserList = ({ users, loadMoreUsers }) => (
  <ListContainer>
    {users.map(user => (
      <UserItem key={user.id} user={user} />
    ))}
    {loadMoreUsers && (
      <button onClick={loadMoreUsers}>Load More</button>
    )}
  </ListContainer>
);

export default UserList;