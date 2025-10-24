import BusinessCategoryController from './BusinessCategoryController'
import SizeController from './SizeController'
const Admin = {
    BusinessCategoryController: Object.assign(BusinessCategoryController, BusinessCategoryController),
SizeController: Object.assign(SizeController, SizeController),
}

export default Admin