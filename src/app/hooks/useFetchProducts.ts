import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useFetchProducts = () => {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/products?page=1&rows=10&sortBy=id&orderBy=DESC`,
            )
            return data.products;
        },
    })
}