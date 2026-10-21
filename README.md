# Better Auth — Next.js Authentication Setup

A modern authentication setup using **Better Auth**, integrated with Next.js, TypeScript, and PostgreSQL. This repository provides a foundation for implementing secure authentication and session management in full-stack web applications.

## 🛠️ Tech Stack

- **[Better Auth](https://www.better-auth.com/)** — Authentication and session management.
- **[Next.js](https://nextjs.org/)** — Full-stack React framework.
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety and maintainability.
- **[PostgreSQL](https://www.postgresql.org/)** — Relational database.
- **[Neon](https://neon.tech/)** — Serverless PostgreSQL hosting.

## ✨ Features

- Better Auth integration with Next.js.
- Database integration with PostgreSQL.
- Session management.
- Type-safe authentication configuration.
- Environment-based configuration.
- Foundation for protected routes and authenticated user experiences.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm, pnpm, or another compatible package manager.
- A PostgreSQL database.
- A configured Neon project.

### 1. Install Dependencies

```bash
npm install better-auth
```

Install the other dependencies required by your application as needed.

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL="your_postgresql_connection_string"
BETTER_AUTH_SECRET="your_secure_secret"
BETTER_AUTH_URL="http://localhost:3000"
```

Replace the placeholder values with your actual configuration.

Generate a secure secret using:

```bash
openssl rand -base64 32
```

**Security:** Never commit your environment files or expose your database credentials and authentication secret.

### 3. Configure Better Auth

Create your Better Auth instance and configure the appropriate database connection.

Refer to the official installation guide for the latest configuration instructions:

**[Better Auth — Installation](https://www.better-auth.com/docs/installation)**

### 4. Configure the Database

Connect Better Auth to your PostgreSQL database and generate or apply the required schema using the migration workflow supported by your configuration.

See the official database documentation:

**[Better Auth — Database](https://www.better-auth.com/docs/concepts/database)**

### 5. Run the Application

```bash
npm run dev
```

The application will be available at:

http://localhost:3000

## 📚 Resources

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Better Auth GitHub Repository](https://github.com/better-auth/better-auth)
- [Next.js Documentation](https://nextjs.org/docs)
- [Neon Documentation](https://neon.tech/docs)

## 📄 License

This repository is intended for learning, experimentation, and reuse as an authentication setup. Add a license file if you intend to distribute it.

---

**Authentication infrastructure powered by Better Auth.**
