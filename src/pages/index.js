import { use, useEffect, useState } from "react";

import DataGrid from "@/components/DataGrid";
import DataList from "@/components/DataList";
import FilterBar from "@/components/FilterBar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import { getProducts } from "./api/product.apis";
// import { getProducts } from "@/apis/product.apis";

export default function Home() {
  const [layout, setLayout] = useState("grid");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);
  // console.log("products", products);

  const [sortByName, setSortByName] = useState("");
  // console.log("sortByName", sortByName);

  const [sortByPrice, setSortByPrice] = useState("");
  // console.log("sortByPrice", sortByPrice);

  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    let tempProducts = [...products];
    if (sortByName) {
      tempProducts = tempProducts.sort((a, b) => {
        if (sortByName === "asc") {
          return a.title.localeCompare(b.name);
        } else {
          return b.title.localeCompare(a.name);
        }
      });
    }
    if (sortByPrice) {
      tempProducts = tempProducts.sort((a, b) => {
        if (sortByPrice === "ascP") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }
    if (sortByName === "" && sortByPrice === "") {
      tempProducts = [...products];
    }

    setFilteredProducts(tempProducts);
  }, [sortByName, sortByPrice, products]);
  // console.log("filteredProducts", filteredProducts);

  return (
    <main>
      <Navbar />
      <Hero />
      <FilterBar
        layout={layout}
        setLayout={setLayout}
        sortByName={sortByName}
        setSortByName={setSortByName}
        sortByPrice={sortByPrice}
        setSortByPrice={setSortByPrice}
      />

      {layout === "grid" ? (
        <DataGrid data={filteredProducts} />
      ) : (
        <DataList data={filteredProducts} />
      )}
    </main>
  );
}
