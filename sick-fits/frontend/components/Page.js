import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal} from 'styled-components';
import theme from '../theme';

const StyledPage = styled.div`
  background: ${theme.white};
  color: ${theme.black};
`;

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  padding: 2rem;
  margin: 0 auto;
`

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;
