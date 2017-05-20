const processResponse = (response) => {
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

const get = (url, jsonData, headers) => fetch(url, {
  headers: Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }, headers),
  method: 'post',
  mode: 'cors',
  body: JSON.stringify(jsonData),
})
.then(res => processResponse(res));

export default {
  get,
};
