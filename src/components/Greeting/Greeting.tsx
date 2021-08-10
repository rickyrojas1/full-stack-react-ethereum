/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { getGreeterContract, useFetchGreeting, useSetGreeting } from '../../queries/greetingQueries';
import Card, { ButtonPosition } from '../Card/Card';
import { ContentContainer, GreetingInput, GreetingText, PageContainer } from './greeting.styles';

const Greeting = () => {
  const [updatedGreeting, setUpdatedGreeting] = useState('');
  const { data: greeting } = useFetchGreeting();
  const contract = getGreeterContract();
  const { mutate: setGreeting, isLoading: isLoadingGreeting } = useSetGreeting();

  return (
    <PageContainer>
      <Card
        index={0}
        buttonText="Apply"
        onApply={async () => {
          const transaction = await contract.setGreeting(updatedGreeting);
          setGreeting(transaction);
        }}
        buttonPosition={ButtonPosition.right}
        isLoading={isLoadingGreeting}
      >
        <ContentContainer>
          Update the current greeting:
          <GreetingInput value={updatedGreeting} onChange={e => setUpdatedGreeting(e.target.value)} />
        </ContentContainer>
      </Card>
      <Card index={1} isLoading={isLoadingGreeting}>
        <ContentContainer>
          current greeting:
          <GreetingText>{isLoadingGreeting ? 'Updating...' : greeting}</GreetingText>
        </ContentContainer>
      </Card>
    </PageContainer>
  );
};

export default Greeting;
