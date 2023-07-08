import { api } from '@/lib/api';
import { IProduct } from '@/types/product';
import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  const productsPerPage = 12;

  const graphqlQuery = {
    query: `query {
        allProducts {
            id,
            name,
            image_url,
            price_in_cents,
            category
        }
      }`,
  };

  async function getProducts() {
    const response = await api.post('', graphqlQuery);

    return response.data.data.allProducts as IProduct[];
  }

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });

  return { productsPerPage, products, isLoading };
}
