export default async function (path, opt) {
  const url = 'https://www.easy-mock.com/mock/5a964cffdd997801d1e291fe/movie' + path;
  const options = Object.assign({
    method: 'GET',
  }, opt);

  try {
    const response = await fetch(url, options);
    const { data, status } = await response.json();
    if (status === 0) {
      return data;
    } else {
      console.log('无法获取');
    }
  } catch (e) {
    console.log(e);
  }
}
