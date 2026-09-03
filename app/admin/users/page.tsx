"use client";
import { getAllUser } from "@/api/user.api";
import DataTable from "@/components/admin/table/data.table";
import Loading from "@/components/common/ui/loading";
import { Role } from "@/types/enum.types";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IUser {
  full_name: string;
  _id: string;
  email: string;
  phone?: string;
  role: Role;
  status: "active" | "blocked";
  createdAt: string;
  profile_image?: {
    path: string;
    public_id: string;
  };
}

const UserPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: getAllUser,
    queryKey: ["getUser"],
  });

  const users: IUser[] = data?.data ?? [];

  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: "profile_image",
      header: "Profile",
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="flex items-center justify-center overflow-hidden  bg-gray-100 sm:h-12 sm:w-12">
            {user.profile_image?.path ? (
              <Image
                src={user.profile_image.path}
                alt={user.full_name}
                width={200}
                height={200}
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <span className="text-sm text-gray-500 w-fit h-fit p-3 rounded-2xl">
                No Image
              </span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "full_name",
      header: "Name",
      cell: ({ row }) => {
        return (
          <div className="block truncate max-w-35 font-semibold text-gray-800 sm:max-w-50">
            {row.original.full_name}
          </div>
        );
      },
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <span className="block min-w-45 whitespace-nowrap text-sm text-gray-700">
          {row.original.email}
        </span>
      ),
    },

    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => (
        <span className="whitespace-nowrap text-sm font-medium text-gray-700">
          {row.original.phone || "N/A"}
        </span>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => {
        const role = row.original.role;

        return (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              role === "ADMIN"
                ? "bg-purple-100 text-purple-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {role}
          </span>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Joined Date",
      cell: ({ row }) => (
        <span className="whitespace-nowrap text-sm text-gray-700">
          {row.original.createdAt
            ? new Date(row.original.createdAt).toLocaleDateString()
            : "N/A"}
        </span>
      ),
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => {
        const user = row.original;

        return (
          <div className="flex min-w-max gap-2">
            <Link
              href={`/admin/users/${user._id}`}
              className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-200 sm:px-3 sm:py-2 sm:text-sm"
            >
              View
            </Link>

            <Link
              href={`/admin/users/${user._id}/update`}
              className="rounded-md bg-blue-200 px-2.5 py-1.5 text-xs font-medium text-black transition hover:bg-blue-400 sm:px-3 sm:py-2 sm:text-sm"
            >
              Edit
            </Link>

            <button
              onClick={() => {
                console.log("delete:", user._id);
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

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <div className="flex min-h-75 w-full items-center justify-center text-sm text-red-500 sm:text-base">
        Failed to load users
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="mb-4">
        <h1 className="text-sl font-bold text-gray-800 sm:text-2xl">User</h1>
        <p className="mt-1 text-sm text-gray-500 sm:text-sm">
          Manage all registered users
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm">
        <DataTable columns={columns} data={users} />
      </div>
    </section>
  );
};

export default UserPage;
