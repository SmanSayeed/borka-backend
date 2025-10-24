import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
 * @see app/Http/Controllers/Admin/SizeController.php:31
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
 * @see app/Http/Controllers/Admin/SizeController.php:31
 * @route '/admin/sizes/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SizeController::store
 * @see app/Http/Controllers/Admin/SizeController.php:31
 * @route '/admin/sizes/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SizeController::store
 * @see app/Http/Controllers/Admin/SizeController.php:31
 * @route '/admin/sizes/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SizeController::store
 * @see app/Http/Controllers/Admin/SizeController.php:31
 * @route '/admin/sizes/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:33
 * @route '/admin/sizes/update/{size}'
 */
export const update = (args: { size: string | number } | [size: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/sizes/update/{size}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:33
 * @route '/admin/sizes/update/{size}'
 */
update.url = (args: { size: string | number } | [size: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { size: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    size: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        size: args.size,
                }

    return update.definition.url
            .replace('{size}', parsedArgs.size.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:33
 * @route '/admin/sizes/update/{size}'
 */
update.post = (args: { size: string | number } | [size: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:33
 * @route '/admin/sizes/update/{size}'
 */
    const updateForm = (args: { size: string | number } | [size: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SizeController::update
 * @see app/Http/Controllers/Admin/SizeController.php:33
 * @route '/admin/sizes/update/{size}'
 */
        updateForm.post = (args: { size: string | number } | [size: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{size}'
 */
export const toggleStatus = (args: { size: number | { id: number } } | [size: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin/sizes/toggle-status/{size}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{size}'
 */
toggleStatus.url = (args: { size: number | { id: number } } | [size: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { size: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { size: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    size: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        size: typeof args.size === 'object'
                ? args.size.id
                : args.size,
                }

    return toggleStatus.definition.url
            .replace('{size}', parsedArgs.size.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{size}'
 */
toggleStatus.post = (args: { size: number | { id: number } } | [size: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{size}'
 */
    const toggleStatusForm = (args: { size: number | { id: number } } | [size: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SizeController::toggleStatus
 * @see app/Http/Controllers/Admin/SizeController.php:20
 * @route '/admin/sizes/toggle-status/{size}'
 */
        toggleStatusForm.post = (args: { size: number | { id: number } } | [size: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const SizeController = { index, store, update, toggleStatus }

export default SizeController