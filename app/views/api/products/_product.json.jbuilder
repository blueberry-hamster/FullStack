json.extract! product, :id, :name, :tagline, :price
if product.photos.attached?
  json.photoUrls product.photos.map { |photo| url_for(photo)}
end