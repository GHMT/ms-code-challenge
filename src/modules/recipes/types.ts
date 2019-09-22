import { RouteComponentProps } from 'react-router';

import { IMatchParamProp } from '../../shared/types/Routing/Routes';
// import { Post } from '../../core/domain/business/Post';
// import { IPostCardProps } from '../../shared/components/post-card';

// Dummy and Smart shared props
type ISharedProps = ISharedOwnProps & ISharedExternalProps & IStateToProps;

interface ISharedOwnProps { // Custom props shared between smart and dummy
}
type ISharedExternalProps = {}; // External libraries props shared between smart and dummy
type IStateToProps = {};/* Add other states in case of needed in props */


// Smart Component types
export type ISmartProps = ISmartOwnProps & ISharedProps & IDispatchersToProps & RouteComponentProps<IPostListMatchParams>;
export type ISmartState = ISmartOwnState & ISmartOwnStateToDummyProps;

interface ISmartOwnProps{}
interface IDispatchersToProps {}
export interface IPostListMatchParams extends IMatchParamProp {}
// export type IDispatchToPropsMap = (dispatch: Dispatch) => IDispatchersToProps;

interface ISmartOwnState {}
interface ISmartOwnStateToDummyProps {
    // posts: Post[];
}
// export type IStateToPropsMap = (state: IAppStore) => IStateToProps;


// Dummy Component types
export type IDummyProps = IDummyOwnProps & ISmartOwnStateToDummyProps & ISharedProps & IHandlers;

interface IDummyOwnProps {} // Props needed only by the dummy component
export interface IHandlers {
    // onViewClick: IPostCardProps['onViewClick'];
} // Types for event handlings
