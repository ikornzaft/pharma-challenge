import { NextPage } from 'next';
import { Layout } from '@/components';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { ItemsContext } from '@/context';
import { toast } from 'react-toastify';
import { Item } from '@/interfaces';

const EditPage: NextPage = () => {
  const [itemToEdit, setItemToEdit] = useState<Item | undefined | null>(null);
  const router = useRouter();
  const { id } = router.query;
  const { items } = useContext(ItemsContext);
  const toastId = 'edit-toast-id';

  useEffect(() => {
    const item = items.find((item) => item.id === id);
    if (typeof window !== 'undefined' && items.length > 0 && !item) {
      console.log(items);
      toast.warn('No se encontró el item', {
        autoClose: 2000,
        toastId,
      });
      setTimeout(() => {
        router.push('/');
      }, 2500);
    }

    setItemToEdit(item);
  }, [items, id, router]);

  return (
    <Layout
      title={`Pharma Challenge ${
        itemToEdit ? `- Editando ${itemToEdit.nombre}` : ''
      }  `}
    >
      <div>NOMBRE</div>
    </Layout>
  );
};

export default EditPage;
