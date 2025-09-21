import axios from 'axios'
export default async function fetchData(url)
{
  let response = await axios.get(url);
  return response;
}