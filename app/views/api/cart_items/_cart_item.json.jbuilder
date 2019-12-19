
json.set! cart_item.product_id do
  # json.product do
  #   Product.find(cart_item.product_id)
  # end
  json.(cart_item, :id, :product_id, :quantity)
end