import { Button } from '@/components/ui/button';
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CreateBusinessCategoryFormSchema } from '@/hooks/business-category/use-create-business-category';
import { Controller, UseFormReturn } from 'react-hook-form';
interface BusinessCategoryFormProps {
    form: UseFormReturn<CreateBusinessCategoryFormSchema>;
    onSubmit: (data: CreateBusinessCategoryFormSchema) => void;
}
export const BusinessCategoryForm = ({
    form,
    onSubmit,
}: BusinessCategoryFormProps) => {
    return (
        <form
            id="business-category-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
        >
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2">
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="name">
                                Business Category Name
                                <span className="text-red-500">*</span>
                            </FieldLabel>
                            <Input
                                {...field}
                                id="name"
                                aria-invalid={fieldState.invalid}
                                placeholder="Ex: Women"
                                autoComplete="name"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="slug"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="slug">
                                Slug
                                <span className="text-red-500">*</span>
                            </FieldLabel>
                            <Input
                                {...field}
                                id="slug"
                                aria-invalid={fieldState.invalid}
                                placeholder="Ex: women"
                                autoComplete="slug"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="description"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="md:col-span-2"
                        >
                            <FieldLabel htmlFor="description">
                                Description{' '}
                                <span className="text-xs text-muted-foreground">
                                    (optional)
                                </span>
                            </FieldLabel>
                            <Textarea
                                {...field}
                                id="description"
                                aria-invalid={fieldState.invalid}
                                placeholder="Ex: Specific women cloths..."
                                autoComplete="description"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="order"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="order">
                                Sorting Number{' '}
                                <span className="text-xs text-muted-foreground">
                                    (optional)
                                </span>
                            </FieldLabel>
                            <Input
                                {...field}
                                type="number"
                                id="order"
                                aria-invalid={fieldState.invalid}
                                placeholder="Ex: 0"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
            <div className="flex justify-end gap-2">
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
};
