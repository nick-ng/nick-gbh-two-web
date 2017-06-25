import utils from '../utils';
import config from '../config';

const { contentfulProxyUrl } = config;

const getFromContentfulProxy = (route) => utils.get(`${contentfulProxyUrl}/${route}`);

export const getAllPlayers = () => getFromContentfulProxy('players');

export const getAllGuilds = () => getFromContentfulProxy('guilds');

export default getFromContentfulProxy;
