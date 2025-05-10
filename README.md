# Email Template Generator

A full-stack application that generates professional email templates using AI. Built with React for the frontend and Express/Node.js for the backend, leveraging Google's Generative AI for intelligent email content generation.

## 🚀 Features

- **AI-Powered Email Generation**: Convert brief descriptions into professional email templates
- **Dynamic Content**: Easily customize placeholders for names, companies, and other variables
- **User-Friendly Interface**: Simple form-based input for quick template generation
- **Secure API Handling**: Backend management of API keys and AI interactions

## 📁 Project Structure

```
emailTemplateWebsite/
├── frontend/     # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── utils/       # Utility functions
│   │   └── styles/      # CSS styles
│   └── package.json
│
└── backend/              # Backend Express server
    ├── aiService.js     # AI integration logic
    ├── index.js        # Express server setup
    └── package.json
```

## 🛠️ Setup & Installation

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the server directory:

```
API_KEY=your_google_ai_api_key
PORT=3000
```

Start the server:

```bash
node index.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔑 Environment Variables

The following environment variables are required in the `server/.env` file:

- `API_KEY`: Your Google Generative AI API key
- `PORT`: The port number for the backend server (default: 3000)

## 🚦 API Endpoints

### Generate Email Template

- **URL**: `/api/emailFormat`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "emailTemplate": "string"
  }
  ```
- **Response**:
  ```json
  {
    "generatedEmail": "string"
  }
  ```

## 🧪 Testing

1. Start both servers (frontend and backend)
2. Navigate to `http://localhost:5173` in your browser
3. Enter an email template description
4. Submit the form to receive an AI-generated email template

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## ⚠️ Important Notes

- Never commit the `.env` file
- Keep your API keys secure
- Ensure both frontend and backend servers are running for the application to work
