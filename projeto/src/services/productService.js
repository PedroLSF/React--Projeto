import api from './api';

const addProductAPI = (product) => 
    api.post('/pedido/create', product)
        .then((response) => response)
        .catch((err) => err)

const findAllProducts = () => 
    api.get('/pedido/findAll')
        .then((response) => response)
        .catch((err) => err)

const findProductById = (id) => 
    api.get(`/pedido/find/${id}`)
        .then((response) => response)
        .catch((err) => err)

const updateProductById = (id, productEdit) => 
    api.put(`/pedido/update/${id}`, productEdit)
        .then((response) => response)
        .catch((err) => err)

const deleteProduct = (id) => 
    api.delete(`/pedido/delete/${id}`)
        .then((response) => response)
        .catch((err) => err)


export {addProductAPI, findAllProducts, findProductById, updateProductById, deleteProduct};