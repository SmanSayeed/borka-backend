import AppLayout from '@/layouts/app-layout';
import { index } from '@/routes/admin/business-categories';
import { BreadcrumbItem } from '@/types';
import { BusinessCategory } from '@/types/business-categories';
import { Head } from '@inertiajs/react';

interface BusinessCategoriesIndexProps {
    data: BusinessCategory[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Business Categories',
        href: index().url,
    },
];
export default function BusinessCategoriesIndex({
    data,
}: BusinessCategoriesIndexProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Business Categories" />
            <p>TODO: Filter Option</p>
            <p>TODO: Table</p>
            {data && data?.length}
            <p>TODO: Create Modal</p>
            <p>TODO: Edit Modal</p>
        </AppLayout>
    );
}
