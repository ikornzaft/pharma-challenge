import { Layout, ListContainer, ListItem } from '@/components';
import { ItemsContext } from '@/context/items';
import { useContext } from 'react';

export default function Home() {
  const { items } = useContext(ItemsContext);
  console.log(items);
  return (
    <Layout>
      <ListContainer>
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ListContainer>
    </Layout>
  );
}
