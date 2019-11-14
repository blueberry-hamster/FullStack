json.products do 
  @products.each do |product| 
    json.set! product.id do 
      json.partial! 'api/products/product', product: product
      json.set! :category, product.category.name

      if product.photos.attached?
        json.photoUrls product.photos.map { |photo| url_for(photo)}
      end
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