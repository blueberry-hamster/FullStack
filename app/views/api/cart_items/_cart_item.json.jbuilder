
json.set! cart_item.product_id do
  # json.extact! cart_item, :id, :product_id
  json.product do
    Product.find(cart_item.product_id)
  end
  json.(cart_item, :id, :quantity)
end