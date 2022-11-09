// categorias disponíveis https://api.mercadolibre.com/sites/MLB/categories
// termo https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
// categorias por id https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
// categoria por termo https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
// item especifico https://api.mercadolibre.com/items/$PRODUCT_ID

export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await result.json();
  return data;
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`);
  const data = await result.json();
  return data;
}

export async function getProductsFromQuery(query) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=$${query}`);
  const data = await result.json();
  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
