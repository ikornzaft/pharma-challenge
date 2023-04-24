import { Layout } from '@/components';
import { ItemsContext } from '@/context/items';
import { useContext } from 'react';

export default function Home() {
  const { items } = useContext(ItemsContext);
  console.log(items);
  return (
    <Layout>
      <div>
        <h1>HOLA MUNDO</h1>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.nombre}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
