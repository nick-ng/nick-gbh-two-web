import utils from '../utils';
// import config from '../config';

const getAllEntries = async (spaceId = process.env.CONTENTFUL_SPACE) => {
  const allEntries = await utils.get(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`);
  console.log('allEntries', allEntries);
  return allEntries;
};

export default {
  getAllEntries,
};

getAllEntries();
