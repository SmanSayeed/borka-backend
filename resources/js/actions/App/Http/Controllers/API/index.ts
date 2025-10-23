import BusinessCategoryController from './BusinessCategoryController'
import CategoryController from './CategoryController'
const API = {
    BusinessCategoryController: Object.assign(BusinessCategoryController, BusinessCategoryController),
CategoryController: Object.assign(CategoryController, CategoryController),
}

export default API