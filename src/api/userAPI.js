import axiosClient from './axiosClient';

const userAPI = {
   getAll(params) {
      const url = '/users/get_all_user';
      return axiosClient.get(url, { params });
   },
   getByJWT(params) {
      const url = '/users/get_user';
      return axiosClient.get(url, { params });
   },
   userLogin(data) {
      const url = '/login';
      return axiosClient.post(url, { data });
   },
   register(data) {
      const url = '/users/register';
      return axiosClient.post(url, data);
   },
   Update(email) {
      const url = `/users/update_user/${email}`;
      return axiosClient.put(url);
   },
};
export default userAPI;
