```javascript
{
  entities: {
    products: {
      1: {
        id: 1,
        category: 'Skincare',
        name: 'Balm Dotcom',
        tagline: 'universal skin salve',
      },
      2: {
        id: 2,
        category: 'Skincare',
        name: 'Milky Jelly Cleanser',
        tagline: 'conditioning face wash',
      }
    },
    product: {
      'Milky Jelly Cleanser': {
      category: {id: 1, name: "Skincare"},
      description: {id: 1, productId: 1, title: "Everything a cleanser should be.", whatItIs: "A gentle-yet-effective creamy gel face wash for all skin types", whyItsSpecial: Array(3), …},
      id: 1,
      ingredients: [],
      instruction: [],
      name: "Milky Jelly Cleanser",
      price: 18,
      size: {},
      tagline: "conditioning face wash",
      tags: (3) [{…}, {…}, {…}],
      variations: []}
    },
    variations: {
      4: {
        id: 4,
        productId: 1,
        variationType: 'balm flavors',
        name: 'Rose',
        primary: false,
        stock: 368,
      }
      5: {
        id: 5,
        productId: 1,
        variationType: 'balm flavors',
        name: 'Cherry',
        primary: false,
        stock: 287,
      }
    },
    categories: {
      'skincare': {
        id: 1,
        name: 'Skincare'
      },
      'makeup': {
        id: 2,
        name: 'Makeup'
      }
    },
    productCategories: {
      1: {
        categoryId: 1,
        id: 1,
        productId: 1
      }
    },
    users: {
      11: {
        id: 11,
        firstName: 'Laura',
        lastName: 'Merci',
        email: 'lauramerci@gmail.com',        
      },
      12: {
        id: 12,
        firstName: 'Daven',
        lastName: 'Shoeheimer',
        email: 'dapershoes@gmail.com',        
      }
    },
    carts: {
      10: {
        cartId: 11,
        userId: 1,
        products: [23, 12, 2]
      },
      11: {
        cartId: 11,
        userId: 14,
        products: [1, 2]
      },
      12: {
        cartId: 12,
        userId: 3,
        products: [2]
      },
    }
  },
  orders: {
    1253: {
      orderNumber: 1253,
      userId: 12,
      products: [1, 2],
      total: 35.26,
      trackingNumber: '1Z6V80600307079065',
      status: 'complete',
      address: 'asdfas',
      paymentId: 321,
      date: '12 Nov 2020' 
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    cart: ["This item is no longer in stock"],
  },
  session: { currentUserId: 25 }
}
```