export const getCart = () => (
  $.ajax({
    method: 'GET',
    url: `/api/carts/show`
  })
);

export const newCart = userId => (
  $.ajax({
    method: 'POST',
    url: 'api/carts/create',
    data: { cart: userId }
  })
);