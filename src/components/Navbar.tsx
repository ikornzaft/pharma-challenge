import React from 'react';
import styled from 'styled-components';
import { SearchForm } from './SearchForm';
import Link from 'next/link';

const Nav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Link href="/">Pharma-Challenge</Link>
      <SearchForm />
    </Nav>
  );
};
