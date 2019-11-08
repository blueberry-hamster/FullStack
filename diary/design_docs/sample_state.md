```javascript
{
  entities: {
    products: {
      1: {
        id: 1,
        promotion: 1,
        category: 1,
        size: 4,
        tags: [2, 12, 13],
        ingredients: [1, 13, 23, 25, 30],
        variations: [4, 5],
        name: 'Balm Dotcom',
        tagline: 'universal skin salve',
        description: 5,
        directions: 1
      },
      2: {
        id: 2,
        promotion: 2,
        category: 1,
        size: null,
        tags: [4, 16, 17, 29],
        ingredients: [4, 7, 18, 19, 20, 45],
        variations: [1, 30],
        name: 'Milky Jelly Cleanser',
        tagline: 'conditioning face wash',
        description: 9,
        directions: 4
      }
    },
    variations: {
      4: {
        id: 4,
        productId: 1,
        variationType: balm flavors,
        name: 'Rose',
        primary: false,
        stock: 368,
      }
      5: {
        id: 5,
        productId: 1,
        variationType: balm flavors,
        name: 'Cherry',
        primary: false,
        stock: 287,
      }
    },
    attributes: {
      descriptions: {
        5: {
          productId: 1,
          title: 'Our cult favorite do-everything skin salve.',
          body: 'A hydrating, multipurpose lip balm and skin salve that’s packed with antioxidants and natural emollients to nourish dry, chafed skin. The dense, waxy texture stays in place to seal in moisture. Opt for Original, or choose from seven mood-enhancing flavors: Birthday (inspired by Milk Bar’s famous Birthday Cake, with a subtle shimmer), Rose (with a barely-there pink tint), Cherry (with a sheer red tint), Mint, Coconut, Mango (with a translucent coral tint), and Berry (with a sheer berry tint).',
          notes: 'hypoallergenic, dermatologist tested, long-lasting moisture, cruelty free'
        },
        9: {
          productId: 2,
          title: 'One face wash to rule them all.',
          body: 'This is the ultimate daily face wash: use on dry skin to dissolve away makeup and grime, or on wet skin as you start your day. The pH-balanced, creamy gel formula is made with a blend of five skin conditioners so your face is left feeling healthy and soft, never tight. Its cleansing power comes from the same gentle cleaning agents found in contact lens solution, so it’s tough on impurities and still safe to use on your eyes. You’ll see.',
          notes: 'hypoallergenic, dermatologist tested, safe for the eye area, ophthalmologist tested, appropriate for all skin types, soap free, paraben free, sulfate free, cruelty free, non-comedogenic, vegan'
        }
      },
      instructions: {
        1: {
          productId: 1,
          steps: {
            1: 'Apply a small amount of Balm Dotcom directly to any part of the body that needs extra moisture (elbows, cuticles, etc.)',
            2:'Repeat as needed throughout the day.'
          }
        },
        4: {
          productId: 2,
          steps: {
            1: 'To start your day—massage 1-2 pumps onto wet skin (keep it in the shower!) and rinse.To remove makeup*—on dry skin, gently and thoroughly massage 2-3 pumps directly onto eye area to melt away mascara; add water, massage over the rest of your face, and rinse. *unless it’s waterproof, in which case you should first remove with Milky Oil, and follow with Milky Jelly Cleanser for complete clean.'
          }
        }
      },
      sizes: {
        2: {
          id: 2,
          imperial: '0.5 fl oz',
          metric: '15 ml '
        }
      },
      categories: {
        1: {
          id: 1,
          name: 'skincare'
        },
        2: {
          id: 2,
          name: 'makeup'
        }
      },
      ingredients: {
        4: {
          id: 4,
          name: 'Beeswax',
          body: 'A natural emollient which acts as a protective barrier.'
        }
      },
      tags: {
        12: {
          id: 12,
          name: 'Soothing'
        },
        13: {
          id: 13,
          name: 'conditioning'
        }
      },
      promotions: {
        1: {
          id: 1,
          name: 'Top Rated'
        }
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
        user_Id: 1,
        products: [23, 12, 2]
      },
      11: {
        cartId: 11,
        user_Id: 14,
        products: [1, 2]
      },
      12: {
        cartId: 12,
        user_Id: 3,
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