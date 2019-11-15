export const createCartItem = cart_item => (
  $.ajax({
    method: 'POST',
    url: '/api/cart_items',
    cart_item
  })
);

export const updateCartItem = cart_item => (
  $.ajax({
    method: 'PUT',
    url: `/api/cart_items/${ cart_item.id }`,
    cart_item
  })
);

export const destroyCartItem = cart_item_id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/cart_items/${cart_item_id}`
  })
)