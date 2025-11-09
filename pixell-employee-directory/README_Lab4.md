For this lab, I have done the following:

Frontend and Backend Separation: The project is organized with separate frontend and backend folders in a monorepo.

Backend Setup: Built with Express and TypeScript, using the Route-Controller-Service pattern. Employee routes are working and tested.

Frontend Integration: The frontend now fetches employee data from the backend instead of using local JSON.

Prisma ORM Setup: Employee and Role models are defined in schema.prisma, with .env and generator configuration included.

Note: The database is not yet seeded, so Prisma migrations and seeding are not finished. But the setup shows how the database would connect and work.