import { useContext } from 'react';
import { NextPage } from 'next';
import { ItemsContext } from '@/context/items';
import { Layout, ListContainer, ListItem } from '@/components';

const Home: NextPage = ({}) => {
  const { items } = useContext(ItemsContext);
  return (
    <>
      <Layout title="Pharma Challenge - Home">
        <ListContainer>
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ListContainer>
      </Layout>
    </>
  );
};

export default Home;
