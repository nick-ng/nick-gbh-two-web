import config from '../config';

import { get } from '../utils';

const { serverUrl } = config;

const hostGame = (coachId) => get(`${serverUrl}/newgame`, { coachId });

export default {
  hostGame,
};
