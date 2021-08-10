import { toast } from 'react-toastify';
import { useMutation, useQuery } from 'react-query';
import { ContractTransaction, ethers } from 'ethers';
import { Greeter as GreeterType } from '../../typechain/Greeter.d';
import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

const greeterAddress = '0x25334FE6E0CDC95bE0177c1fe92998E079EEcA8a';

export const getGreeterContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
  return contract as GreeterType;
};

export const useFetchGreeting = () => {
  const contract = getGreeterContract();

  return useQuery({
    queryFn: async () => {
      const greeting = await contract.greet();
      return greeting;
    },
    queryKey: 'greeting',
  });
};

export const useSetGreeting = () => {
  const { refetch } = useFetchGreeting();

  return useMutation({
    mutationKey: 'setGreeting',
    mutationFn: async (transaction: ContractTransaction) => {
      await transaction.wait();
      await refetch();
      return transaction;
    },
    onSuccess: () => {
      toast.success('Transaction Sent Successfully ');
    },
    onError: () => {
      toast.error('Transaction Failed ');
    },
  });
};
