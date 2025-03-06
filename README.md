# User Management Dashboard

 A small user management dashboard where users can be fetched from an API, searched,
paginated, and edited.

## Requirment

✅ Fetches user data from an API.  
✅ Search functionality to filter users by name.  
✅ Edit user information (name & status).  
✅ Pagination for better user experience.  
✅ Implement debounce (300ms delay) for optimized searching.

✅ Modern UI with responsive design.

## Designed Strucutre
📦 dashboard-user

 ┣ 📂 src
 
 ┃ ┣ 📂 components
 
 ┃ ┃ ┣ 📜 UserList.js
 
 ┃ ┃ ┣ 📜 UserEdit.js
 
 ┃ ┃ ┣ 📜 UserList.css
 
 ┃ ┃ ┣ 📜 UserEdit.css
 
 ┃ ┣ 📜 App.js
 
 ┃ ┣ 📜 index.js

 ## Time Spent on the Project
| Task | Time Spent |
|------|------------|
| Learning React (Components, Hooks, Fetch API), HTML, and CSS | **5 hours** |
| Implementing the application (UI, logic, functionality) | **6 hours** |
| Total Time Spent | **11 hours** |

## Potential Improvements if More Time Was Available
1️. Enhancing UI with TailwindCSS
   - Learning how to install and configure TailwindCSS  
   - Improving the design and responsiveness for better user experience  

2️. Implementing Dark Mode
   - Adding a toggle button to switch between Light and Dark themes  
   - Saving the theme preference in `localStorage`  

3️. Optimizing Data Fetching with React Query or SWR
   - Implementing React Query or SWR for better API data handling  
   - Adding caching and background refetching to improve performance  

4️. Using Redux for State Management  
   - Managing global state with Redux instead of using local state (`useState`)  
   - Learning best practices for Redux setup in a React project  

5️. Adding More Features**  
   - Implementing sorting and advanced filtering for users
   - Learn how to connect the Firebase for log in / log out feature 
   - Adding form validation when editing user details  
   - Improving error handling and loading states  
