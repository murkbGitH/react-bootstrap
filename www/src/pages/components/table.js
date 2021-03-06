import { graphql } from 'gatsby';
import React from 'react';

import ComponentApi from '../../components/ComponentApi';
import Heading from '../../components/Heading';
import ReactPlayground from '../../components/ReactPlayground';
import TableBasic from '../../examples/Table/Basic';
import TableDark from '../../examples/Table/Dark';
import TableResponsive from '../../examples/Table/Responsive';
import TableResponsiveBreakpoints from '../../examples/Table/ResponsiveBreakpoints';
import TableSmall from '../../examples/Table/Small';
import withLayout from '../../withLayout';

export default withLayout(function TableSection({ data }) {
  return (
    <>
      <Heading h="1" id="tables">
        Tables
      </Heading>

      <p>
        Use the <code>striped</code>, <code>bordered</code> and{' '}
        <code>hover</code> props to customise the table.
      </p>
      <ReactPlayground codeText={TableBasic} />

      <Heading h="2" id="table-small">
        Small Table
      </Heading>

      <p>
        Use <code>size="sm"</code> to make tables compact by cutting cell
        padding in half.
      </p>
      <ReactPlayground codeText={TableSmall} />

      <Heading h="2" id="table-inverted">
        Dark Table
      </Heading>

      <p>
        Use <code>variant="dark"</code> to invert the colors of the table and
        get light text on a dark background.
      </p>
      <ReactPlayground codeText={TableDark} />

      <Heading h="2" id="table-responsive">
        Responsive
      </Heading>

      <p>
        Responsive tables allow tables to be scrolled horizontally with ease.
      </p>

      <Heading h="3" id="table-responsive-always">
        Always Responsive
      </Heading>

      <p>
        Across every breakpoint, use <code>responsive</code> for horizontally
        scrolling tables. Responsive tables are wrapped automatically in a{' '}
        <code>div</code>.
      </p>
      <ReactPlayground codeText={TableResponsive} />

      <Heading h="3" id="table-responsive-breakpoint">
        Breakpoint specific
      </Heading>

      <p>
        Use <code>responsive="sm"</code>, <code>responsive="md"</code>,{' '}
        <code>responsive="lg"</code>, or <code>responsive="xl"</code> as needed
        to create responsive tables up to a particular breakpoint. From that
        breakpoint and up, the table will behave normally and not scroll
        horizontally.
      </p>
      <ReactPlayground codeText={TableResponsiveBreakpoints} />

      <Heading h="2" id="table-api">
        API
      </Heading>
      <ComponentApi metadata={data.Table} />
    </>
  );
});

export const query = graphql`
  query TableQuery {
    Table: componentMetadata(displayName: { eq: "Table" }) {
      ...ComponentApi_metadata
    }
  }
`;
