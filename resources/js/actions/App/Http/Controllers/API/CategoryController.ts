import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\CategoryController::getCategories
 * @see app/Http/Controllers/API/CategoryController.php:12
 * @route '/api/categories'
 */
export const getCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCategories.url(options),
    method: 'get',
})

getCategories.definition = {
    methods: ["get","head"],
    url: '/api/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\CategoryController::getCategories
 * @see app/Http/Controllers/API/CategoryController.php:12
 * @route '/api/categories'
 */
getCategories.url = (options?: RouteQueryOptions) => {
    return getCategories.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\CategoryController::getCategories
 * @see app/Http/Controllers/API/CategoryController.php:12
 * @route '/api/categories'
 */
getCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCategories.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\CategoryController::getCategories
 * @see app/Http/Controllers/API/CategoryController.php:12
 * @route '/api/categories'
 */
getCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCategories.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\CategoryController::getCategories
 * @see app/Http/Controllers/API/CategoryController.php:12
 * @route '/api/categories'
 */
    const getCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCategories.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\CategoryController::getCategories
 * @see app/Http/Controllers/API/CategoryController.php:12
 * @route '/api/categories'
 */
        getCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCategories.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\CategoryController::getCategories
 * @see app/Http/Controllers/API/CategoryController.php:12
 * @route '/api/categories'
 */
        getCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCategories.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getCategories.form = getCategoriesForm
const CategoryController = { getCategories }

export default CategoryController