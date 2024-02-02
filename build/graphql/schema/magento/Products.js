const gql = String.raw;
const Products = gql `
    query GetProducts($filter: ProductAttributeFilterInput! $pageSize: Int) {
    products(
      filter: $filter
      pageSize: $pageSize
    ) {
      total_count
      items {
        name
        sku
      }
      page_info {
        page_size
        current_page
      }
    }
  }
`;
export default Products;
//# sourceMappingURL=Products.js.map