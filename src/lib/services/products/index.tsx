export const getProductsService = async () => {
  try {
    const response = await fetch(
      "https://products-server-iota.vercel.app/products"
    );
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
