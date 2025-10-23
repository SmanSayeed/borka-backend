import { DataTable } from '@/components/shared/data-table';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    IBusinessCategory,
    IBusinessCategoryListResponse,
} from '@/types/business-categories';
import { ColumnDef } from '@tanstack/react-table';
import { PenIcon } from 'lucide-react';
import { useState } from 'react';
import { StatusChangeModal } from './status-change-modal';

export const BusinessCategoriesListTable = ({
    data,
}: {
    data: IBusinessCategoryListResponse;
}) => {
    // Status Change
    const [isStatusChangeModalOpen, setStatusChangeModalOpen] = useState(false);
    const [statusData, setStatusData] = useState<IBusinessCategory | null>(
        null,
    );
    // Column Definition
    const columns: ColumnDef<IBusinessCategory>[] = [
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
            header: 'Slug',
            accessorKey: 'slug',
        },
        {
            header: 'Description',
            accessorKey: 'description',
            meta: {
                className: 'whitespace-normal',
            },
        },
        {
            header: 'Sorting No',
            accessorKey: 'order',
            meta: {
                className: 'w-[5%] text-center',
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
                                    <PenIcon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                Update Business Category
                            </TooltipContent>
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
            <DataTable
                columns={columns}
                data={data?.data ?? []}
                isFetching={false}
            />
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
        </div>
    );
};
