export const getCart = cart_id => (
  $.ajax({
    method: 'GET',
    url: `/api/carts/${ cart_id }`
  })
);