@categories.each do |category| 
  json.set! category.name.downcase do 
    json.partial! 'api/categories/category', category: category
  end
end