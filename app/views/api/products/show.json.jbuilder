product = @product

variations = product.variations
description = product.description
instruction = product.instruction
size = product.size
category = product.category
ingredients = product.ingredients
tags = product.tags
json.set! product.name do 
  json.extract! product, :id, :name, :tagline, :price
  json.set! :variations, variations
  json.set! :description, description
  json.set! :instruction, instruction
  json.set! :size, size
  json.set! :category, category
  json.set! :ingredients, ingredients
  json.set! :tags, tags
  # if product.photos.attached?
  #   json.photoUrls product.photos.map { |photo| url_for(photo)}
  # end
end
