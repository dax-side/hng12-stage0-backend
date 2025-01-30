# HNG12 Backend Stage 0 - Public API

This is a simple API developed for the HNG12 Backend Stage 0 task. It returns basic information about the developer, including:

- The registered email address (used for HNG12 Slack workspace).
- The current date and time in ISO 8601 format.
- The GitHub URL of the project's codebase.

---
https://hng.tech/hire/nodejs-developers
## API Documentation

### Endpoint: `GET /`

When a GET request is made to the root endpoint, the API will respond with the following JSON format:

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/hng12-backend-task"
}

