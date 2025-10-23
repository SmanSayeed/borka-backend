import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\API\BusinessCategoryController::getAllBusinessCategories
 * @see app/Http/Controllers/API/BusinessCategoryController.php:12
 * @route '/api/get-all-business-categories'
 */
export const getAllBusinessCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllBusinessCategories.url(options),
    method: 'get',
})

getAllBusinessCategories.definition = {
    methods: ["get","head"],
    url: '/api/get-all-business-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\BusinessCategoryController::getAllBusinessCategories
 * @see app/Http/Controllers/API/BusinessCategoryController.php:12
 * @route '/api/get-all-business-categories'
 */
getAllBusinessCategories.url = (options?: RouteQueryOptions) => {
    return getAllBusinessCategories.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\BusinessCategoryController::getAllBusinessCategories
 * @see app/Http/Controllers/API/BusinessCategoryController.php:12
 * @route '/api/get-all-business-categories'
 */
getAllBusinessCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllBusinessCategories.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\BusinessCategoryController::getAllBusinessCategories
 * @see app/Http/Controllers/API/BusinessCategoryController.php:12
 * @route '/api/get-all-business-categories'
 */
getAllBusinessCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAllBusinessCategories.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\BusinessCategoryController::getAllBusinessCategories
 * @see app/Http/Controllers/API/BusinessCategoryController.php:12
 * @route '/api/get-all-business-categories'
 */
    const getAllBusinessCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getAllBusinessCategories.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\BusinessCategoryController::getAllBusinessCategories
 * @see app/Http/Controllers/API/BusinessCategoryController.php:12
 * @route '/api/get-all-business-categories'
 */
        getAllBusinessCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAllBusinessCategories.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\BusinessCategoryController::getAllBusinessCategories
 * @see app/Http/Controllers/API/BusinessCategoryController.php:12
 * @route '/api/get-all-business-categories'
 */
        getAllBusinessCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAllBusinessCategories.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getAllBusinessCategories.form = getAllBusinessCategoriesForm
const businessCategories = {
    getAllBusinessCategories: Object.assign(getAllBusinessCategories, getAllBusinessCategories),
}

export default businessCategories