import React from 'react';
import styled from 'styled-components';
import { SearchForm } from './SearchForm';
import Link from 'next/link';
import { ArrowLeftOutlined, ExperimentOutlined } from '@ant-design/icons';
import { device } from '../styles';
import { IconButton } from './common';
import { useRouter } from 'next/router';

const Nav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
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
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

const IconButtonWrapper = styled.div`
  position: absolute;
  left: 10px;
  top:12px;
  @media ${device.tablet} {
    top: 80px;
    &:hover {
      cursor: pointer;
      transition: 0.3s;
      transform: translateX(-3px);
  }
`;

export const Navbar = () => {
  const router = useRouter();
  return (
    <Nav>
      {router.pathname !== '/' && !router.pathname.includes('item') && (
        <IconButtonWrapper>
          <IconButton onClick={() => router.back()} variant="small">
            <ArrowLeftOutlined />
          </IconButton>
        </IconButtonWrapper>
      )}
      <Link href="/">
        <LogoWrapper>
          <ExperimentOutlined />
          Pharma-Challenge
        </LogoWrapper>
      </Link>
      {router.pathname === '/' && <SearchForm />}
    </Nav>
  );
};
