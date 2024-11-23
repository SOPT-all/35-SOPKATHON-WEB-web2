import { Axios } from './axiosInstance';

export const createTeamApi = async (name, minimumStartNumber) => {
  const { data } = await Axios.post(
    '/api/v1/teams',
    { name: name, minimumStartNumber: minimumStartNumber },
    {
      headers: {
        'User-Id': 1,
      },
    },
  );
  return data.data;
};
