import { DataTable } from '@/components/shared/data-table';
import {
    IBusinessCategory,
    IBusinessCategoryListResponse,
} from '@/types/business-categories';
import { ColumnDef } from '@tanstack/react-table';

export const BusinessCategoriesListTable = ({
    data,
}: {
    data: IBusinessCategoryListResponse;
}) => {
    // Column Definition
    const columns: ColumnDef<IBusinessCategory>[] = [
        {
            header: 'Name',
            accessorKey: 'name',
        },
    ];
    return (
        <div>
            <DataTable
                columns={columns}
                data={data?.data ?? []}
                isFetching={false}
            />
        </div>
    );
};
