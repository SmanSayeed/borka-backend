import { BusinessCategoriesListTable } from '@/components/specific/business-categories/list-table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { IBusinessCategoryListResponse } from '@/types/business-categories';
import { Head } from '@inertiajs/react';

interface BusinessCategoriesIndexProps {
    data: IBusinessCategoryListResponse;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Business Categories',
        href: '/admin/business-categories',
    },
];
export default function BusinessCategoriesIndex({
    data,
}: BusinessCategoriesIndexProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Business Categories" />
            <main className="px-3 mt-4">
                <BusinessCategoriesListTable data={data} />
            </main>
        </AppLayout>
    );
}
