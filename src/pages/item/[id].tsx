import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ItemComponent, Layout } from '@/components';
import { Item } from '@/interfaces';
import { itemsApi } from '@/apis';
import { getItemInfo } from '@/utils/';

interface Props {
  item: Item;
}

const ItemPage: NextPage<Props> = ({ item }) => {
  return (
    <Layout title={`Pharma Challenge - ${item.nombre}`}>
      <ItemComponent item={item} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data: items } = await itemsApi.get<Item[]>('v1/item');

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
