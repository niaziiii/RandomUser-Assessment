# Brave BPO Assessment using React + Vite

This project is a listing application that displays random user data with pagination and search users. It utilizes React and Vite for development.

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Bonus Features](#bonus-features)
6. [Technical Approach](#technical-approach)
7. [Contributing](#contributing)

## Requirements

- Node.js installed on your machine
- Understanding of React and Vite

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/niaziiii/RandomUser-Assessment
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Run the development server:

```bash
npm run dev
```

2. Open your web browser and navigate to `http://localhost:5173` to view the application.

## Features

- Listing component displaying random user data with pagination.
- Filter functionality based on gender, persisting filters when navigating away.
- Search functionality allowing users to search for specific users.
  - Approach:
    - Implement a search input that filters users based on their {first} {last} name.
    - Display filtered results dynamically as the user types.
    - Clear the search query and display all users when the input is empty.
- Public profile page for each user accessible from the listing.
  - Include user details and information.
- Pagination for efficient browsing through multiple pages of user data.

## Bonus Features

- Google Maps integration on the profile page to display user location (User coordinates are not working).
- Display a flag on the profile page.

## Technical Approach

1. **Data Fetching:** Fetched 100 random users initially to operate on. Data operations will performed on intial fetched data.
2. **State Management:** Utilized Context API for state management and employed TypeScript for type safety.
3. **Action Types:** Maintained action types as a single source of truth for dispatching.
4. **Custom Hooks:** Implemented custom hooks for fetching data and managing Context API state.
5. **UI Components:** Added three components from React Prime, rich tailwind-based styled components, to showcase expertise in working with different UI libraries.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.
