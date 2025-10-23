import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::index
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:15
 * @route '/admin/business-categories'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/business-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::index
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:15
 * @route '/admin/business-categories'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::index
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:15
 * @route '/admin/business-categories'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::index
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:15
 * @route '/admin/business-categories'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::index
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:15
 * @route '/admin/business-categories'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::index
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:15
 * @route '/admin/business-categories'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::index
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:15
 * @route '/admin/business-categories'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::store
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:56
 * @route '/admin/business-categories/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/business-categories/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::store
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:56
 * @route '/admin/business-categories/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::store
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:56
 * @route '/admin/business-categories/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::store
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:56
 * @route '/admin/business-categories/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::store
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:56
 * @route '/admin/business-categories/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::update
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:80
 * @route '/admin/business-categories/update/{businessCategory}'
 */
export const update = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/business-categories/update/{businessCategory}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::update
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:80
 * @route '/admin/business-categories/update/{businessCategory}'
 */
update.url = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { businessCategory: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    businessCategory: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        businessCategory: args.businessCategory,
                }

    return update.definition.url
            .replace('{businessCategory}', parsedArgs.businessCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::update
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:80
 * @route '/admin/business-categories/update/{businessCategory}'
 */
update.post = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::update
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:80
 * @route '/admin/business-categories/update/{businessCategory}'
 */
    const updateForm = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::update
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:80
 * @route '/admin/business-categories/update/{businessCategory}'
 */
        updateForm.post = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::toggleStatus
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:42
 * @route '/admin/business-categories/toggle-status/{businessCategory}'
 */
export const toggleStatus = (args: { businessCategory: number | { id: number } } | [businessCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin/business-categories/toggle-status/{businessCategory}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::toggleStatus
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:42
 * @route '/admin/business-categories/toggle-status/{businessCategory}'
 */
toggleStatus.url = (args: { businessCategory: number | { id: number } } | [businessCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { businessCategory: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { businessCategory: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    businessCategory: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        businessCategory: typeof args.businessCategory === 'object'
                ? args.businessCategory.id
                : args.businessCategory,
                }

    return toggleStatus.definition.url
            .replace('{businessCategory}', parsedArgs.businessCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::toggleStatus
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:42
 * @route '/admin/business-categories/toggle-status/{businessCategory}'
 */
toggleStatus.post = (args: { businessCategory: number | { id: number } } | [businessCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::toggleStatus
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:42
 * @route '/admin/business-categories/toggle-status/{businessCategory}'
 */
    const toggleStatusForm = (args: { businessCategory: number | { id: number } } | [businessCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BusinessCategoryController::toggleStatus
 * @see app/Http/Controllers/Admin/BusinessCategoryController.php:42
 * @route '/admin/business-categories/toggle-status/{businessCategory}'
 */
        toggleStatusForm.post = (args: { businessCategory: number | { id: number } } | [businessCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const BusinessCategoryController = { index, store, update, toggleStatus }

export default BusinessCategoryController