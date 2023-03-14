import { history } from 'umi';

export function onRouteChange(router: any) {
  // console.log('router: ', router);
  const { location } = router;
  if (location.query) {
    if (location.query.type == 'react') {
      history.replace('/react');
    } else if (location.query.type == 'min') {
      history.replace('/minProgram');
    }
  }
}
