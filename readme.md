# Telegram Bot Server

A Node.js server application that integrates with Telegram Bot API to handle user interactions and store activities in MongoDB.

## Features

- Express.js REST API
- MongoDB integration with Mongoose
- Telegram Bot integration
- User activity tracking
- Comprehensive error handling
- CORS enabled
- Environment variables support

## Prerequisites

- Node.js (v18 or higher)
- MongoDB instance
- Telegram Bot Token

## Project Structure

```
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── botController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── Activity.js
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## API Endpoints

### Users

- **GET /api/users**

  - Retrieve all users
  - Response: Array of user objects

- **GET /api/users/:telegramId**

  - Retrieve a specific user by Telegram ID
  - Response: User object

- **GET /api/users/:telegramId/activities**
  - Retrieve all activities for a specific user
  - Response: Array of activity objects

### Health Check

- **GET /health**
  - Check server status
  - Response: `{ "status": "ok" }`

## Data Models

### User Model

```javascript
{
  telegramId: String,
  username: String,
  firstName: String,
  lastName: String,
  lastInteraction: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Activity Model

```javascript
{
  telegramId: String,
  action: String,
  data: Mixed,
  timestamp: Date
}
```

## Bot Features

- Automatic user registration/update on first interaction
- Activity logging for all interactions
- Message handling
- Callback query handling

## Error Handling

The application includes comprehensive error handling:

- MongoDB connection errors
- API endpoint errors
- Bot interaction errors
- Global error middleware

## Security

- CORS enabled
- Environment variables for sensitive data
- Input validation
- Error message sanitization

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
