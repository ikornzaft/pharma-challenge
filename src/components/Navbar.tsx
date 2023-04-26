import React from 'react';
import styled from 'styled-components';
import { SearchForm } from './SearchForm';
import Link from 'next/link';
import { ExperimentOutlined } from '@ant-design/icons';
import { device } from '../styles';

const Nav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 999;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-salmon);
  margin-bottom: 0.5rem;
  @media ${device.tablet} {
    font-size: 1.5rem;
    margin: 0;
  }
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
