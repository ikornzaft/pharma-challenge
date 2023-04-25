import React from 'react';
import styled from 'styled-components';
import { SearchForm } from './SearchForm';

const Nav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar = () => {
  return (
    <Nav>
      <h1>Pharma-Challenge</h1>
      <SearchForm />
    </Nav>
  );
};
