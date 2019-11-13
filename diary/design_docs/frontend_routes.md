## Frontend Routes
Our components are organized as follows:

* `Root`
    * `App`
        * `Header`
        * `NavBar`
            * `FlyoutMenu`
        * (main component goes here)
        * `Footer`

* The following routes, defined in `App`, will render components between `NavBar` and `Footer`.
* `/`
  * `Splash`
* `/login`
  * `LoginForm`
* `/signup`
  * `SignupForm`

* `/products/:category?`
    * `ProductShow`
        * `ProductTitleBar`
        * `ProductCard`
* `/products/:productName`
    * `ProductShow`
        * `BreadCrumbs`
        * `ImageCarousel`
        * `ProductShowRight`
            * `Tags`

* `/checkout`
    * `CheckoutMain`
        * `CheckoutEmail`
        * `CheckoutAddress`
        * `CheckoutShipping`
        * `CheckoutPayment`
        * `CheckoutConfirm`

