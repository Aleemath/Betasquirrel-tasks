# Consultation Report Project

## Overview

This is a full-stack web application built with Laravel (PHP) for the backend and React (Vite + TypeScript) for the frontend. It allows medical professionals to create and download consultation reports with clinic management, logo uploads, and more.

## Tech Stack

- Frontend: React + TypeScript + Vite

- Backend: Laravel 12.x (PHP 8.1+)

- Database: SQLite / MySQL

- PDF Generator: Laravel DomPDF

## Prerequisites

Ensure you have the following installed:

- [Node.js v22+](https://nodejs.org/)

- [Yarn](https://classic.yarnpkg.com/en/docs/install)

- [PHP v8.1+](https://www.php.net/downloads.php)

- [Composer](https://getcomposer.org/download/)

- [MySQL v9.x+](https://dev.mysql.com/downloads/mysql/)

## Setup Instructions

1. Clone the Repository

   `git clone git@github.com:Aleemath/consultation-report.git`

   `cd consultation-report`

2. Backend Setup (Laravel)

   `cd backend`

   `composer install`

   `cp .env.example .env`

   `php artisan key:generate`

Configure Database

- SQLite :

` touch database/database.sqlite`

- MySQL :
- Update .env:

          DB_CONNECTION=mysql

          DB_HOST=127.0.0.1

          DB_PORT=3306

          DB_DATABASE=your-database-name

          DB_USERNAME=root

          DB_PASSWORD=your-db-password-or-empty

## Run Migrations & Seed Database

`php artisan migrate --seed`

## Generate JWT Secret

`php artisan jwt:secret`

## Create Storage Link

`php artisan storage:link`

## Start Laravel Server

`php artisan serve`

## Frontend (React + Vite)

`cd ../frontend`

`yarn install`

`cp .env.example .env`

## Configure Environment Variables

Update .env:

`VITE_API_BASE_URL=http://localhost:8000/api/v1`

`VITE_STORAGE_BASE_URL=http://localhost:8000/storage`

## Start Development Server

`npm run dev`

## API Endpoints

## Authentication

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| POST   | /v1/register | Register user    |
| POST   | /v1/login    | Login user (JWT) |

## Consultations

| Method | Endpoint                                 | Description                 |
| ------ | ---------------------------------------- | --------------------------- |
| POST   | /v1/consultations                        | Create consultation report  |
| GET    | /v1/consultations                        | Get consultations           |
| GET    | /v1/consultations/{id}/report?format=pdf | Generate Report (PDF/TIFF)  |
| GET    | /v1/consultations/export/csv             | Export consultations to CSV |

---

## Troubleshooting

- Logo not showing?

` php artisan storage:link`

`chmod -R 755 storage public/storage`

- API not reachable?

Ensure `VITE_API_BASE_URL` points to the Laravel server.

- Logo preview not working?

Confirm `VITE_STORAGE_BASE_URL` matches the Laravel storage path.

## Screenshots

### Registration Page

<img src="frontend/Screenshots/Screenshot 2025-03-24 at 3.00.36 PM.png" alt="Registration" width="700">

### Login Page

<img src="frontend/Screenshots/Screenshot 2025-03-24 at 2.58.12 PM.png" alt="Login" width="700">

### Consultation Page

<img src="frontend/Screenshots/Screenshot 2025-03-24 at 2.58.59 PM.png" alt="Consultation page" width="700">

<img src="frontend/Screenshots/Screenshot 2025-03-24 at 2.59.49 PM.png" alt="Consultation page" width="700">

### Previous Lists

<img src="frontend/Screenshots/Screenshot 2025-03-24 at 3.03.24 PM.png" alt="Previous lists" width="700">

## Future Improvements

- Hosting (currently not hosted due to lack of a paid server)

- API-side pagination, sorting, CSV export, and search for DataTable(currently its done UI)

- Integrating the frontend within Laravel (currently set up separately)
