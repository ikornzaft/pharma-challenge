import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar, Sidebar } from '../';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ title = 'Pharma Challenge', children }) => {
  const router = useRouter();
  console.log('ROUTER: ', router);
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {router.route === '/' && <Sidebar />}
      <main>{children}</main>
    </div>
  );
};
