import utils from '../utils';
// import config from '../config';

const getAllEntries = async (spaceId = 'asdf') => {
  const allEntries = await utils.get(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=asdf`);
  console.log('allEntries', allEntries);
  return allEntries;
};

export default {
  getAllEntries,
};
