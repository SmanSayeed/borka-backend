import { Modal } from '@/components/shared/modal';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';
import { ISize } from '@/types/sizes';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export const StatusChangeModal = ({
    data,
    isOpen,
    onClose,
}: {
    data: ISize;
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [loading, setLoading] = useState(false);
    const onStatusChange = () => {
        router.post(
            `/admin/sizes/toggle-status/${data.id}`,
            {},
            {
                onStart: () => {
                    setLoading(true);
                },
                onFinish: () => {
                    setLoading(false);
                    onClose();
                },
            },
        );
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} container="w-xl">
            <DialogHeader>
                <DialogTitle className="text-center text-sm">
                    Change Size Status
                </DialogTitle>
            </DialogHeader>
            <Separator />
            <h3 className="text-lg">
                Are you sure? You want to change the status of{' '}
                <span className="font-semibold">{data?.name}</span>?
            </h3>
            <p className="text-sm text-accent-foreground">
                This action will change the status of the size to{' '}
                <span
                    className={cn('font-semibold', {
                        'text-primary': !data.is_active,
                        'text-red-500': data.is_active,
                    })}
                >
                    {!data.is_active ? 'Active' : 'Inactive'}
                </span>
                .
            </p>
            <div className="mt-3 flex items-center justify-end gap-2">
                <Button variant="outline" onClick={onClose} disabled={loading}>
                    Cancel
                </Button>
                <Button onClick={onStatusChange} disabled={loading}>
                    {loading ? (
                        <>
                            <Spinner />
                            Changing...
                        </>
                    ) : (
                        'Change Status'
                    )}
                </Button>
            </div>
        </Modal>
    );
};
