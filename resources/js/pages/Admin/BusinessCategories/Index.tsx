import { BusinessCategoriesListTable } from '@/components/specific/business-categories/list-table';
import AppLayout from '@/layouts/app-layout';
import businessCategories from '@/routes/admin/business-categories';
import { BreadcrumbItem } from '@/types';
import { IBusinessCategoryListResponse } from '@/types/business-categories';
import { Head } from '@inertiajs/react';

interface BusinessCategoriesIndexProps {
    data: IBusinessCategoryListResponse;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Business Categories',
        href: businessCategories.index().url,
    },
];
export default function BusinessCategoriesIndex({
    data,
}: BusinessCategoriesIndexProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Business Categories" />
            <main className="px-3">
                <p>TODO: Filter Option</p>
                <BusinessCategoriesListTable data={data} />
                <p>TODO: Create Modal</p>
                <p>TODO: Edit Modal</p>
            </main>
        </AppLayout>
    );
}
