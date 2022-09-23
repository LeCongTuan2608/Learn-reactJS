import axiosClient from './axiosClient';

const billAPI = {
   getAll(params) {
      //get all bill
      const url = `/bills/get_all_bill`;
      return axiosClient.get(url, { params });
   },
   getByID(id) {
      // get bill by id
      const url = `/bills/get_bill/${id}`;
      return axiosClient.get(url);
   },
   getBillDelivering(params) {
      //get bill dang giao hang
      const url = `/bills/get_bill_process`;
      return axiosClient.get(url, { params });
   },
   getBillDelivered(params) {
      //get bill da giao hang
      const url = `/bills/get_bill_success`;
      return axiosClient.get(url, { params });
   },
   add(data) {
      //add bill
      const url = `/bills/add_bill`;
      return axiosClient.get(url, { data });
   },
   update(data) {
      //add bill
      const url = `/bills/update_bill_status/${data.id}`;
      return axiosClient.get(url, { data });
   },
};
export default billAPI;
