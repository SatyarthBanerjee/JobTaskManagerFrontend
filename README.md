# Project Name

A brief description of your project and its purpose. Include any relevant context or motivation behind the development.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

User Authentication:

Secure user registration and login.
Support for JWT (JSON Web Tokens) for session management.
Task Management:

Create tasks with details like name, description, due date, priority, and assigned user.
Assign tasks to users while preventing self-assignment.
Update existing tasks, including changing their status and details.
Mark tasks as completed and move them to the completed tasks list.
Delete tasks completely from the system.
Task Status Organization:

Categorize tasks into "Todo," "In Progress," and "Completed" sections.
Dynamic updates of task status through drag-and-drop or button clicks.
Task Fetching:

Fetch all tasks assigned to the user from their own tasks and other users' tasks.
Display tasks in a user-friendly card format.
User Interface:

Responsive design with a clean, intuitive UI using CSS Modules.
Utilize priority badges to visually differentiate task priorities (High, Medium, Low).
Notifications:

Alerts or confirmations for actions like task creation, update, or deletion.
Context API for State Management:

Use Context API to manage global state for tasks, making it easier to share data across components.
API Integration:

Axios for making API calls to the backend for all task-related operations.
Error handling for API requests to improve user experience.



## Technologies Used

- **Frontend**: Next.Js, Axios, Context API, CSS Modules
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Others**: [Any other libraries or tools used, such as testing frameworks or build tools]

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SatyarthBanerjee/JobTaskManagerFrontend.git
