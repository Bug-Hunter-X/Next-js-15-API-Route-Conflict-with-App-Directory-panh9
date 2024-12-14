# Next.js 15 API Route Conflict with App Directory

This repository demonstrates a potential issue when using traditional `pages/api` routes alongside the new `app` directory in Next.js 15.  The `pages/api` route, while functional in previous Next.js versions, might produce unexpected build errors in Next.js 15 when the `app` directory is introduced. The solution involves migrating the API route to the `app` directory's routing structure.

## Setup:

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Bug:
The `pages/api/hello.js` file contains a simple API route that works correctly in older Next.js versions.  However, with Next.js 15 and the introduction of the `app` directory, you might encounter build errors because of routing conflicts.  This demonstrates the incompatibility. 

## Solution:
Migrate the API route into the `app` directory, leveraging the `app` directory's routing mechanism. This solution will ensure seamless integration and avoid the build errors encountered in the original setup.