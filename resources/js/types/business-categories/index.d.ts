export interface BusinessCategory {
    id: number;
    name: string;
    slug: string;
    icon: string | null;
    description: string | null;
    order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}
