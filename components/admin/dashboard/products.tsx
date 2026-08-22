"use client";
import { brand } from "@/api/brand.api";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import DataTable from "../table/data.table";
interface ProductDetails {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
}

const products: ProductDetails[] = [
  {
    _id: "1",
    name: "Kurtha",
    brand: "Himalayan Wear",
    category: "kurtha",
    price: 2000,
    stock: 10,
  },
  {
    _id: "2",
    name: "Shoes",
    brand: "One Eight",
    category: "Shoes",
    price: 10000,
    stock: 23,
  },
  {
    _id: "3",
    name: "Jacket",
    brand: "Urban",
    category: "jacket",
    price: 2300,
    stock: 30,
  },
];

const columns: ColumnDef<ProductDetails>[] = [
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <span>Rs.{row.original.price} </span>,
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => <span>{row.original.stock}</span>,
    // {
    //   const stock = row.original.stock;
    //   return (
    //     <span className={`${stock}<10 ? "text-red-600":"text-green-600"`}>
    //       {stock}
    //     </span>
    //   );
    // },
  },
];

function ProductDetails() {
  return (
    <main className="w-full h-[20vh]">
      <DataTable columns={columns} data={products} />
    </main>
  );
}

export default ProductDetails;
