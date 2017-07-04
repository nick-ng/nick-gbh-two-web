const localforage = require('localforage');

localforage.config({
  name: 'GBH_IDB',
  storeName: 'GBH_IMAGES',
  version: '1',
  description: 'Caches Guildball images in IndexedDB to reduce data usage.',
});

export default localforage;
