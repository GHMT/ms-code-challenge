import { RouteComponentProps } from 'react-router';

import { IMatchParamProp } from '../../shared/types/Routing/Routes';
import { Recipe } from '../../core/domain/business/Recipe';

// Dummy and Smart shared props
type ISharedProps = ISharedOwnProps & ISharedExternalProps & IStateToProps;

interface ISharedOwnProps { // Custom props shared between smart and dummy
}
type ISharedExternalProps = {}; // External libraries props shared between smart and dummy
type IStateToProps = {};/* Add other states in case of needed in props */


// Smart Component types
export type ISmartProps = ISmartOwnProps & ISharedProps & IDispatchersToProps & RouteComponentProps<IPostDetailsMatchParams>;
export type ISmartState = ISmartOwnState & ISmartOwnStateToDummyProps;

interface ISmartOwnProps{}
interface IDispatchersToProps {}
export interface IPostDetailsMatchParams extends IMatchParamProp {
    recipeId: string;
}
// export type IDispatchToPropsMap = (dispatch: Dispatch) => IDispatchersToProps;

interface ISmartOwnState {}
interface ISmartOwnStateToDummyProps {}
// export type IStateToPropsMap = (state: IAppStore) => IStateToProps;


// Dummy Component types
export type IDummyProps = IDummyOwnProps & ISmartOwnStateToDummyProps & ISharedProps & IHandlers;

interface IDummyOwnProps {
    recipe: Recipe | null;
} // Props needed only by the dummy component
export interface IHandlers {} // Types for event handlings
