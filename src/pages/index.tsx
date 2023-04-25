import { useContext } from 'react';
import { NextPage } from 'next';
import { ItemsContext } from '@/context/items';
import { Layout, ListContainer, ListItem } from '@/components';
import { useFilterItems } from '@/hooks';

const Home: NextPage = ({}) => {
  const { items } = useContext(ItemsContext);
  const filteredItems = useFilterItems(items);
  return (
    <>
      <Layout title="Pharma Challenge - Home">
        <ListContainer>
          {filteredItems.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ListContainer>
      </Layout>
    </>
  );
};

export default Home;
