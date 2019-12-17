# items.json do
  @cart.cart_items.each do |cart_item|
    json.id @cart.id
    json.partial! 'api/cart_items/cart_item', cart_item: cart_item
  end
# end