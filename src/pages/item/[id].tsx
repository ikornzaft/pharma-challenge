import { itemsApi } from '@/apis';
import { Item } from '@/interfaces';
import { getItemInfo } from '@/utils/getItemInfo';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface Props {
  item: Item;
}

const ItemPage: NextPage<Props> = ({ item }) => {
  return (
    <div>
      <h1>{item.nombre}</h1>
      <p>{item.descripcion}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data: items } = await itemsApi.get<Item[]>('v1/item');

  console.log('ctx: ', ctx);

  return {
    paths: items.map((item) => ({
      params: {
        id: item.id,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const item = await getItemInfo(id);
  console.log(item);

  if (!item) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      item,
    },
    revalidate: 86400,
  };
};

export default ItemPage;
