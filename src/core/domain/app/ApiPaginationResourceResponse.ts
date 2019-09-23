import IApiBaseResponse from "./ApiBaseResponse";
import IApiCommonResourceResponse from "./ApiCommonResourceResponse";

interface IApiIncludes {
    readonly Entry?: IApiCommonResourceResponse;
    readonly Asset?: IApiCommonResourceResponse;
}

export default interface IApiPaginationResourceResponse<T> extends IApiBaseResponse {
    readonly skip: number;
    readonly limit: number,
    readonly total: number;
    readonly items: T[];
    readonly includes: IApiIncludes;
}