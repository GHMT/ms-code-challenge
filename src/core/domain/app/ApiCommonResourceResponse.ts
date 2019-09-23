import IApiBaseResponse from "./ApiBaseResponse";

export default interface IApiCommonResourceResponse<T = any> extends IApiBaseResponse {
    readonly fields: T;
}
