import axiosClient from './axiosClient';

const productAPI = {
   getAll(params) {
      // get all products
      const url = '/products/get_all_product';
      return axiosClient.get(url, { params });
   },
   getByCategories(id) {
      // get products by category
      const url = `/products/get_product_by_category/${id}`;
      return axiosClient.get(url);
   },
   getById(id) {
      // get product by id
      const url = `/products/get_product/${id}`;
      return axiosClient.get(url);
   },
   getBySearch(params) {
      // get product by id search
      const url = `/products/search_product?product_name=`;
      return axiosClient.get(url, { params });
   },
   getProDuctsNew(params) {
      // get product by id search
      const url = `/products/get_product_new`;
      return axiosClient.get(url, { params });
   },
   getProDuctsHot(params) {
      // get product by id search
      const url = `/products/get_product_hot`;
      return axiosClient.get(url, { params });
   },
   add(data) {
      const url = '/products/add_product';
      return axiosClient.post(url, data);
   },
   update(data) {
      const url = `/products/update_product/${data.id}`;
      return axiosClient.put(url, data);
   },
   remove(id) {
      const url = `/products/delete_product/${id}`;
      return axiosClient.put(url);
   },
};
export default productAPI;
