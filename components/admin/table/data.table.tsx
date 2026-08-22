"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
interface DataTableIProps {
  columns: ColumnDef<any>[];
  data: any[];
}

const DataTable = ({ data, columns }: DataTableIProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <main className="border  border-black rounded-lg">
      <table className="w-full">
        <thead className="border-b ">
          {table.getHeaderGroups().map((headerGroups) => (
            <tr key={headerGroups.id}>
              {headerGroups.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-2 py-3 pl-2 text-md font-semibold text-left border-r text-gray-700"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-2 py-2 text-md border-r">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-red-500 text-lg font-bold">
              <td>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default DataTable;
