import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserItem = ({ user }) => (
  <UserContainer>
    <Avatar src={user.avatarUrl} alt={user.name} />
    <span>{user.name}</span>
  </UserContainer>
);

export default UserItem;