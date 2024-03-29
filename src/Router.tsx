/**
 * Pay atention to the Parkings module route. It does not have the boolean "exact".
 * Do this when you need to define sub-routes like "parkings/detail" matching a
 * sub-module in "./modules/parkings/containers/detail", for instance, that
 * has its own router. Otherwise, the main Parking component will not be rendered
 * and thus neither will its sub-module.
 */
import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from './router-config';

const Router = (): ReactElement => (
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={ROUTES.Home.path} component={ROUTES.Home.component} />
        {/* <Route exact path={ROUTES.NotFoundPage.path} component={ROUTES.NotFoundPage.component} /> */}
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Router;
