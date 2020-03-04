import unfetch from "isomorphic-unfetch";

export const APIEndpoints = {
  GET_ARTICLES_LOCAL: '/data/articlesData.json',
  GET_SINGLE_ARTICLE: '/api/:slug'
};

export const getBaseURLFromContext = (ctx) => {
  let hostname = 'localhost:8000';

  if (ctx.isServer) {
    const {req} = ctx;
    hostname = (req.headers || {}).host || hostname;
  } else {
    hostname = location.host || hostname;
  }

  return `http://${hostname}`;
};

export const buildURL = (path, pathParams = {}, queryParams = {}) => {
  Object.keys(pathParams).forEach(key => {
    path = path.replace(`:${key}`, encodeURIComponent(pathParams[key]));
  });
  Object.keys(queryParams)
    .filter(key => queryParams[key] !== null && typeof queryParams[key] !== 'undefined')
    .forEach((key, index) => {
      const param = encodeURIComponent(queryParams[key]);

      if (index === 0) {
        path = path + `?${key}=${param}`;
      } else {
        path = path + `&${key}=${param}`;
      }
    });
  return path;
};

export const HTTP = {
  GET: (url, basedURL) => {
    const finalURL = basedURL + url;
    return unfetch(finalURL).then(res => res.json());
  }
};
