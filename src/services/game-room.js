import config from '../config';

import utils from '../utils';

const { serverUrl } = config;
const { get } = utils;

const hostGame = (coachId) => get(`${serverUrl}/newgame`, { coachId });

export default {
  hostGame,
};
