import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar, Sidebar } from '../';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ title = 'Pharma Challenge', children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
