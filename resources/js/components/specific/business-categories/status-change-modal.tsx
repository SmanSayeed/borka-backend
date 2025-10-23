import { Modal } from '@/components/shared/modal';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { IBusinessCategory } from '@/types/business-categories';

export const StatusChangeModal = ({
    data,
    isOpen,
    onClose,
}: {
    data: IBusinessCategory;
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} container="500">
            <DialogHeader>
                <DialogTitle className="text-center text-sm">
                    Change Business Category Status
                </DialogTitle>
            </DialogHeader>
            <Separator />
            <h3 className="text-lg">
                Are you sure? You want to change the status of{' '}
                <span className="font-semibold">{data?.name}</span>?
            </h3>
            <p className="text-sm text-accent-foreground">
                This action will change the status of the business category to{' '}
                <span className="font-semibold">
                    {!data.is_active ? 'Active' : 'Inactive'}
                </span>
                .
            </p>
            <div className="flex items-center justify-end gap-2 mt-3">
                <Button variant="outline" onClick={onClose}>
                    Cancel
                </Button>
                <Button onClick={onClose}>Change Status</Button>
            </div>
        </Modal>
    );
};
