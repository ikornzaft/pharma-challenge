import { ItemsContext } from '@/context/items';
import { useContext } from 'react';

export default function Home() {
  const { items } = useContext(ItemsContext);
  console.log(items);
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-between p-24`}
    >
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
    </main>
  );
}
