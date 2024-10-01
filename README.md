
# Biodata Generation Form Application (bun, )

This project is a full-stack biodata generation form application built using **React** for the frontend and **Bun** with **Elysia** for the backend. The application allows users to submit their biodata, which is then logged and returned by the server.

## Technologies Used

- **Frontend**:

  - **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
  - **Vite**: A fast build tool that provides a development server and optimizes the build process.
- **Backend**:

  - **Bun**: A modern JavaScript runtime that includes a bundler, transpiler, and package manager.
  - **Elysia**: A web framework for building APIs with Bun.
  - **CORS(@elysiajs/cors)**: Middleware to enable Cross-Origin Resource Sharing.

## Running the Application

### Backend Instructions

1. **Navigate to the Backend Directory**:

   ```bash
   cd bunproject
   ```
2. **Install Dependencies**:
   Ensure you have all the necessary dependencies installed:

   ```bash
   bun install
   ```
3. **Run the Backend Server**:
   Start the backend server using Bun:

   ```bash
   bun run index.ts
   ```

   The server will run on `http://localhost:8000`.

### Frontend Instructions

1. **Navigate to the Frontend Directory**:

   ```bash
   cd biodata-frontend
   ```
2. **Install Dependencies**:
   Ensure you have all the necessary dependencies installed:

   ```bash
   bun install
   ```
3. **Run the Frontend Application**:
   Start the frontend application using Vite:

   ```bash
   bun run dev
   ```

   The application will be available at `http://localhost:5173` (or another port if 5173 is occupied).

## How to Contribute

1. **Fork the Repository**: Create a personal copy of the repository by forking it.
2. **Clone the Repository**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/bunproject.git
   ```
3. **Create a New Branch**: Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Changes**: Implement your changes and test them thoroughly.
5. **Commit Your Changes**: Commit your changes with a descriptive message.
   ```bash
   git commit -m "Add your message here"
   ```
6. **Push to Your Fork**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Go to the original repository and create a pull request from your branch.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions or need further assistance! Happy coding!
