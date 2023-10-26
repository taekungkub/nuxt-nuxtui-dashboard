import type { ProductTy } from "../types/type"

const baseUrl = "https://dummyjson.com"

export default {
  products() {
    return useFetch<{
      products: ProductTy[]
    }>(`${baseUrl}/products`)
  },
  product(id: string) {
    return useFetch<ProductTy>(`${baseUrl}/products/${id}`, {
      lazy: true,
    })
  },
}
