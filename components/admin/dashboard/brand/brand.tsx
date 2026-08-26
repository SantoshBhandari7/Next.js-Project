"use client";
import { Image } from "@/types/gloabl.types";
// import { Brand } from "@/types/brand";
import DataTable from "../../table/data.table";

interface IBrandProps {
  _id: string;
  name: string;
  description: string;
  logo: string;
  status?: "Active" | "Inactive";
}

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import Button from "@/components/common/ui/button";

const brands: IBrandProps[] = [
  {
    _id: "1",
    name: "Nike",
    description: "Sportswear brand",
    logo: "/images/nike.png",
    status: "Active",
  },

  {
    _id: " 2",
    name: "Adidas",
    description: "Sports clothing brand",
    logo: "/images/adidas.png",
    status: "Active",
  },

  {
    _id: "3",
    name: "Zara",
    description: "Fashion brand",
    logo: "/images/zara.png",
    status: "Inactive",
  },
];

interface Props {
  data: IBrandProps[];
}

// const BrandTable = ({ data }: Props) => {
const columns: ColumnDef<IBrandProps>[] = [
  {
    accessorKey: "name",
    header: "Brand Name",
  },

  {
    accessorKey: "description",
    header: "Description",
  },

  {
    accessorKey: "status",
    header: "Status",
  },

  //   {
  //     id: "actions",
  //     header: "Actions",

  //     cell: ({ row }) => (
  //       <div className="flex w-full text-gray-600 gap-4">
  //         <Link href={"/admin/brands/update"} className="text-black w-30">
  //           <Button type="submit" label="Edit" />
  //         </Link>

  //         <Link href={"/admin/brands/delete"} className="text-red-600  w-30">
  //           <Button type="submit" label="Delete" />
  //         </Link>
  //       </div>
  //     ),
  //   },
];

const BrandDetails = () => {
  return (
    <div className="w-full h-[20vh]">
      <DataTable columns={columns} data={brands} />
    </div>
  );
};

export default BrandDetails;
