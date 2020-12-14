import request from '../utils/request';
// if (process.env.ZSM === 'production') {
//   conf.publicPath = '/qms/';
// }
export async function groupAutoByAliasName(params) {
    return request('/api/base/group/autoByAliasName', {
      method: 'POST',
    //   body: params,
    });
  };