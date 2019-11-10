export const selectProducts = (state, category) => {
  if (category === undefined) return Object.values(state.entities.products)

  if (!state.entities.categories[category]) return [] ;
  
  const categoryId = state.entities.categories[category].id;
  const filteredProducts = []
  
  Object.values(state.entities.productCategories).forEach( productCategory => {
    if (categoryId === productCategory.category_id) {
      filteredProducts.push(state.entities.products[productCategory.product_id]);
    }
  })

  return filteredProducts;
}