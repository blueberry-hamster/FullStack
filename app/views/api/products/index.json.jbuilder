json.products do 
  @products.each do |product| 
    json.set! product.id do 
      json.partial! 'api/products/product', product: product
    end
  end
end

json.productCategories do 
  @product_categories.each do |product_category|
    json.set! product_category.id do
      json.extract! product_category, :id, :product_id, :category_id
    end
  end
end