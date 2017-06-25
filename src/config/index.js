import prodSettings from './prod';

const defaultSettings = {
  serverUrl: 'http://localhost:4000',

  // contentfulProxyUrl: 'http://localhost:4001',
  contentfulProxyUrl: 'https://nick-gbh-contentful-proxy-s.herokuapp.com',
};

export default ((env) => {
  switch (env) {
    case 'production':
      return Object.assign({}, defaultSettings, prodSettings);
    default:
      return defaultSettings;
  }
})(process.env.NODE_ENV);
