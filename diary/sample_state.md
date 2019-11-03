```javascript
{
  entities: {
    products: {
      1: {
        id: 1,
        name: "Balm Dotcom",
        category: 'skincare',
        tagline: 'universal skin salve',
        description: ,

      },
      2: {
        id: 2,
        body: "bluebirds also like blue potatoes",
        authorId: 25,
      },
      3: {
        id: 3,
        body: "bluebirds are more like fruit",
        authorId: 11,
      }
    },
    users: {
      11: {
        id: 11,
        username: "blue_macaw",
        authoredChirpIds: [1, 3],        
      },
      25: {
        id: 25,
        username: "blue_toucan",
        authoredChirpIds: [2],
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg"
      }
    },
    chirpLikes: {
      10: {
        likerId: 11,
        chirpId: 1,
      },
      11: {
        likerId: 25,
        chirpId: 1,
      },
      12: {
        likerId: 25,
        chirpId: 3,
      },
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    chirpForm: ["Chirp body cannot be blank"],
  },
  session: { currentUserId: 25 }
}
```