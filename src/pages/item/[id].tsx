import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ItemComponent } from '@/components';
import { Item } from '@/interfaces';
import { itemsApi } from '@/apis';
import { getItemInfo } from '@/utils/getItemInfo';

interface Props {
  item: Item;
}

const ItemPage: NextPage<Props> = ({ item }) => {
  return <ItemComponent item={item} />;
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
