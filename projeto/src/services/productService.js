import api from './api';

const addProductAPI = (product) => 
    api.post('/pedido/create', product)
        .then((response) => response)
        .catch((err) => err)

const findAllProducts = () => 
    api.get('/pedido/findAll')
        .then((response) => response)
        .catch((err) => err)

export {addProductAPI, findAllProducts};