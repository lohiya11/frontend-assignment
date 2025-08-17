import React from 'react';

interface Column<T> {
  key: string;          // changed here
  label: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  emptyText?: string;
}

function DataTable<T>({
  data,
  columns,
  loading = false,
  emptyText = 'No data available',
}: DataTableProps<T>) {
  return (
    <div className="border rounded">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 text-left font-medium">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                Loading...
              </td>
            </tr>
          ) : data && data.length > 0 ? (
            data.map((row, idx) => (
              <tr key={idx} className="border-t">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {(row as any)[col.key] as any}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                {emptyText}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
