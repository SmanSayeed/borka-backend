import { Modal } from '@/components/shared/modal';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useCreateBusinessCategory } from '@/hooks/business-category/use-create-business-category';
import { BusinessCategoryForm } from './form';

export const AddNewModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const { form, onSubmit } = useCreateBusinessCategory();
    return (
        <Modal isOpen={isOpen} onClose={onClose} container="w-3xl">
            <DialogHeader>
                <DialogTitle className="text-center text-sm">
                    Add New Business Category
                </DialogTitle>
            </DialogHeader>
            <Separator />
            <BusinessCategoryForm form={form} onSubmit={onSubmit} />
        </Modal>
    );
};
