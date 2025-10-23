import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface IPaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface IPagination {
    current_page: number;
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    path: string;
    per_page: number;
    to: number | null;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
    links: IPaginationLink[];
}

