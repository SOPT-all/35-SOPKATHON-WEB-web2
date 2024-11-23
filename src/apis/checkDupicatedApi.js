import { Axios } from './axiosInstance';

export const checkDuplicatedApi = async (name) => {
  const { data } = await Axios.post(
    '/api/v1/teams/check',
    { name: name },
    {
      headers: {
        'User-Id': 1,
      },
    },
  );
  return data.data.isDuplicated;
};
