# FrontEnd
Front-end React App

This is the repository for the Front End React App for I'll Serve Soup, a soup kitchen inventory management software.

The basic components of the app are:

- Landing Page - Marketing page that has navigation linking to the sign up and sign in pages.
- Sign Up Page - Page where new users can register/sign up.
- Sign In Page - Page where newly registered users and existing users can log in to their account.
- Sign In/Up Navigation - Navigation for the sign in/sign up pages.
- App Home Page - This is the portion of the app behind a PrivateRoute that is only accessible if a user is logged in.
- App Navigation - Navigation for app users.
- Inventory List - The list of inventory items.
- Add Item Page - Form for adding new items.
- Edit Item Page - Form for updating an existing item.

There is also a supporting component called PrivateRoute and another .js file called axiosAuth that are both used in the user authentication workflow.

The App uses React-Router to implement Client Side Routing and Redux + Redux-Thunk for application state management.

The main actions are:

- Register User - Creates a new user account.
- Login - Checks the inputted credentials and re-directs to App Home Page if authentication is successful.
- Get Items - Gets the current Inventory List for the logged in user.
- Add Item - Adds a new item to the Inventory List for the logged in user.
- Update Item - Updates the selected item.
- Delete Item - Deletes the selected item.

We used Reactstrap for a few styled components, namely some buttons and input fields.
