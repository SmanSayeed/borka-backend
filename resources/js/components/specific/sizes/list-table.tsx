import { DataTable } from '@/components/shared/data-table';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { ISize } from '@/types/sizes';
import { ColumnDef } from '@tanstack/react-table';
import { PenIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { AddNewModal } from './add-new-modal';
import { StatusChangeModal } from './status-change-modal';

export const SizesListTable = ({ data }: { data: ISize[] }) => {
    // Status Change
    const [isStatusChangeModalOpen, setStatusChangeModalOpen] = useState(false);
    const [statusData, setStatusData] = useState<ISize | null>(null);
    // Add New Modal
    const [isAddNewModalOpen, setAddNewModalOpen] = useState(false);
    // Column Definition
    const columns: ColumnDef<ISize>[] = [
        {
            header: '#',
            cell: ({ row }) => row.index + 1,
            meta: {
                className: 'w-10 text-center',
            },
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Short Code',
            accessorKey: 'code',
            meta: {
                className: 'w-[10%] text-center',
            },
        },
        {
            header: 'Unit',
            accessorKey: 'unit_of_masurement',
            meta: {
                className: 'w-[10%] text-center',
            },
        },
        {
            header: 'Length',
            accessorKey: 'length',
            meta: {
                className: 'text-right',
            },
        },
        {
            header: 'Width',
            accessorKey: 'width',
            meta: {
                className: 'text-right',
            },
        },
        {
            header: 'Sleeve',
            accessorKey: 'sleeve',
            meta: {
                className: 'text-right',
            },
        },

        {
            header: 'Status',
            accessorKey: 'is_active',
            cell: ({ row }) => (
                <Switch
                    checked={row.original.is_active}
                    onCheckedChange={() => {
                        setStatusData(row.original);
                        setStatusChangeModalOpen(true);
                    }}
                />
            ),
            meta: {
                className: 'w-[5%] text-center',
            },
        },
        {
            header: 'Action',
            accessorKey: 'id',
            cell: ({ row }) => (
                <>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant={'outline'}
                                    size={'icon'}
                                    onClick={() => {
                                        setStatusData(row.original);
                                    }}
                                >
                                    <PenIcon className="text-yellow-600" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Update Size</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </>
            ),
            meta: {
                className: 'w-[5%] text-center',
            },
        },
    ];
    return (
        <div>
            <div className="flex justify-end">
                <Button
                    className="cursor-pointer"
                    onClick={() => setAddNewModalOpen(true)}
                >
                    <PlusIcon /> Add New
                </Button>
            </div>
            <DataTable columns={columns} data={data ?? []} isFetching={false} />
            {statusData && (
                <StatusChangeModal
                    data={statusData}
                    isOpen={isStatusChangeModalOpen}
                    onClose={() => {
                        setStatusChangeModalOpen(false);
                        setStatusData(null);
                    }}
                />
            )}
            <AddNewModal
                isOpen={isAddNewModalOpen}
                onClose={() => setAddNewModalOpen(false)}
            />
        </div>
    );
};
