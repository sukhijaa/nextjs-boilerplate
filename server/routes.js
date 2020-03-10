const routes = require('next-router')();

const ROUTE_NAMES = {
  INDEX: 'index',
  ARTICLES: 'articles',
  SINGLE_ARTICLE: 'article',
  TEST_SINGLE_ARTICLE: 'testSingle',
  AUTHORS: 'authors',
  EDITOR: 'editor',
};

const ALL_ROUTES = [
  {name: ROUTE_NAMES.INDEX, pattern: '/', page: 'index'},
  {name: ROUTE_NAMES.ARTICLES, pattern: '/articles', page: 'articles'},
  {name: ROUTE_NAMES.AUTHORS, pattern: '/authors', page: 'allAuthors'},
  {
    name: ROUTE_NAMES.SINGLE_ARTICLE,
    pattern: '/article/:slug',
    page: 'articleDetails',
  },
  {
    name: ROUTE_NAMES.TEST_SINGLE_ARTICLE,
    pattern: '/article-[:slug]-[:slug2]',
    page: 'articleDetails',
  },
  {name: ROUTE_NAMES.EDITOR, pattern: '/editor', page: 'editor'},
];

ALL_ROUTES.forEach(route => routes.add(route));

routes.ROUTE_NAMES = ROUTE_NAMES;

module.exports = routes;
