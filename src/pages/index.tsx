import { useContext } from 'react';
import { NextPage } from 'next';
import { ItemsContext } from '@/context/items';
import { Layout, ListContainer, ListItem, Sidebar } from '@/components';
import { useFilterItems } from '@/hooks';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Home: NextPage = ({}) => {
  const { items } = useContext(ItemsContext);
  const filteredItems = useFilterItems(items);
  return (
    <>
      <Layout title="Pharma Challenge - Home">
        <HomeWrapper>
          <Sidebar />
          <ListContainer>
            {filteredItems.map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </ListContainer>
        </HomeWrapper>
      </Layout>
    </>
  );
};

export default Home;
