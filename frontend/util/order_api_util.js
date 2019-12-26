export const getOrders = user_id => (
  $.ajax({
    method: 'GET',
    url: `/api/carts/index`,
    data: { order: { user_id } }
  })
);

export const getOrder = id => (
  $.ajax({
    method: 'GET',
    url: `/api/carts/show`,
    data: { order: { id } }
  })
);

export const newOrder = order => (
  $.ajax({
    method: 'POST',
    url: 'api/carts/create',
    data: { order }
  })
);