import { useQuery } from 'react-query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

export const truncateAddress = (address?: string) => {
  if (!address) return '';

  const addressStart = address.slice(0, 6);
  const addressEnd = address.slice(-4);
  return `${addressStart}...${addressEnd}`;
};

export const useFetchCurrentUser = () => {
  return useQuery({
    queryFn: async () => {
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return account;
    },
    queryKey: 'current-user',
  });
};
