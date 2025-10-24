import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\SizeController::getAllSizes
 * @see app/Http/Controllers/API/SizeController.php:12
 * @route '/api/get-all-sizes'
 */
export const getAllSizes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllSizes.url(options),
    method: 'get',
})

getAllSizes.definition = {
    methods: ["get","head"],
    url: '/api/get-all-sizes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\SizeController::getAllSizes
 * @see app/Http/Controllers/API/SizeController.php:12
 * @route '/api/get-all-sizes'
 */
getAllSizes.url = (options?: RouteQueryOptions) => {
    return getAllSizes.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\SizeController::getAllSizes
 * @see app/Http/Controllers/API/SizeController.php:12
 * @route '/api/get-all-sizes'
 */
getAllSizes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllSizes.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\SizeController::getAllSizes
 * @see app/Http/Controllers/API/SizeController.php:12
 * @route '/api/get-all-sizes'
 */
getAllSizes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAllSizes.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\SizeController::getAllSizes
 * @see app/Http/Controllers/API/SizeController.php:12
 * @route '/api/get-all-sizes'
 */
    const getAllSizesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getAllSizes.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\SizeController::getAllSizes
 * @see app/Http/Controllers/API/SizeController.php:12
 * @route '/api/get-all-sizes'
 */
        getAllSizesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAllSizes.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\SizeController::getAllSizes
 * @see app/Http/Controllers/API/SizeController.php:12
 * @route '/api/get-all-sizes'
 */
        getAllSizesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAllSizes.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getAllSizes.form = getAllSizesForm
const SizeController = { getAllSizes }

export default SizeController