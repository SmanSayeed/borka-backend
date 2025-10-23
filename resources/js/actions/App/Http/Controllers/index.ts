import API from './API'
import Settings from './Settings'
import Admin from './Admin'
const Controllers = {
    API: Object.assign(API, API),
Settings: Object.assign(Settings, Settings),
Admin: Object.assign(Admin, Admin),
}

export default Controllers