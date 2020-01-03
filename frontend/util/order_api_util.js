export const getOrders = user_id => (
  $.ajax({
    method: 'GET',
    url: `/api/orders`,
    data: { order: { user_id } }
  })
);

export const getOrder = id => (
  $.ajax({
    method: 'GET',
    url: `/api/orders/${id}`,
    data: { order: { id } }
  })
);

export const newOrder = order => (
  $.ajax({
    method: 'POST',
    url: 'api/orders',
    data: { order }
  })
);