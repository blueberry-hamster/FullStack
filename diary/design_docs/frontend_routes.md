## Frontend Routes
Our components are organized as follows:

* `Root`
    * `App`
        * `NavBar`
        * (main component goes here)
        * `Footer`
        * The following routes, defined in `App`, will render components between `NavBar` and `Footer`.

* `/`
  * `Splash`
* `/login`
  * `LoginForm`
* `/signup`
  * `SignupForm`

* `/products`
    * `ProductIndex`
* `/products/:productName`
    * `ProductShow`

* `/category/:category`
    * `CategoryShow`

* `/new_checkout`
    * `CheckoutEmail`
    * `CheckoutAddress`
    * `CheckoutShipping`
    * `CheckoutPayment`
    * `CheckoutConfirm`

