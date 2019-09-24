/* eslint-disable import/prefer-default-export */
/**
 * Here is where you should configure the routing navigation
 * to your big app modules (from a user perspective, not functional modules).
 * The idea of this seed is to structure each user module in a specific route, like "/alarms" below.
 * The previous route should match the main component in "./modules/alarms", so that it is easier to track.
 * If your module should have sub-routes, it is a good idea to match them with a sub-module
 * that defines its own sub-router. Take a look inside "./modules/parkins" to see an example.
 */
import { lazy } from 'react';

import { RouteProps } from '../shared/types/Routing/Routes';

const RecipesList = lazy(() => import('./recipes'));
const RecipeDetail = lazy(() => import('./recipe-detail'));


export interface IRoutes {
  RecipesList: RouteProps;
  RecipeDetail: RouteProps;
}

export const ROUTES: IRoutes = {
  RecipesList: {
    component: RecipesList,
    path: 'recipes',
  },
  RecipeDetail: {
    component: RecipeDetail,
    path: 'recipe-detail/:recipeId',
  },
}
