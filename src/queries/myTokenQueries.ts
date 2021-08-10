import { useQuery, useMutation } from 'react-query';
import { BigNumber, ethers, Transaction } from 'ethers';
import { toast } from 'react-toastify';
import { Token as TokenType } from '../../typechain/Token.d';
import Token from '../artifacts/contracts/Token.sol/Token.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

const tokenAddress = '0x1AE8b15f9c195aD80a714bF7bd887EEf50040179';

export const getCurrentAccount = async () => {
  const [account] = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });
  return account;
};

export const getTokenContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
  return contract as TokenType;
};

export const useFetchMyTokenBalance = () => {
  return useQuery({
    queryFn: async () => {
      const account = await getCurrentAccount();
      const contract = getTokenContract();
      const balance = await contract.balanceOf(account);
      return BigNumber.from(balance).toNumber();
    },
    queryKey: 'my-token-balance',
  });
};

export const useFetchAddressBalance = () => {
  return useMutation({
    mutationKey: 'address-token-balance',
    mutationFn: async (account: string) => {
      const contract = getTokenContract();
      const balance = await contract.balanceOf(account);
      return BigNumber.from(balance).toNumber();
    },
    onSuccess: () => {
      toast.success('Retrieved Balance Successfully');
    },
    onError: () => {
      toast.error('Failed to Retrieve Balance');
    },
  });
};

export const useFetchMyTokenTotalSupply = () => {
  return useQuery({
    queryFn: async () => {
      const contract = getTokenContract();
      const totalSupply = await contract.totalSupply();
      return BigNumber.from(totalSupply).toNumber();
    },
    queryKey: 'my-token-total-supply',
  });
};

export const useFetchMyTokenSymbol = () => {
  return useQuery({
    queryFn: async () => {
      const contract = getTokenContract();
      const symbol: string = await contract.symbol();
      return symbol;
    },
    queryKey: 'my-token-symbol',
  });
};

export const useFetchMyTokenName = () => {
  return useQuery({
    queryFn: async () => {
      const contract = getTokenContract();
      const name: string = await contract.name();
      return name;
    },
    queryKey: 'my-token-name',
  });
};

export const useFetchMyTokenOwner = () => {
  return useQuery({
    queryFn: async () => {
      const contract = getTokenContract();
      const owner: string = await contract.owner();
      return owner;
    },
    queryKey: 'my-token-owner',
  });
};

export const useSendTokens = () => {
  return useMutation({
    mutationKey: 'send-tokens',
    mutationFn: async ({ amount, account }: { amount: string; account: string }) => {
      await getCurrentAccount();
      const contract = getTokenContract();
      const transaction = await contract.transfer(account, amount);
      await transaction.wait();
      return transaction as Transaction;
    },
    onSuccess: () => {
      toast.success('Transaction Sent Successfully');
    },
    onError: () => {
      toast.error('Transaction Failed');
    },
  });
};
