export const getProducts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/products'
  })
);

export const getProduct = name => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `/api/products/${name}`
  })
};