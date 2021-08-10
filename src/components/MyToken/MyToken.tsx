import React, { useState } from 'react';
import { truncateAddress, useFetchCurrentUser } from '../../queries/accountQueries';
import {
  useFetchAddressBalance,
  useFetchMyTokenBalance,
  useFetchMyTokenName,
  useFetchMyTokenSymbol,
  useFetchMyTokenTotalSupply,
  useSendTokens,
} from '../../queries/myTokenQueries';
import Card, { ButtonPosition } from '../Card/Card';
import { ContentContainer, PageContainer } from '../Greeting/greeting.styles';
import { BoldHeader, BoldSubHeader, BoldValue, FormattedNumber, SendInput } from './myToken.styles';

const MyToken = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [account, setAccount] = useState('');
  const { data: currentUserAddress } = useFetchCurrentUser();
  const { data: totalSupply, isLoading } = useFetchMyTokenTotalSupply();
  const { data: tokenSymbol, isLoading: isLoadingTokenSymbol } = useFetchMyTokenSymbol();
  const { data: tokenName, isLoading: isLoadingTokenName } = useFetchMyTokenName();
  const { data: tokenBalance, isLoading: isLoadingBalance } = useFetchMyTokenBalance();
  const { mutate: fetchBalance, data: addressBalance, isLoading: isLoadingAddressBalance } = useFetchAddressBalance();
  const { mutate: sendTokens, isLoading: isLoadingTransaction } = useSendTokens();

  return (
    <PageContainer>
      <Card index={0} buttonPosition={ButtonPosition.right} isLoading={isLoadingTokenSymbol || isLoadingTokenName}>
        <ContentContainer>Token Name:</ContentContainer>
        <ContentContainer>
          <BoldHeader>{tokenName}</BoldHeader>({tokenSymbol})
        </ContentContainer>
      </Card>
      <Card index={1} buttonPosition={ButtonPosition.right} isLoading={isLoading}>
        <ContentContainer>Total Supply:</ContentContainer>
        <ContentContainer>
          <FormattedNumber fontSize="32px" value={totalSupply} displayType="text" thousandSeparator />
          {tokenSymbol}
        </ContentContainer>
      </Card>

      <Card index={2} isLoading={isLoadingBalance}>
        <ContentContainer>{truncateAddress(currentUserAddress)} Balance:</ContentContainer>
        <ContentContainer>
          <FormattedNumber fontSize="32px" value={tokenBalance} displayType="text" thousandSeparator />
          {tokenSymbol}
        </ContentContainer>
      </Card>
      <Card
        buttonPosition={ButtonPosition.right}
        buttonText="Send"
        index={3}
        isLoading={isLoadingAddressBalance}
        onApply={() => fetchBalance(account)}
      >
        <BoldValue>Check Account Balance:</BoldValue>
        <SendInput value={account} placeholder="Address" onChange={e => setAccount(e.target.value)} />

        {addressBalance && (
          <BoldSubHeader>
            Wallet Balance:{' '}
            <FormattedNumber fontSize="12" value={addressBalance} displayType="text" thousandSeparator />({tokenSymbol})
          </BoldSubHeader>
        )}
      </Card>
      <Card
        buttonPosition={ButtonPosition.right}
        buttonText="Send"
        index={4}
        isLoading={isLoadingTransaction}
        onApply={() => sendTokens({ account: recipient, amount })}
      >
        <BoldValue>Send Tokens:</BoldValue>
        <SendInput value={amount} placeholder="Amount" onChange={e => setAmount(e.target.value)} />
        <SendInput value={recipient} placeholder="Recipient Address" onChange={e => setRecipient(e.target.value)} />
      </Card>
    </PageContainer>
  );
};

export default MyToken;
