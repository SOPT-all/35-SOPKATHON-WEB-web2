import { Axios } from './axiosInstance';

export const createCardApi = async (teamId, hint) => {
  await Axios.post(
    '/api/v1/cards',
    { groupId: 1, hint },
    {
      headers: {
        'User-Id': 4,
      },
    },
  );
};
