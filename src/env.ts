/* eslint-disable no-underscore-dangle */

const appWindow = (window as any);
const env: any = appWindow._env_ ? appWindow._env_ : process.env;

export default env;
