# startupsync

# 🚀 StartupSync - Empowering Startups, Accelerating Progress

**StartupSync** is a comprehensive platform designed to help startups manage their journey. From KYC compliance to progress tracking and grant management, it provides an all-in-one solution to empower entrepreneurs and accelerate their growth. The platform offers features like notifications, real-time progress tracking, and seamless startup-to-investor communication.

## 🏗️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion, ShadCN
- **Backend**: Node.js, Express.js, MongoDB
- **State Management**: Redux, Redux Toolkit (Async Thunk)
- **Real-Time Communication**:Socket.IO
- **API Calls**: Axios
- **Scheduled Tasks**: Node-Cron
- **Email Notifications**: Nodemailer
- **Styling**: Tailwind CSS (Responsive with Grid & Flexbox)
- **Animations**: Framer Motion

## 🌟 Key Features

### User & Admin Dashboard

- **Add, Edit, Delete Notifications**: Users and Admins can manage notifications.
- **Real-Time Notifications**: Get updates instantly with Socket.IO for startup and admin activities.
- **Progress Tracking**: Monitor and submit startup progress reports.
- **KYC Management**: Upload and manage KYC documents securely.
- **Grant Management**: Access and manage grant opportunities.
- **Monthly Reporting**: Submit and generate monthly reports to track startup growth.
- **Dynamic FAQ Section**: Expandable and collapsible FAQ section with smooth animations.
- **Email Reminders**: Scheduled reminders via Node-Cron and Nodemailer for progress updates and KYC submissions and also when we are registering a user the user gets a welcome meassage from startupsync as shown in image
- 


### Upcoming Shark Tank Simulation

- **Interactive Bidding**: Simulates a Shark Tank-like bidding experience where users pitch ideas and investors (sharks) engage.
- **Notification System**: Real-time notifications for startups and sharks, providing updates on grants, progress, and new pitches.

## ✨ UI/UX Enhancements

- **Responsive Design**: Tailwind CSS ensures the platform adapts beautifully across different devices and screen sizes.
- **Framer Motion Animations**: Smooth animations for modals, buttons, and FAQ interactions.
- **Grid & Flexbox Layouts**: Flexible and expandable design for small and large screens, enhancing user experience.
- **Dynamic FAQ Section**: Collapsible FAQ items with `+/-` toggle for better user interaction.

## 🔧 Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/startupsync.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the backend folder with the following:
   ```
   PORT=5500
   MONGO_URI=your_mongodb_connection_string
   ```
5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

### Run the Application

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5500`

## 🛠️ API Endpoints

### Notification Routes

- **GET /api/notifications** - Fetch all notifications
- **POST /api/notifications** - Add a new notification (Admin)
- **DELETE /api/notifications/:id** - Delete a notification by ID

### Progress Routes

- **POST /api/progress-report** - Submit a progress report (Users)

### KYC Routes

- **POST /api/kyc** - Upload KYC documents (Users)

## 🌍 Deployment

To deploy this application on a production environment:

1. Build the frontend for production:
   ```bash
   npm run build
   ```
2. Deploy the backend and frontend using your favorite cloud platform (AWS, Heroku, etc.).

## 🎨 UI Features

### Header & Navbar

- **Logo**: StartupSync branding.
- **Navigation Links**: Home, About, Announcements, FAQ, Contact.

### Dynamic Landing Page

- **Hero Section**: Introduction to StartupSync.
- **Key Features**: Displaying main features like KYC Management, Progress Tracking, Grant Access, etc.
- **About Section**: Information about the platform.
- **Testimonials**: Real feedback from users like teachers, HR professionals, and parents.

### FAQ Section

- **Dynamic FAQ with Collapsible Sections**: Expand/collapse feature using React `useState` for better accessibility.
- **Framer Motion for Animation**: Smooth transitions for opening/closing FAQ items.

### Footer

- **Contact Information**: Address, email, and phone number.
- **Social Links**: Links to social media platforms (Facebook, Twitter, Instagram, LinkedIn).

## ⚙️ Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## Team Contribution (IIITS LATENT)

-**Monu**: Leader (handles backend). -**Ashutosh**: PPT Creator. -**Vasudev**: Webiste Component Creator. -**Ansh Mishra**: Website Compnents Creator.

## 🤝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀 If you encounter any issues, feel free to open an issue or submit a pull request.
