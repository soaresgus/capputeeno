import { useFilter } from '@/context/FilterProvider/useFilter';
import { api } from '@/lib/api';
import { IProduct } from '@/types/product';
import { createQuery } from '@/utils/createQuery';
import { useQuery } from '@tanstack/react-query';

async function getProducts(query: { query: string }) {
  const response = await api.post('', query);

  return response.data.data.allProducts as IProduct[];
}

export function useProducts() {
  const productsPerPage = 12;

  const { category, filterBy } = useFilter();

  const graphqlQuery = {
    query: createQuery(category, filterBy),
  };

  const {
    data: products,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ['products', category, filterBy],
    queryFn: () => getProducts(graphqlQuery),
    staleTime: 5000,
  });

  return { productsPerPage, products, isLoading };
}
