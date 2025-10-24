import { BusinessCategoriesListTable } from '@/components/specific/business-categories/list-table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Product Size',
        href: '/admin/sizes',
    },
];
export default function Index({ data }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Sizes" />
            <main className="mt-4 px-3">
                <BusinessCategoriesListTable data={data} />
            </main>
        </AppLayout>
    );
}
