 # Glossier Clone
 ### [Live Demo](https://glossier-demo.herokuapp.com/#/ "Live Demo of Glossier clone")

## Summary:
![](demo/glossier_main.gif)
This is a high-quality dupe of Glossier.com: a modern, and sleek e-commerce site. It currently has user auth, products, cart and checkout functionality. The app is written with a React / Redux frontend, and Ruby on Rails, Postgresql backend. Check it out! 

---------------
## Key features:
	
### User Auth
![](demo/glossier_login.gif)
Users can demo login, make accounts, sign-in, and sign-out. Sessions tokens are used to keep track of user sessions. User information is secure via strong parameters in the controller, salting and hashing user passwords, and sanitized user input. The sign-in and sign-up pages are protected via auth-routes in the frontend.
``` ruby
class Api::SessionsController < ApplicationController
  def create
    email = user_params[:email]
    password = user_params[:password]
    @user = User.find_by_credentials(email, password)
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['invalid email or password'], status: 422
    end
  end

  def destroy
    logout!
  end
end
```

### Products
![](demo/glossier_product.png)
Product tables were carefully designed for easy changing, and scalability in the relational database. This means that adding/ changing/ removing features can be done without dropping the database. Efficient querying allows all the information to be fetched in one ajax call. On the frontend, the redux state shape was optimized to be flat, and reusable. Two product reducers were created for scalability, and efficiency. One type is simplified for the indexing, and the other contains all of a single product’s information. 
``` ruby
class Api::ProductsController < ApplicationController
  def index
    @products = Product.with_attached_photos.all 
      .includes(:product_category)
      .includes(:category)

    @product_categories = ProductCategory.all
    render '/api/products/index'
  end

  def show
    name = params[:name].gsub('-', ' ')
    @product = Product
      .with_attached_photos
      .includes(:variations)
      .includes(:description)
      .includes(:instruction)
      .includes(:size)
      .includes(:product_size)
      .includes(:category)
      .includes(:product_category)
      .includes(:ingredients)
      .includes(:product_ingredient)
      .includes(:tags)
      .includes(:product_tag)
      .find_by(name: name)
      
    render "/api/products/show"
  end 
end
```

### Cart
![](demo/glossier_cart.gif)
Carts are available for both anonymous users, and logged-in users. Anonymous carts are created with the user id pointing to the user’s IP address, while owned carts are generated on account creation. Products are associated indirectly via “cart items”, which belong to a single cart. I chose to calculate cart numbers in the reducer. This results in 1) no repeated data being stored in the backend 2) only one centralized operation is done. 
``` javascript
case RECEIVE_CART_ITEM:
  let productId = Object.keys(action.cartItem)[0];
  let cartItem = Object.values(action.cartItem)[0];
  let prevQuantity = (newState.cartItems[productId] ? newState.cartItems[productId].quantity : 0);
  let totalCount = (newState.totalCount + (cartItem.quantity - prevQuantity));
  let subtotal = (newState.subtotal + ((cartItem.quantity - prevQuantity) * cartItem.product.price));
  let shippingCost = (subtotal === 0) ? 0 : 5.00;
  let totalPrice = (subtotal + (subtotal * 0.08) + shippingCost);
  
  newState.cartItems[productId] = cartItem;
  newState.totalCount = totalCount;
  newState.subtotal = subtotal;
  newState.totalPrice = totalPrice;
  newState.shippingCost = shippingCost;
  
  return newState;
```

### Checkout/Orders
![](demo/glossier_checkout.gif)
Both checkout, and orders are currently in a simplified state, but additional features can easily be added in the future. The checkout page is only available to logged-in users who have at least one item in their cart. This will be changed once checkout parameters are changeable. Order numbers and tracking numbers are automatically generated on the backend when an order instance is created. 
