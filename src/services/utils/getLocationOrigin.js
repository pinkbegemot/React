// @flow weak

export const getLocationOrigin: () => string = () => {
  if (!window.location.origin) {
    // window.location.origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
     window.location.origin = `${window.location.protocol}//${window.location.hostname}`;
  }
  return window.location.origin;
};

export default getLocationOrigin;
