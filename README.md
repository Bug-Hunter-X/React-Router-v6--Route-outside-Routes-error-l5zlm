# React Router v6 Routing Issue

This repository demonstrates a common error encountered when using React Router v6: rendering `<Route>` components outside of a `<Routes>` component.

## Problem

The error message "Invariant failed: You should not use <Route> outside a <Routes>" indicates that a `<Route>` component is being rendered without being enclosed within a `<Routes>` component. This is a structural requirement of React Router v6.

## Solution

The solution is to ensure all `<Route>` components are nested within a `<Routes>` component.  This ensures proper routing functionality and resolves the error.

## Setup

1. Clone the repository.
2. Navigate to the project directory: `cd react-router-v6-issue`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

The `bug.js` file demonstrates the incorrect usage, and `bugSolution.js` provides the corrected implementation.