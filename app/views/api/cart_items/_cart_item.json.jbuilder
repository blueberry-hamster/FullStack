
json.set! cart_item.id do
  json.extact! cart_item, :id
  product.json do
    CartItem.find(cart_item.product_id)
  end
  json.extact! cart_item, :quantity
end