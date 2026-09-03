"use client";
import { getBrand } from "@/api/brand.api";
import DataTable from "@/components/admin/table/data.table";
import Loading from "@/components/common/ui/loading";
import { TBrand, TGetBrand } from "@/types/brand.types";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

interface TGBrand {
  _id: string;
  name: string;
  description: string;
  logo?: {
    path: string;
    public_id: string;
  };
}

const BrandPage = () => {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryFn: getBrand,
    queryKey: ["brands"],
  });
  const brands: TGBrand[] = data?.data ?? [];
  const columns: ColumnDef<TGBrand>[] = [
    {
      accessorKey: "logo",
      header: "Logo",

      cell: ({ row }) => {
        const brand = row.original;
        return (
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
            {brand.logo?.path ? (
              <Image
                src={brand.logo.path}
                alt={row.original.name}
                width={300}
                height={300}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-sm text-gray-400">No Logo</span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Brand Name",
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
          <p className="max-w-md text-sm text-gray-700">
            {row.original.description || "No Description"}
          </p>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => {
        const brand = row.original;
        return (
          <div className="flex gap-2">
            <Link
              href={`/admin/brands/${brand._id}/update`}
              className="rounded-md bg-blue-200 px-3 py-3 text-sm font-medium text-black hover:bg-blue-400"
            >
              Edit
            </Link>
            <button
              onClick={() => {
                console.log("delete:", brand._id);
              }}
              className="rounded-md bg-red-100 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-200"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: brands,
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
        <p className="text-red-500">Failed to load brands</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <section className="mb-6 flex justify-between gap-4 ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Brands</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your product brands
          </p>
        </div>
        <Link
          href={"/admin/brands/add-new"}
          className="rounded-lg  bg-blue-600 px-3 py-3 text-center font-semibold text-white w-fit "
        >
          +Add Brand
        </Link>
      </section>
      <DataTable columns={columns} data={brands} />
    </main>
  );
};

export default BrandPage;
