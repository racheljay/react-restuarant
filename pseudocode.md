### React Restaurant

## Requirements:
    1. Provide the following:
        - Restaurant's name
        - address
        - hours of operation
    
    2. Access the Api using axios

    3. Create dynamic restaurant menu
        - 5 different sections
        - each section must have different items
        - A price for each item
        - each section viewable separately (bootstrap options?)
        - each menu item must be a molecule

    4. Manage the React Component State

    5. Use react Lifecycle Methods to save the results in local storage so that every time your website is acessed the user gets the same menu

## Page areas:
    # Header: name of restaurant (h1)
        - Bootstrap Nav
            - dinner
            - lunch
            - breakfast
            - dessert
            - snacks
    # page content
        - name
        - description
        - price

    # footer
        - Name again
        - address
        - hours of operation

    ## App layer
        - component did mount {
            - hit api
            - set 5 items in local storage
            - set a price as part of the item
        }

        - component did update {
            retrive items from local storage depending on which tab is pressed
        }

