# Full-Stack Twitter Clone with React, Node, and React Query

## Description

This project is a full-stack Twitter clone built using the MERN stack (MongoDB, Express.js, React, Node.js). It features user authentication, data fetching and caching, and a responsive UI. This application showcases modern web development practices and demonstrates the integration of various technologies.

## Video Demo

https://res.cloudinary.com/djtspieam/video/upload/Twitter-Clone-by-Dilum-Sampath_ttu6bb.mp4

## Features

- **User Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **Data Management**: Efficient data fetching and caching with React Query.
- **Core Functionality**:
  - Create, read, update, and delete tweets.
  - Follow and unfollow users.
  - Like and comment on tweets.
  - Edit profile information and upload profile images.
- **Notifications**: Real-time notifications for user activities.
- **Responsive Design**: Styled with Tailwind CSS for a modern, responsive UI.
- **Deployment**: Deployed using Docker and Heroku for scalability.

## Tech Stack

- **Frontend**: React, React Query, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **File Uploads**: Cloudinary
- **Deployment**: Docker, Heroku

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dilumsampath/full-stack-twitter-clone.git
   cd full-stack-twitter-clone
   ```

2. **Install dependencies for the backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend:**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Setup environment variables:**
   Create a `.env` file in the `backend` directory with the following variables:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

5. **Run the backend server:**

   ```bash
   cd backend
   npm start
   ```

6. **Run the frontend application:**
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

- **Authentication**: Signup and login to start using the application.
- **Tweets**: Post new tweets, like, comment, and delete them.
- **Follow Users**: Follow or unfollow other users to see their tweets.
- **Profile Management**: Edit your profile information and upload profile and cover images.
- **Notifications**: Get notified about likes, comments, and follows.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- Dilum Sampath

## Contact

For any questions or feedback, feel free to reach out.
