# Diary

## Phase 1: Design
### 11/02/19
1. Will start keeping a diary to keep track of thought process.
2. Decided to split up product model into more tables to maintain a more modular, and flatter state shape.
3. Name, and tagline should be part of the product model because they are basic information. I don't see the need to sepparate these out into new tables.
4. Noticed that product sizes are mostly a few standard sizes, so will put the sizes in it's own table to reduce repeated information.
5. It is difficult to decide how to deal with products having different sizes or colors. 
  
    >The options are to 
    >a) Make a different product variation a sepparate product 
    >b) Make it a property of the main product.

    For the sake of keeping inventory of product stock, I have decided that it is best to keep different product variations as their own product, under a **frame** product. All products will have a **frame**, even if the product has no variations. This will make the format flexible to add product variations in the future as well.
 
6. Making the last decision reveals another question: should attributes of products be placed on the **frame** product, or product *variation*? For now, I have decided to place it on the **frame** to reduce repeated information.
7. Changed my mind. Think it's best to make each *variation* a full product, and have the **frame** as a shell. Can populate the **frame** product page with the information of the first variation.
8. Realized I need to make join-tables for all these. :O I know that it may be extra work at the beginning to make these design decisions, but it will make creating products much easier. Imagine the drop-down menu to select sizes.
9. It seems like I have too many tables. Decided to refactor away some one-to-one dependencies, and place the majority of the data on the **frame**. If I had more time for the project, I'd keep it more compartmentalized. 
10. Renamed **frame** to **product**, and product to *product-variation*.

### 11/03/19
1. Added stock information to product variations.
2. Decided that adding a *primary* column to product variation will help when displaying the page.
3. It seems I need major refactoring for my products.

### 11/04/19
1. I will start on the user and user auth portion today

## Phase 2: User Auth
### 11/05/20
1. Realized that every small detail is quite a lot of work.
2. Discovered I can take the svg data off websites, and change their properties with the combination of CSS and React.
3. It seems that linking CSS and React just involves many classes.
4. Will try to git commit more.
5. It seems that my focus on organization is paying off. It makes complex actions easier to wrap my head around.

### 11/06/19
1. Seems I am getting more into the flow of things. 
2. Really happy that I am learning so much as I do this project.
3. Refactoring some of the code in the form container took a lot of time.
4. I can use regex in the future for validity testing. :)
5. Why didn't I realize I can use JQuery eariler?
6. Finished polishing my user auth. Happy with the results.
7. Learned what .jbuilder files are actually for. Very happy about it.

## Phase 3: Products
### 11/06/19
1. The schemas, sample state, and routes needs refactoring. Will start.
2. Finally get the frontend/backend routes. Wrote out what I need for the next part.
3. Discovered many errors in my schema. Can't believe I forgot that products have prices. That's the commerce in e-commerce.
4. Found out how to do arrays in the db. Look at all these db data types.

### 11/07/19
1. Realized that I need some dependend-destroy relationships. Going to write associations.
2. Must write so many validations.
3. Added dividers to the models to keep visual organization
4. Made controllers, backend routes, frontend routes, api utils, actions, and reducers for products.
5. Made seed files. Ran into a bug, unsure of how to debug it. Cannot seed.
6. Making diagrams for the product show and navbar. These diagrams are going to be very helpful for later.
7. Starting to make components for products. 
8. Decided order will be product `index` -> `navbar` -> `show`

###11/08/19
1. Debugged my issue. 1-letter typos are the worst,
2. The product index component is showing on the page. Yay!
3. Decided to flesh out `categories` in order to make `navbar`.

###11/09/19
1. Was able to make different product index pages work. Needed to use selectors to help fetch the right data from the database. 
2. Learned how to make stateshape for product shows. Now I have to implement.

###11/11/19
1. Styled product index page.
2. Added navbar. This was a difficult thing to work on because I had to work with the opening and closing of the flyout menu.
3. Was able to implement a simple sorting feature on the product index page.
4. Created backend for single products.
5. Refactored backend for index, so that category info is included in the product pojo.
6. Made filestructure for product show.
7. Seeded some data, and decided to refactor description (the website changed).

###11/12/19
1. Doing AWS setup.
2. Seeded some photos into AWS.
3. Started stying the product show page.
4. Decided to change routes to product name instead of id. Made custom route, changed reducer, modify some names.
5. Ran into git issue. Can't commit and lost 2 files.
6. Grabbed tag svgs off of site.
7. Change fonts slightly. Decided on using a lighter bold.

###11/13/19
1. Fixed git issue. This was very nerve-wracking. I thought I lost my code.
2. Styled tags and checkout buttons on product show.
3. re-alligned product show.
4. 

** Jbuilder.key_format camelize: :lower
** fix casing. 
    - HTML classnames -> kabob
    - backend routes -> snake
    - frontend routes -> camel
