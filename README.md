# pingup

![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white)

## 📝 Description

Pingup is a comprehensive connectivity management platform designed to provide seamless monitoring across both web and command-line interfaces. Built on a robust stack of Express.js and React, it offers a secure, database-backed environment with integrated authentication and a flexible API. Whether you are leveraging its intuitive web dashboard or its powerful CLI tool, Pingup ensures reliable infrastructure tracking with a focus on performance and comprehensive testing.

## ✨ Features

- 🌐 Api
- 🗄️ Database
- 🔐 Auth
- 🧪 Testing
- 💻 Cli
- 🕸️ Web


## 🛠️ Tech Stack

- 🚀 Express.js
- ⚛️ React


## 📦 Key Dependencies

```
@clerk/clerk-react: ^5.59.0
@reduxjs/toolkit: ^2.11.2
@tailwindcss/vite: ^4.1.18
axios: ^1.13.3
cors: ^2.8.5
dotenv: ^17.2.3
express: ^5.2.1
lucide-react: ^0.561.0
moment: ^2.30.1
mongoose: ^9.1.5
multer: ^2.0.2
react: ^19.2.0
react-dom: ^19.2.0
react-hot-toast: ^2.6.0
react-redux: ^9.2.0
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **lint**: `npm run lint`
- **preview**: `npm run preview`


## 📁 Project Structure

```
.
├── client
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   └── favicon.svg
│   ├── src
│   │   ├── App.jsx
│   │   ├── api
│   │   │   └── axios.js
│   │   ├── app
│   │   │   └── store.js
│   │   ├── assets
│   │   │   ├── assets.js
│   │   │   ├── bgImage.png
│   │   │   ├── group_users.png
│   │   │   ├── logo.svg
│   │   │   ├── sample_cover.jpg
│   │   │   ├── sample_profile.jpg
│   │   │   └── sponsored_img.png
│   │   ├── components
│   │   │   ├── Loading.jsx
│   │   │   ├── MenuItems.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── ProfileModel.jsx
│   │   │   ├── RecentMessages.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StoriesBar.jsx
│   │   │   ├── StoryModel.jsx
│   │   │   ├── StoryViewer.jsx
│   │   │   ├── UserCard.jsx
│   │   │   └── UserProfileInfo.jsx
│   │   ├── features
│   │   │   ├── connections
│   │   │   │   └── connectionSlice.js
│   │   │   ├── messages
│   │   │   │   └── messagesSlice.js
│   │   │   └── user
│   │   │       └── userSlice.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages
│   │       ├── ChatBox.jsx
│   │       ├── Connections.jsx
│   │       ├── CreatePost.jsx
│   │       ├── Discover.jsx
│   │       ├── Feed.jsx
│   │       ├── Layout.jsx
│   │       ├── Login.jsx
│   │       ├── Messages.jsx
│   │       └── Profile.jsx
│   ├── vercel.json
│   └── vite.config.js
└── server
    ├── configs
    │   ├── db.js
    │   ├── imagekit.js
    │   ├── multer.js
    │   └── nodemailer.js
    ├── controllers
    │   ├── messageController.js
    │   ├── postController.js
    │   ├── storyController.js
    │   └── userController.js
    ├── inngest
    │   └── index.js
    ├── middlewares
    │   └── auth.js
    ├── models
    │   ├── Connection.js
    │   ├── Message.js
    │   ├── Post.js
    │   ├── Stroy.js
    │   └── User.js
    ├── package.json
    ├── routes
    │   ├── messageRoutes.js
    │   ├── postRoutes.js
    │   ├── storyRoutes.js
    │   └── userRoutes.js
    ├── server.js
    └── vercel.json
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Dhanush18100/pingup.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

---
