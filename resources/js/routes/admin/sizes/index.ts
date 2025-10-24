import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SizeController::index
 * @see app/Http/Controllers/Admin/SizeController.php:12
 * @route '/admin/sizes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/sizes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SizeController::index
 * @see app/Http/Controllers/Admin/SizeController.php:12
 * @route '/admin/sizes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SizeController::index
 * @see app/Http/Controllers/Admin/SizeController.php:12
 * @route '/admin/sizes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SizeController::index
 * @see app/Http/Controllers/Admin/SizeController.php:12
 * @route '/admin/sizes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SizeController::index
 * @see app/Http/Controllers/Admin/SizeController.php:12
 * @route '/admin/sizes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SizeController::index
 * @see app/Http/Controllers/Admin/SizeController.php:12
 * @route '/admin/sizes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SizeController::index
 * @see app/Http/Controllers/Admin/SizeController.php:12
 * @route '/admin/sizes'
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
* @see \App\Http\Controllers\Admin\SizeController::store
 * @see app/Http/Controllers/Admin/SizeController.php:22
 * @route '/admin/sizes/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/sizes/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SizeController::store
 * @see app/Http/Controllers/Admin/SizeController.php:22
 * @route '/admin/sizes/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SizeController::store
 * @see app/Http/Controllers/Admin/SizeController.php:22
 * @route '/admin/sizes/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SizeController::store
 * @see app/Http/Controllers/Admin/SizeController.php:22
 * @route '/admin/sizes/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SizeController::store
 * @see app/Http/Controllers/Admin/SizeController.php:22
 * @route '/admin/sizes/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:24
 * @route '/admin/sizes/update/{businessCategory}'
 */
export const update = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/sizes/update/{businessCategory}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:24
 * @route '/admin/sizes/update/{businessCategory}'
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
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:24
 * @route '/admin/sizes/update/{businessCategory}'
 */
update.post = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:24
 * @route '/admin/sizes/update/{businessCategory}'
 */
    const updateForm = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:24
 * @route '/admin/sizes/update/{businessCategory}'
 */
        updateForm.post = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{businessCategory}'
 */
export const toggleStatus = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin/sizes/toggle-status/{businessCategory}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{businessCategory}'
 */
toggleStatus.url = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return toggleStatus.definition.url
            .replace('{businessCategory}', parsedArgs.businessCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{businessCategory}'
 */
toggleStatus.post = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{businessCategory}'
 */
    const toggleStatusForm = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{businessCategory}'
 */
        toggleStatusForm.post = (args: { businessCategory: string | number } | [businessCategory: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const sizes = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
toggleStatus: Object.assign(toggleStatus, toggleStatus),
}

export default sizes