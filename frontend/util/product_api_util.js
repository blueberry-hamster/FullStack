export const getProducts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/products'
  })
);

export const getProduct = name => (
  $.ajax({
    method: 'GET',
    url: `/api/product/${name}`
  })
);