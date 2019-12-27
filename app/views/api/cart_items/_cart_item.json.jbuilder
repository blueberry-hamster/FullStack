
json.set! cart_item.product_id do
  json.product Product.find_by(id: cart_item.product_id)
  json.(cart_item, :id, :product_id, :quantity)
end