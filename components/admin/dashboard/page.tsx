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

const DashBoardPage = () => {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryFn: product,
    queryKey: ["products"],
  });

  const products: IProduct[] = data?.data?.products ?? [];

  const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: "cover_image",
      header: "Cover Image",
      cell: ({ row }) => {
        const product = row.original;

        return (
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
            {product.cover_image?.path ? (
              <Image
                src={product.cover_image.path}
                alt={product.name}
                width={100}
                height={100}
                className="h-full w-full  object-contain scale-100"
              />
            ) : (
              <span className="text-[10px] text-gray-400 text-center">
                No Image
              </span>
            )}
          </div>
        );
      },
    },

    {
      accessorKey: "name",
      header: "Product Name",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.name}
        </span>
      ),
    },

    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="h-20 overflow-hidden">
          <span className="block max-w-45 text-sm text-gray-700 line-clamp-2 overflow-hidden sm:max-w-70">
            {row.original.description || "No Description"}
          </span>
        </div>
      ),
    },

    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }) => (
        <span className="font-semibold text-gray-800">
          {row.original.brand?.name || "N/A"}
        </span>
      ),
    },

    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => (
        <span className="font-semibold text-gray-800">
          {row.original.category?.name || "N/A"}
        </span>
      ),
    },

    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <span className="whitespace-nowrap font-semibold text-gray-700">
          Rs. {row.original.price}
        </span>
      ),
    },

    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => (
        <span className={`font-semibold text-gray-700 `}>
          {row.original.stock}
        </span>
      ),
    },

    {
      id: "action",
      header: "Action",
      cell: ({ row }) => {
        const product = row.original;

        return (
          <div className="flex min-w-max gap-2">
            <Link
              href={`/admin/products/${product._id}/update`}
              className="rounded-md bg-blue-200 px-2.5 py-1.5 text-xs font-medium text-black transition hover:bg-blue-400 sm:px-3 sm:py-2 sm:text-sm"
            >
              Edit
            </Link>

            <button
              onClick={() => {
                console.log("delete:", product._id);
              }}
              className="rounded-md bg-red-100 px-2.5 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-300 sm:px-3 sm:py-2 sm:text-sm"
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
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="flex min-h-75 w-full items-center justify-center">
        <p className="text-sm text-red-500 sm:text-base">
          Failed to load products
        </p>
      </div>
    );
  }

  return (
    <section className="w-full min-w-0">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Recent Products
        </h2>

        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Recently added products
        </p>
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="w-full overflow-x-auto">
          <div className="min-w-225">
            <DataTable columns={columns} data={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoardPage;
