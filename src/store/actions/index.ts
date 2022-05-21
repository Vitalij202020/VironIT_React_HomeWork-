import * as UserActions from './userActions'
import * as ProductActions from './productActions'
import * as CartActions from './cartActions'


export default {
    ...UserActions,
    ...ProductActions,
    ...CartActions
}