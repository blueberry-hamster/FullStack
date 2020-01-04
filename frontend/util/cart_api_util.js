export const getCart = () => (
  $.ajax({
    method: 'GET',
    url: `/api/carts/show`
  })
);

export const newCart = user_id => (
  $.ajax({
    method: 'POST',
    url: 'api/carts/create',
    data: { cart: { user_id } }
  })
);

export const cleanCart = id => (
  $.ajax({
    method: 'PUT',
    url: `/api/carts/${ id }`
  })
);