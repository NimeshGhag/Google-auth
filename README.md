# Google-auth

Simple example demonstrating Google OAuth 2.0 with Passport and issuing a JWT.

## Features

- Google OAuth 2.0 via `passport-google-oauth20`
- Issues a short-lived JWT after successful authentication

## Prerequisites

- Node.js (v16+ recommended)
- A Google OAuth 2.0 Client ID and Client Secret (create credentials in Google Cloud Console)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with the following variables:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=a_secure_jwt_secret
```

3. Ensure your Google OAuth credentials use the callback URL `/auth/google/callback` (when testing locally, set the authorized redirect URI to `http://localhost:3000/auth/google/callback`).

## Run

Start the app:

```bash
node src/app.js
```

The server listens on port `3000` by default.

## Routes

- `GET /auth/google` — Start Google OAuth flow
- `GET /auth/google/callback` — OAuth callback; returns JSON with a JWT on success

Example response from the callback route:

```json
{
  "message": "Authentication successful",
  "token": "<jwt-token-string>"
}
```

## Notes

- The JWT is signed with `JWT_SECRET` and expires in 1 hour.
- This example returns the Google profile directly; in a production app, persist or lookup users in a database.

## License

ISC
