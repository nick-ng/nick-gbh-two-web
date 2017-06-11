import utils from '../utils';
import config from '../config';

const { contentfulProxyUrl } = config;

export const getAllPlayers = async () => {
  const allEntries = await utils.get(`${contentfulProxyUrl}/player-list`);
  return allEntries;
};

export default {
  getAllPlayers,
};
