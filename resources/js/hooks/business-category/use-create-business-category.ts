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
export type CreateBusinessCategoryFormSchema = z.infer<typeof formSchema>;
export const useCreateBusinessCategory = () => {
    const form = useForm<CreateBusinessCategoryFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            slug: '',
            description: '',
            order: 0,
        },
    });

    const onSubmit = (data: CreateBusinessCategoryFormSchema) => {
        console.log(data);
    };
    return {
        form,
        onSubmit,
    };
};
