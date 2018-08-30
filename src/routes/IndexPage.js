import React from 'react';
import { connect } from 'dva';

// import Example from '../components/Example.js'
import Layout from '../components/layout/layout.js'
function IndexPage() {
  return (
    <Layout />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
