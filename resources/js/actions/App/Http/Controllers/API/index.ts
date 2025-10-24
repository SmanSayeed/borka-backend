import BusinessCategoryController from './BusinessCategoryController'
import CategoryController from './CategoryController'
import SizeController from './SizeController'
const API = {
    BusinessCategoryController: Object.assign(BusinessCategoryController, BusinessCategoryController),
CategoryController: Object.assign(CategoryController, CategoryController),
SizeController: Object.assign(SizeController, SizeController),
}

export default API