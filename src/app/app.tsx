import styled from '@emotion/styled';
import { Authenticator } from '@aws-amplify/ui-react';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Authenticator.Provider>
        <NxWelcome title="test-nx-15" />

      </Authenticator.Provider>
    </StyledApp>
  );
}

export default App;
