/* eslint-disable react-hooks/incompatible-library */
'use client';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

interface DataTableProps<TData extends object> {
    columns: ColumnDef<TData>[];
    data: TData[];
    isFetching: boolean;
    pageSize?: number;
}

export const DataTable = <TData extends object>({
    columns,
    data,
    isFetching,
}: DataTableProps<TData>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
    });
    return (
        <ScrollArea className="py-2.5">
            <Table className="text-xs whitespace-nowrap">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead
                                    key={header.id}
                                    className={cn(
                                        (
                                            header.column.columnDef.meta as {
                                                className?: string;
                                            }
                                        )?.className,
                                        'border text-center text-xs font-semibold',
                                    )}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext(),
                                          )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>
                    {isFetching ? (
                        [...Array(10)].map((_, i) => (
                            <TableRow key={i}>
                                <TableCell colSpan={columns.length}>
                                    <Skeleton className="h-6 w-full bg-muted" />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : table.getRowModel()?.rows?.length ? (
                        table.getRowModel().rows.map((row, idx) => (
                            <TableRow
                                key={row.id}
                                className={cn('border', {
                                    'bg-muted': idx % 2 !== 0,
                                })}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        className={cn(
                                            (
                                                cell.column.columnDef.meta as {
                                                    className?: string;
                                                }
                                            )?.className,
                                            'border',
                                        )}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No data available.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
};
