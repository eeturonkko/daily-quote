# Daily Quote

Welcome to Daily Quote, a web application designed to inspire and motivate users by delivering a new quote every day. Built with SvelteKit and leveraging Supabase for data storage, this project prioritizes accessibility, ensuring a seamless experience for users with screen readers.

## Features

- **Daily Inspiration:** Users receive a new quote each day, aimed at inspiring and motivating them.
- **Accessibility First:** Designed with accessibility in mind, the site is fully navigable and usable with screen readers, adhering to WCAG guidelines.
- **Responsive Design:** Crafted to provide an optimal viewing experience across a wide range of devices.
- **Supabase Integration:** Utilizes Supabase for robust, scalable backend data storage.

## Technology Stack

- **Frontend:** SvelteKit - A framework for building highly interactive web applications.
- **Backend/Data Storage:** Supabase - An open-source Firebase alternative that provides database storage, real-time subscriptions, authentication, and more.
- **Accessibility:** Best practices and tools ensuring compliance with WCAG standards.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or later)
- npm/yarn

### Installation

1. Fork the repository:

   ```bash
   git clone https://github.com/eeturonkko/daily-quote.git

   ```

2. Navigate to the project directory:

   ```bash
   cd daily-quote

   ```

3. Install dependencies:

   ```bash
    npm install

   ```

4. Create a .env file in the root directory and add your Supabase URL and Anon Key:

   ```bash
   API_KEY="ninja-api-key"
   VITE_PUBLIC_SUPABASE_URL="https://something.supabase.co"
   VITE_PUBLIC_SUPABASE_ANON_KEY="eyJhb......"

   ```

5. Run the development server:

   ```bash
   npm run dev

   ```

### Accessibility

This project is committed to maintaining high accessibility standards, ensuring content is accessible to people with disabilities. We strive to follow the Web Content Accessibility Guidelines (WCAG) and welcome any contributions that improve the site's accessibility.
