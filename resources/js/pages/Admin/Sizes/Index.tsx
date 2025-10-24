import { SizesListTable } from '@/components/specific/sizes/list-table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { ISize } from '@/types/sizes';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Product Size',
        href: '/admin/sizes',
    },
];
export default function Index({ data }: { data: ISize[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Sizes" />
            <main className="mt-4 px-3">
                <SizesListTable data={data} />
            </main>
        </AppLayout>
    );
}
