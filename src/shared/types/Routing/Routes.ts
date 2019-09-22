import { RouteProps as ReactRouteProps } from 'react-router-dom';

type oneOrMore = '+';
type zeroOrMore = '*';
type optional = '?';
type customMatchParam = '(\\d+)';

type suffix = optional | zeroOrMore | oneOrMore;

export interface IMatchParamProp {
  prefix?: string | undefined;
  suffix?: suffix;
  customMatchParam?: customMatchParam;
  endsWith?: string | undefined;
}

interface IParamsProps {
  params?: IMatchParamProp;
  path: string;
}

export type RouteProps = ReactRouteProps & IParamsProps;
