import { LoaderFunction } from 'react-router-dom';

export const searchLoader: LoaderFunction = ({ request }) => {
  return request.url;
};
