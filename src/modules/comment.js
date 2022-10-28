const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eJ0dYt3woHnL6Sz1FyVG/';

const getComments = async (id) => {
  const URL = `${commentUrl}comments?item_id=${id}`;
  const response = await fetch(URL);
  return response.json();
};

const addComments = async (data) => {
  const URL = `${commentUrl}comments`;
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return response.text();
}

export {addComments, getComments}
