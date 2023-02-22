import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products-api';

const Products = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <>{JSON.stringify(data)}</>;
};

export default Products;
