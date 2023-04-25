import React from 'react';
import styled from 'styled-components';
import { SearchForm } from './SearchForm';
import Link from 'next/link';
import { ExperimentOutlined } from '@ant-design/icons';

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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-salmon);
  &:hover {
    cursor: pointer;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <LogoWrapper>
          <ExperimentOutlined />
          Pharma-Challenge
        </LogoWrapper>
      </Link>
      <SearchForm />
    </Nav>
  );
};
