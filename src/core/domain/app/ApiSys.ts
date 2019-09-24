import IApiSysBase from "./ApiSysBase";

export default interface IApiSys extends IApiSysBase {
    // space:  Link;
    // contentType: Link;
    revision: number;	
    createdAt: Date;	
    updatedAt: Date;
    locale: string;	
}
