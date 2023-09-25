import React, { useEffect, useState } from "react"
import { parseShopifyResponse, shopifyClient } from "../../lib/shopify"

const Index = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts2, setFilteredProducts2] = useState([])
  const [filters, setFilters] = useState({
    showInStockOnly: false,
    selectedCategory: "",
    priceRange: [0, 1000000],
  })

  const isInStock = (product, showInStockOnly) =>
    !showInStockOnly || product.variants[0].available

  const matchesCategory = (product, selectedCategory) =>
    !selectedCategory || product.productType === selectedCategory

  const isInRange = (product, priceRange) =>
    product.variants[0].price >= priceRange[0] &&
    product.variants[0].price <= priceRange[1]

  useEffect(() => {
    const fetchData = async () => {
      setProducts(parseShopifyResponse(await shopifyClient.product.fetchAll()))
    }
    fetchData()
  }, [])

  useEffect(() => {
    setFilteredProducts2(
      products?.filter(
        (product) =>
          isInStock(product, filters.showInStockOnly) &&
          matchesCategory(product, filters.selectedCategory) &&
          isInRange(product, filters.priceRange)
      )
    )
  }, [products, filters])

  console.log(filteredProducts2)

  const handleToggleInStock = () => {
    setFilters({ ...filters, showInStockOnly: !filters.showInStockOnly })
  }

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, selectedCategory: e.target.value })
  }

  const handlePriceRangeChange = (e) => {
    const minPrice = parseFloat(e.target.value.split(",")[0])
    const maxPrice = parseFloat(e.target.value.split(",")[1])
    setFilters({ ...filters, priceRange: [minPrice, maxPrice] })
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <label className="mb-2 block">
        <input
          type="checkbox"
          checked={filters.showInStockOnly}
          onChange={handleToggleInStock}
          className="mr-2"
        />
        Show Only In Stock
      </label>

      <div className="mb-4">
        <label className="block font-bold mb-1">Category</label>
        <select
          value={filters.selectedCategory}
          onChange={handleCategoryChange}
          className="border rounded p-2 w-full"
        >
          <option value="">All Categories</option>
          <option value="Notebooks">Notebooks</option>
          <option value="iPhones">iPhones</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Price Range</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={`${filters.priceRange[0]},${filters.priceRange[1]}`}
          onChange={handlePriceRangeChange}
          className="w-full"
        />
        <div className="flex justify-between">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <ul className="list-none p-0">
        {filteredProducts2?.map((product) => (
          <li key={product.id} className="mb-2">
            <span className="font-bold mr-2">{product.title}</span> - $
            {product.variants[0].price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Index
