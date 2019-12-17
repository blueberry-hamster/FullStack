export const getCart = () => (
  $.ajax({
    method: 'GET',
    url: `/api/carts/show`
  })
);