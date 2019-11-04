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
