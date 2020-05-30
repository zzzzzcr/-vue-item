import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'
import Worth from '../pages/Worth/Worth.vue'

export default[
{
  path:'/msite',
  component:Msite
},
{
  path:'/category',
  component:Category
},
{
  path:'/shopcart',
  component:ShopCart
},
{
  path:'/profile',
  component:Profile
},
{
  path:'/worth',
  component:Worth
},
{
  path:'/',
  redirect:'/msite'
}
]