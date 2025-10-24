export interface ISize {
    id: number;
    name: string;
    code: string;
    length: number;
    width: number;
    sleeve: number;
    unit_of_masurement: 'in' | 'cm';
    is_active: boolean;
    created_at: string;
    updated_at: string;
    label: string;
}
