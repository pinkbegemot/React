
export const getURL= () => string => {

      // window.location.origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
      return `${window.location.pathname}`;


  };

  export default getURL;