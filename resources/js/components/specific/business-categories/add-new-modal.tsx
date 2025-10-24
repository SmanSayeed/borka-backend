import { Modal } from '@/components/shared/modal';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import {
    CreateBusinessCategoryFormSchema,
    useCreateBusinessCategory,
} from '@/hooks/business-category/use-create-business-category';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { BusinessCategoryForm } from './form';

export const AddNewModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const { form } = useCreateBusinessCategory();
    const [loading, setLoading] = useState(false);
    const onSubmit = (data: CreateBusinessCategoryFormSchema) => {
        router.post(`/admin/business-categories/store`, data, {
            onStart: () => {
                setLoading(true);
            },
            onSuccess: () => {
                form.reset();
                router.reload({ only: ['admin.business-categories.index'] });
                onClose();
            },
            onError: (errorBag) => {
                Object.entries(errorBag).forEach(([key, message]) => {
                    form.setError(
                        key as keyof CreateBusinessCategoryFormSchema,
                        { message: message as string },
                    );
                });
            },
            onFinish: () => {
                setLoading(false);
            },
        });
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} container="w-3xl">
            <DialogHeader>
                <DialogTitle className="text-center text-sm">
                    Add New Business Category
                </DialogTitle>
            </DialogHeader>
            <Separator />
            <BusinessCategoryForm form={form} onSubmit={onSubmit} loading={loading} />
        </Modal>
    );
};
