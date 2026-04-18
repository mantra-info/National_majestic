# CME Certificate Management System

Production-oriented full-stack scaffold for administering CME events, HTML certificate templates, signature assets, attendee submissions, PDF generation, and certificate delivery.

## Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- PDF generation: Puppeteer
- Email: Nodemailer

## Project Structure

- `backend/`: API, MongoDB models, certificate engine, storage services, email service
- `frontend/`: React public form and admin dashboard
- `backend/storage/`: persisted templates, signatures, and generated certificates

## Backend Modules

- `src/models/Event.js`: event metadata plus event-level signature reference
- `src/models/Template.js`: HTML template linked one-to-one with an event
- `src/models/Submission.js`: attendee submissions, certificate status, email state
- `src/services/templateService.js`: HTML template normalization and persistence
- `src/services/certificateService.js`: placeholder injection, signature embedding, PDF generation
- `src/services/emailService.js`: SMTP delivery for generated certificates

## API Surface

- `POST /api/submit`
- `GET /api/events`
- `GET /api/admin/events`
- `POST /api/admin/events`
- `POST /api/admin/templates`
- `POST /api/admin/events/:eventId/signature`
- `GET /api/admin/submissions`
- `POST /api/admin/resend`

## Setup

1. Create env files:
   - `backend/.env` from `backend/.env.example`
   - `frontend/.env` from `frontend/.env.example`
2. Install dependencies:
   - `cd backend && npm install`
   - `cd frontend && npm install`
3. Start services:
   - `cd backend && npm run dev`
   - `cd frontend && npm run dev`

## Storage Behavior

- Uploaded HTML templates are saved to `backend/storage/templates`
- Signature images are saved to `backend/storage/signatures`
- Generated PDFs are saved to `backend/storage/certificates`
- Certificates are served from `/storage/...` for admin download actions

## Template Placeholders

- `{{NAME}}`
- `{{EVENT}}`
- `{{DATE}}`
- `{{CERT_ID}}`

## Notes

- SMTP credentials are required for email delivery.
- Puppeteer may need `PUPPETEER_EXECUTABLE_PATH` in restricted deployment environments.
- The scaffold is modular and ready for authentication, audit logging, queue workers, and cloud storage migration.
