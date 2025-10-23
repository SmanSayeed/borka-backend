import { Modal } from '@/components/shared/modal';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

export const AddNewModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <DialogHeader>
                <DialogTitle className="text-center text-sm">
                    Add New Business Category
                </DialogTitle>
            </DialogHeader>
            <Separator />
        </Modal>
    );
};
