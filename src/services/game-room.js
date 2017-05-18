import config from '../config';

import utils from '../utils';

const { serverUrl } = config;
const { get } = utils;

const hostGame = () => get(`${serverUrl}/newgame`, {})
  .then(res => console.log('host game response', res));

export default {
  hostGame,
};
