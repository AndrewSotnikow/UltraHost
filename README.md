📋Task Requirements

1. Set Up the Project
   Use create-next-app or npx create-next-app@latest

Use the app directory structure (App Router, not Pages Router)

Recommended flags:

bash
CopyEdit
npx create-next-app@latest github-dashboard --app --typescript

2. Users Dashboard Page
   Fetch and display a list of GitHub users from the API

Show:

User avatar

Username

Link to GitHub profile

3. Search Bar
   Add a search input

Filter displayed users by username (client-side) 4. User Detail View
On click of a user:

Navigate to a dynamic route: /users/[username]

Fetch user details using the second API

Display:

Name

Bio

Location

Followers

Following

Can be done using a modal or a dedicated page

5. Routing Structure (App Router)
   Use:

app/layout.tsx

app/page.tsx

app/users/[username]/page.tsx

Include loading.tsx and error.tsx where applicable

6. Loading State
   Show a loader or skeleton UI while fetching users/details
7. Responsive UI
   Make sure the layout looks clean and adjusts across screen sizes

Bonus Features (Optional)
If time permits:
Implement infinite scrolling or pagination

Use TailwindCSS for clean and fast styling

Debounce the search input for performance
