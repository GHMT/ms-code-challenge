import React, { ReactElement } from 'react';
import { match } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from './router-config';

interface IRouterProps {
  match: match;
}

const Router = (props: IRouterProps): ReactElement => (
  <Switch>
    <Route exact path={`${props.match.url}${ROUTES.RecipesList.path}`} component={ROUTES.RecipesList.component} />
    <Route exact path={`${props.match.url}${ROUTES.RecipeDetail.path}`} component={ROUTES.RecipeDetail.component} />
  </Switch>
)

export default Router;
