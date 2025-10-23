/**
 * A responsive modal component that adapts between a dialog on desktop and a drawer on mobile devices.
 *
 * The component uses Radix UI's Dialog for desktop views (>= 768px) and Drawer for mobile views.
 * It automatically switches between these two modes based on the viewport width using a media query.
 *
 * @component
 * @example
 * ```tsx
 * <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
 *   <div>Modal content goes here</div>
 * </Modal>
 * ```
 *
 * @props
 * - children: ReactNode - The content to be displayed inside the modal
 * - isOpen: boolean - Controls the visibility of the modal
 * - onClose: () => void - Callback function triggered when the modal is closed
 *
 * @features
 * - Responsive design: Automatically switches between Dialog and Drawer based on screen size
 * - Accessible: Uses semantic HTML and ARIA attributes for better accessibility
 * - Screen reader support: Includes screen-reader-only titles and descriptions
 * - Custom styling: Uses Tailwind CSS for styling with customizable max-width and height
 */

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/components/ui/drawer';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface ModalProps {
    children: React.ReactNode;
    container?: string;
    isOpen: boolean;
    onClose: () => void;
    outsideClick?: boolean;
}

export const Modal = ({
    children,
    container,
    isOpen,
    onClose,
    outsideClick = true,
}: ModalProps) => {
    const isMobile = useIsMobile(786);

    if (!isMobile) {
        return (
            <Dialog open={isOpen} onOpenChange={onClose} modal>
                <DialogContent
                    className={cn(!container && 'max-w-3xl lg:max-w-7xl')}
                    style={container ? { maxWidth: container } : undefined}
                    onInteractOutside={(e) =>
                        outsideClick && e.preventDefault()
                    }
                >
                    <DialogHeader>
                        <DialogTitle className="sr-only">Title</DialogTitle>
                        <DialogDescription className="sr-only">
                            A description to prevent radix error.
                        </DialogDescription>
                    </DialogHeader>
                    {children}
                </DialogContent>
            </Dialog>
        );
    }
    return (
        <Drawer open={isOpen} onOpenChange={onClose}>
            <DrawerContent className="max-h-[80vh] min-h-[200px] w-full px-5">
                <DrawerHeader className="sr-only">
                    <DrawerTitle>A title to prevent redix error.</DrawerTitle>
                    <DrawerDescription>
                        A description to prevent redix error.
                    </DrawerDescription>
                </DrawerHeader>
                <ScrollArea className="max-h-[60vh] w-full overflow-auto p-3">
                    {children}
                    <ScrollBar orientation="horizontal" />
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button
                            onClick={onClose}
                            variant="outline"
                            className=""
                        >
                            Close
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
