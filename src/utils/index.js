export const processResponse = (response) => {
  const status = response.status;
  const contentType = response.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    if (status >= 400 && response.status < 600) {
      return response.json().then((json) => {
        throw json;
      });
    }
    return response.json();
  }
  return response.text();
};

export const get = (url, headers = {}) => fetch(url, {
  headers: Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }, headers),
  method: 'get',
  mode: 'cors',
})
.then((res) => processResponse(res));

export const post = (url, jsonData = {}, headers = {}) => fetch(url, {
  headers: Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }, headers),
  method: 'post',
  mode: 'cors',
  body: JSON.stringify(jsonData),
})
.then((res) => processResponse(res));

export const readBlobFromUrl = (url) => new Promise((resolve/* , reject */) => {
  const oReq = new XMLHttpRequest();
  oReq.open('GET', url, true);
  oReq.responseType = 'blob';
  oReq.onload = () => resolve(oReq.response);
  oReq.send();
});

export const readArrayBufferFromUrl = (url) => new Promise((resolve/* , reject */) => {
  const oReq = new XMLHttpRequest();
  oReq.open('GET', url, true);
  oReq.responseType = 'arraybuffer';
  oReq.onload = () => resolve(oReq.response);
  oReq.send();
});

export const blobToData = (blob) => new Promise((resolve, reject) => {
  if (blob) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(blob);
    fileReader.onload = () => resolve(fileReader.result);
  } else {
    reject('No blob');
  }
});

export const readDataFromUrl = async (url) => blobToData(await readBlobFromUrl(url));

export default {
  post,
};
