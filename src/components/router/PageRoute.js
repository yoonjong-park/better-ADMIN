import React, {useEffect, useMemo} from 'react';
import {Route} from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const PageRoute = props => {
  useMemo(() => {
    nprogress.start();
  }, []);

  useEffect(() => {
    nprogress.done();
  }, []);

  return <Route {...props} />;
};

export default PageRoute;
