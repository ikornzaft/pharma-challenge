import { itemsApi } from '@/apis';
import { Item } from '@/interfaces';

export const getItemInfo = async (id: string) => {
  try {
    const { data } = await itemsApi.get<Item>(`/v1/item/${id}`);
    console.log(data);
    const {
      nombre,
      forma_farmaceutica,
      fabricante,
      procedencia,
      titular,
      descripcion,
      imagen,
    } = data;
    return {
      id: id,
      nombre,
      forma_farmaceutica,
      fabricante,
      procedencia,
      titular,
      descripcion,
      imagen,
    };
  } catch (error) {
    return null;
  }
};
