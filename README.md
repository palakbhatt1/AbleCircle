# AbleCircle

AbleCircle is a community-support platform for caregivers and families of children with intellectual disabilities. The core idea is to bring the different things a caregiver needs into one trusted ecosystem instead of making them hunt through WhatsApp groups, random websites, NGOs, and unverified listings. 

Humanity apparently decided that managing five spreadsheets and twelve WhatsApp groups was a reasonable healthcare workflow. **AbleCircle is here to change that.**

## Key Features

- **Community**: A safe space where parents and caregivers can connect, share experiences, and support each other.
- **Verified Resources**: Curated information about therapies, services, workshops, NGOs, and other useful resources.
- **Therapist & Service Discovery**: Helping parents find relevant, verified therapists and support providers.
- **Trust & Verification Layer**: Establishing trust by verifying different stakeholders. The system ensures only verified therapists appear in directories, while caregiver/parent accounts undergo their own verification processes (e.g., UDID-based verification for parents, credentials for therapists).
- **Workshops & Events**: Discovering relevant educational or support sessions tailored for caregivers.
- **NGO Collaboration**: Working with organizations such as Samadhan NGO to connect the digital platform with real-world support services.

## 🏗️ Architecture & Tech Stack

AbleCircle is built using a modern, scalable web stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router) for server-side rendering and routing.
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling.
- **Animations**: [Lottie](https://lottiefiles.com/) (via `@dotlottie/react-player`) for lightweight, scalable animations.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust, type-safe development.

##  Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone <your-repo-url>
   cd AbleCircle
   ```

2. Install dependencies:
   ```bash
   npm install
   # or yarn install / pnpm install / bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or yarn dev / pnpm dev / bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


