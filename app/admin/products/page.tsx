"use client";
import { product } from "@/api/product.api";
import DataTable from "@/components/admin/table/data.table";
import Loading from "@/components/common/ui/loading";
import { IProduct } from "@/types/products.types";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

// interface IPProps {
//   product: IProduct;
// }

const ProductPage = () => {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryFn: product,
    queryKey: ["products"],
  });

  const products: IProduct[] = data?.data ?? [];

  const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: "cover_image",
      header: "Cover_image",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
            {product.cover_image?.path ? (
              <Image
                src={product.cover_image.path}
                alt={row.original.name}
                width={300}
                height={300}
                className="h-full w-full object-contain"
              />
            ) : (
              <span>No Cover Image</span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Product Name",
      cell: ({ row }) => {
        return (
          <span className="font-semibold text-gray-800">
            {row.original.name}
          </span>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => {
        return (
          <span className="max-w-md text-sm text-gray-700 line-clamp-2">
            {row.original.description || "No Description"}
          </span>
        );
      },
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }) => {
        return (
          <span className="font-semibold text-gray-800  ">
            {row.original.brand?.name}
          </span>
        );
      },
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => {
        return (
          <span className="text-gray-800 font-semibold">
            {row.original.category?.name}
          </span>
        );
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        return (
          <span className="text-gray-700 font-semibold">
            {row.original.price}
          </span>
        );
      },
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => {
        return (
          <span className="text-gray-700 font-semibold">
            {row.original.stock}
          </span>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <div className="flex gap-2">
            <Link
              href={`/admin/products/${product._id}/update`}
              className="rounded-md bg-blue-200 px-3 py-2 text-center text-sm font-medium text-black hover:bg-blue-400"
            >
              Edit
            </Link>
            <button
              onClick={() => {
                console.log("delete:", product._id);
              }}
              className="rounded-md bg-red-100 px-3 py-2 text-center text-red-600 hover:bg-red-300 font-medium"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isPending) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">Failed to load products</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <section className="mb-6 flex justify-between gap-4 ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your products</p>
        </div>
        <Link
          href={"/admin/products/add-new"}
          className="rounded-lg  bg-blue-600 px-3 py-2 text-center font-semibold text-white w-fit "
        >
          +Add Product
        </Link>
      </section>
      <DataTable columns={columns} data={products} />
    </main>
  );
};

export default ProductPage;
