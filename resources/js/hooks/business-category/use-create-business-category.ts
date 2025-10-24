import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// ** Form Schema **
const formSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    slug: z.string().min(1, { message: 'Slug is required' }),
    description: z.string().optional(),
    order: z.number().optional(),
});
export const useCreateBusinessCategory = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            slug: '',
            description: '',
            order: 0,
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };
    return {
        form,
        onSubmit,
    };
};
