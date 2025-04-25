<div align="center">
  <br />
    <a href="https://www.youtube.com/watch?v=xZ1ba-RLrjo" target="_blank">
      <img src="public/assets/images/readme.png" alt="Project Banner">
    </a>
  <br />
  <div>
    <img alt="Static Badge" src="https://img.shields.io/badge/React-4c84f3?style=for-the-badge&logo=react&logoColor=white">
    <img alt="Static Badge" src="https://img.shields.io/badge/Appwrite-f05695?style=for-the-badge&logo=appwrite&logoColor=white">
    <img alt="Static Badge" src="https://img.shields.io/badge/Syncfusion-181758?style=for-the-badge&logoColor=white">
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </div>
  <h3 align="center">Travel Agency Platform</h3>

  <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## ⚠️ Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://www.youtube.com/watch?v=xZ1ba-RLrjo" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

A modern travel agency platform with an admin dashboard and public site. Generate AI-powered trip itineraries based on country, travel style, interests, group type, and budget — and book trips with ease.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **50k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Syncfusion
- React Router v7 (framework mode)
- Appwrite
- Tailwind CSS
- Vite
- React 19

## <a name="features">🔋 Features</a>

### Features of the Travel Agency Project

👉 AI-powered trip itinerary generator

👉 Trip booking functionality on the public website

👉 Admin dashboard with trip and user management

👉 User growth metrics and trip analytics

👉 Interactive charts and trip statistics table

👉 Detailed trip overview

👉 Responsive UI with a modern design

👉 Secure user authentication and data management

👉 Modular code architecture with reusable components

and many more, built for scalability and a smooth user experience.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/travel-agency-dashboard.git
cd travel-agency-dashboard
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_SYNCFUSION_LICENSE_KEY=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_API_ENDPOINT=
VITE_APPWRITE_API_KEY=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_USERS_COLLECTION_ID=
VITE_APPWRITE_ITINERARY_COLLECTION_ID=
STRIPE_SECRET_KEY=
GEMINI_API_KEY=
UNSPLASH_ACCESS_KEY="
VITE_BASE_URL="http://localhost:5173"
```

### Replace the placeholder values with your actual credentials.

- **[Syncfusion](https://jsm.dev/tourvisto-syncfusion)**

- **[Appwrite](https://jsm.dev/tourvisto-appwrite)**

- **[Gemini AI](https://aistudio.google.com/)**

- **[Sentry](https://jsm.dev/tourvisto-sentry)**

- **[Stripe](https://stripe.com/)**

- **[Unsplash](https://unsplash.com/)**

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173/) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>app.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";
@import "tailwindcss";

@theme {
  --font-figtree: "Figtree", sans-serif;
  --font-inter: "Inter", sans-serif;
  --color-dark-100: #1f1f36;
  --color-dark-200: #141627;
  --color-dark-300: #101828;
  --color-dark-400: #2e2c48;
  --color-gray-100: #7f7e83;
  --color-gray-200: #eaecf0;
  --color-gray-500: #667085;
  --color-gray-700: #344054;
  --color-primary-50: #e9f3fb;
  --color-primary-100: #256ff1;
  --color-primary-500: #175cd3;
  --color-light-100: #ecf2ef;
  --color-light-200: #f9fbfc;
  --color-light-300: #f2f4f7;
  --color-light-400: #ebeeed;
  --color-light-500: #e3f1ff;
  --color-success-50: #ecfdf3;
  --color-success-500: #12b76a;
  --color-success-700: #027a48;
  --color-pink-50: #f7edf6;
  --color-pink-500: #c11574;
  --color-navy-50: #f0f9ff;
  --color-navy-500: #026aa2;
  --color-red-500: #b93815;
  --color-red-50: #fff4ed;
  --color-red-100: #ff543d;

  --background-image-auth: url("/assets/images/auth-img.webp");
  --background-image-hero: url("/assets/images/hero-img.png");
  --background-image-card-1: url("/assets/images/card-img-1.png");
  --background-image-card-2: url("/assets/images/card-img-2.png");
  --background-image-card-3: url("/assets/images/card-img-3.png");
  --background-image-card-4: url("/assets/images/card-img-4.png");
  --background-image-card-5: url("/assets/images/card-img-5.png");
  --background-image-card-6: url("/assets/images/card-img-6.png");
  --background-image-linear100: linear-gradient(
    105deg,
    rgba(207, 241, 255, 0.8) 14.17%,
    rgba(255, 255, 255, 0) 54.71%
  );
  --background-image-linear200: linear-gradient(
    39deg,
    rgba(3, 3, 3, 0.54) -3.66%,
    rgba(6, 6, 6, 0) 45.57%
  );
  --shadow-100:
    0px 1px 3px 0px rgba(16, 24, 40, 0.1),
    0px 1px 2px 0px rgba(16, 24, 40, 0.06);
  --shadow-200:
    0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 20px -2px rgba(16, 24, 40, 0.2);
  --shadow-300: 0px 2px 30px 0px rgba(0, 0, 0, 0.05);
  --shadow-400: 0px 2px 6px 0px rgba(13, 10, 44, 0.08);
  --shadow-500: 0px 12px 16px -4px rgba(16, 24, 40, 0.1);
  --radius-20: 20px;
}

@layer components {
  .error {
    @apply text-red-500 text-base font-medium text-center;
  }
  .all-users {
    @apply w-full min-h-screen  flex flex-col gap-10;
  }

  .stats-card {
    @apply p-6 flex flex-col gap-6 bg-white shadow-400 rounded-20 text-dark-100;

    .content {
      @apply flex flex-row md:flex-col-reverse xl:flex-row xl:items-center gap-3 justify-between;
    }
  }

  .sign-in-card {
    @apply flex bg-white flex-col border border-light-100 md:max-w-[510px] rounded-[20px] py-10 px-6 w-full;
    header {
      @apply flex items-center gap-1.5 justify-center;
    }
    article {
      @apply mt-9 mb-[30px] flex flex-col gap-3;
    }
  }
  .info-pill {
    @apply flex items-center gap-1.5;
    img {
      @apply size-5;
    }
    figcaption {
      @apply text-sm md:text-lg font-normal truncate text-gray-100;
    }
  }

  .trip {
    @apply flex flex-col gap-10 pb-20;
    section {
      @apply flex flex-col gap-5 mt-2.5;
    }
  }
  .auth {
    @apply w-full h-screen flex bg-auth bg-cover bg-no-repeat;
  }

  .payment-success {
    @apply flex flex-col gap-10 pb-20 items-center justify-center h-screen;
    section {
      @apply flex flex-col gap-5 justify-between w-full items-center;
      article {
        @apply flex flex-col gap-3.5 w-full items-center justify-center md:max-w-[488px];
        h1 {
          @apply text-xl md:text-3xl font-semibold text-dark-100;
        }
        p {
          @apply text-gray-100 text-sm font-normal md:text-lg text-center;
        }
      }
    }
  }

  .trip-form {
    @apply flex flex-col gap-6 py-6 bg-white border border-light-200 rounded-xl shadow-100;
    div {
      @apply w-full flex flex-col gap-2.5 px-6 relative;
    }
    label {
      @apply text-sm font-normal text-gray-100;
    }
  }

  .travel-hero {
    @apply bg-hero bg-origin-content bg-cover;

    div {
      @apply flex flex-col bg-linear100 bg-cover;

      section {
        @apply py-48 justify-center items-start flex flex-col gap-6;

        article {
          @apply flex flex-col w-full md:max-w-[520px] gap-3.5;
          p {
            @apply text-lg font-normal text-dark-400;
          }
        }
      }
    }
  }
  .travel-featured {
    @apply flex flex-col lg:flex-row gap-[30px] h-2/3 lg:h-1/2;
  }

  .travel-detail {
    @apply flex flex-col gap-10 pb-20;

    .travel-div {
      @apply flex flex-col lg:flex-row gap-10;
    }

    .back-link {
      @apply flex items-center justify-center gap-2.5 py-3 px-[30px] border-gray-200 rounded-lg shadow-500 bg-white h-[50px] w-[240px];

      img {
        @apply size-[17px];
      }

      span {
        @apply text-base font-semibold text-dark-100;
      }
    }

    .container {
      @apply flex flex-col gap-9 mt-2.5;

      header {
        @apply flex flex-col gap-6 overflow-hidden;

        div {
          @apply flex items-center gap-5;
        }
      }

      .gallery {
        @apply grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-7 mt-1;
      }
    }

    .visit {
      @apply flex flex-col gap-5;

      div {
        @apply flex flex-col gap-4;

        h3 {
          @apply text-base md:text-xl text-dark-400 font-semibold;
        }

        ul {
          @apply flex flex-col gap-3;
          li {
            @apply flex justify-between gap-7 text-sm md:text-lg font-normal text-dark-400 !list-disc;
          }
        }
      }
    }

    .itinerary {
      @apply flex flex-col gap-9;

      li {
        @apply flex flex-col gap-4;

        h3 {
          @apply text-base md:text-xl font-semibold text-dark-400;
        }

        ul {
          @apply flex flex-col sm:gap-3 gap-7;

          li {
            @apply flex max-sm:flex-col flex-row justify-between sm:gap-7 gap-3 text-sm md:text-lg font-normal text-dark-400 !list-disc;

            span {
              @apply w-[90px];
            }
          }
        }
      }
    }
    .title {
      @apply flex justify-between gap-5;

      article {
        @apply flex flex-col gap-4;

        h3 {
          @apply text-xl md:text-3xl text-dark-100 font-semibold;
        }

        p {
          @apply text-base md:text-2xl text-gray-100 font-normal;
        }
      }

      h2 {
        @apply text-sm md:text-xl font-normal text-dark-100;
      }
    }
  }
  .trip-card {
    @apply shadow-300 bg-white rounded-[20px] flex-col w-full relative;
    img {
      @apply w-full h-[160px] rounded-t-xl object-cover aspect-video;
    }
    article {
      @apply flex flex-col gap-3 mt-4 pl-[18px] pr-3.5;
      h2 {
        @apply text-sm md:text-lg font-semibold text-dark-100 line-clamp-2;
      }
      figure {
        @apply flex items-center gap-2;
        figCaption {
          @apply text-xs md:text-sm font-normal text-gray-100;
        }
      }
    }
  }
  .link-logo {
    @apply flex items-center gap-1.5 py-10 border-b border-light-100;
    h1 {
      @apply text-base md:text-2xl font-bold text-dark-100;
    }
  }
  .nav-footer {
    @apply flex items-center gap-2.5 pb-8;
    img {
      @apply size-10 rounded-full aspect-square;
    }
    article {
      @apply flex flex-col gap-[2px] max-w-[115px];
      h2 {
        @apply text-sm md:text-base font-semibold text-dark-200 truncate;
      }
      p {
        @apply text-gray-100 text-xs md:text-sm font-normal truncate;
      }
    }
  }
  .mobile-sidebar {
    @apply lg:hidden flex flex-col gap-5;
    header {
      @apply flex justify-between items-center border-b border-light-100;
      h1 {
        @apply text-base md:text-2xl font-bold text-dark-100;
      }
      a {
        @apply flex items-center gap-1.5 py-10;
      }
    }
  }
  .root-nav {
    @apply flex justify-between gap-4  items-center;
    a {
      @apply flex items-center gap-1.5 py-10;
      h1 {
        @apply text-base md:text-2xl font-bold text-dark-100;
      }
    }
    aside {
      @apply flex gap-4 items-center;
      img {
        @apply size-10 rounded-full aspect-square;
      }
    }
  }
  .footer-container {
    @apply flex justify-between items-center h-full gap-5;
    a {
      @apply flex items-center gap-1.5 py-10;
      h1 {
        @apply text-base md:text-2xl font-bold text-dark-100;
      }
    }
    div {
      @apply flex items-center gap-2 sm:gap-5;
      a {
        @apply text-sm md:text-base font-normal text-gray-100;
      }
    }
  }
  .header {
    @apply flex flex-col gap-5 md:flex-row justify-between w-full;
    article {
      @apply flex flex-col gap-3.5 w-full;
    }
  }
  .nav-items {
    @apply flex flex-col px-6 h-full;
    .container {
      @apply flex flex-col justify-between h-full;
      nav {
        @apply flex flex-col gap-3.5 pt-9;
      }
    }
  }

  .admin-layout {
    @apply flex flex-col lg:flex-row h-screen w-full;
    .children {
      @apply w-full h-full bg-light-200 pt-12 lg:pt-10;
    }
  }
  .user-trip {
    @apply pb-20 flex flex-col lg:flex-row gap-5 justify-between;
  }

  .status-column {
    @apply flex justify-center items-center gap-1 w-[65px] py-[2px]  rounded-2xl mix-blend-multiply;
  }

  .dashboard {
    @apply flex flex-col gap-10 w-full  pb-20;

    .container {
      @apply flex flex-col gap-5 mt-2.5;
      h1 {
        @apply text-xl font-semibold text-dark-100;
      }
    }
  }
  .featured-card {
    @apply flex flex-col justify-between gap-3.5 p-[30px] min-h-[230px] h-full;
  }
  .featured {
    @apply flex flex-col md:flex-row gap-[30px];
    article {
      @apply flex flex-col gap-[30px] w-full;
    }
  }
}

@layer utilities {
  .wrapper {
    @apply w-full max-w-7xl mx-auto px-4 lg:px-8;
  }
  .wrapper-md {
    @apply w-full max-w-3xl px-4 lg:px-8 mx-auto;
  }
  .flex-center {
    @apply flex justify-center items-center;
  }
  .flex-between {
    @apply flex justify-between items-center;
  }
  .p-72-bold {
    @apply text-5xl md:text-7xl font-bold;
  }
  .p-40-semibold {
    @apply text-3xl md:text-[40px] md:leading-[44px] font-semibold;
  }

  .p-30-bold {
    @apply text-2xl md:text-3xl font-bold;
  }
  .p-28-bold {
    @apply text-[20px] md:text-[28px] leading-[16px] md:leading-[20px] font-bold;
  }
  .p-28-semibold {
    @apply text-[20px] text-2xl md:text-[28px] leading-[16px] md:leading-[20px] font-semibold;
  }
  .p-24-semibold {
    @apply text-lg md:text-2xl font-semibold;
  }
  .p-20-semibold {
    @apply text-base md:text-[20xp] md:leading-7 font-semibold;
  }
  .p-18-bold {
    @apply text-[14px] md:text-[18px] leading-[14px] md:leading-[16px] font-bold;
  }
  .p-18-semibold {
    @apply text-[14px] md:text-[18px] leading-[14px] md:leading-[16px] font-semibold;
  }
  .p-18-regular {
    @apply text-[14px] md:text-[18px] leading-[14px] md:leading-[16px] font-normal;
  }
  .p-16-semibold {
    @apply text-sm md:text-base font-semibold;
  }
  .button-class {
    @apply !bg-primary-100 !px-4 !rounded-lg !flex !items-center !justify-center !gap-1.5 !shadow-none;
  }
  .button-class-secondary {
    @apply !bg-white !px-4 !rounded-lg !flex !items-center !justify-center !gap-1.5 !shadow-sm;
  }
  .form-label {
    @apply text-sm font-normal text-gray-100;
  }
  .form-input {
    @apply p-3.5 border border-light-400 rounded-xl text-base text-dark-300 font-normal;
  }
  .comboBox-popup {
    @apply absolute z-10 top-24 bg-white border border-gray-200 rounded-xl shadow-200 h-[250px] w-full md:max-w-[660px] overflow-hidden;
  }
  .tripCard-pill {
    @apply bg-white py-1 px-2.5 w-fit rounded-[20px] absolute top-2.5 right-4 text-dark-100 text-sm font-semibold;
  }
  .price-pill {
    @apply bg-white py-0.5 px-2.5 w-fit rounded-[20px] top-2.5 right-4 text-dark-100 text-sm font-semibold;
  }
  .trip-grid {
    @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7;
  }
  .nav-item {
    @apply flex items-center text-xs md:text-lg font-normal cursor-pointer gap-2.5 py-[18px] px-3.5 rounded-lg text-dark-200 hover:bg-primary-100 hover:text-white;
  }
  .combo-box {
    @apply !p-3.5 !border w-full !border-light-400 !rounded-xl !text-base !text-dark-300 !font-normal;
  }
}

html,
body {
  font-family: "Figtree", sans-serif;
  background-color: #f9fbfc;
  scroll-behavior: smooth;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

/* ======== css overrides for syncfusion ========= */
.e-grid,
.e-table {
  border-color: #eef9ff !important;
}

.e-control {
  border-radius: 12px !important;
}

.e-grid .e-gridheader {
  border-color: #eef9ff !important;
  border-radius: 12px 12px 0 0 !important;
}

.e-grid .e-row:nth-child(odd) {
  background-color: #f9fbfc;
}

.e-grid .e-rowcell {
  padding-top: 18px !important;
  padding-bottom: 18px !important;
}

.e-sidebar.e-left {
  border-right: 1px solid #ecf2ef;
}
.e-btn,
.e-css.e-btn {
  text-transform: none;
}
.e-dropdown-btn {
  border-radius: 6px;
  border: 1px solid #f0fef9;
  background: #ffffff;
  box-shadow:
    0px 0px 3px 0px rgba(16, 24, 40, 0.1),
    0px 0px 2px 0px rgba(16, 24, 40, 0.06);
  height: 40px;
}

.e-dropdown-popup ul {
  border-radius: 8px;
  border: 1px solid #eaecf0;
  background: #fff;
  box-shadow:
    0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 20px -2px rgba(16, 24, 40, 0.2);
}
.e-dropdown-popup ul .e-item {
  padding-left: 36px;
  padding-right: 36px;
}
/* e-input-group-icon e-ddl-icon e-search-icon */

.e-input-group-icon {
  position: absolute;
  top: 45px;
  right: 40px;
}
```

</details>

<details>
<summary><code>constants/index.ts</code></summary>

```ts
import type { AxisModel } from "@syncfusion/ej2-react-charts";

export const sidebarItems = [
  {
    id: 1,
    icon: "/assets/icons/home.svg",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    icon: "/assets/icons/users.svg",
    label: "All Users",
    href: "/all-users",
  },
  {
    id: 4,
    icon: "/assets/icons/itinerary.svg",
    label: "AI Trips",
    href: "/trips",
  },
];

export const chartOneData: object[] = [
  {
    x: "Jan",
    y1: 0.5,
    y2: 1.5,
    y3: 0.7,
  },
  {
    x: "Feb",
    y1: 0.8,
    y2: 1.2,
    y3: 0.9,
  },
  {
    x: "Mar",
    y1: 1.2,
    y2: 1.8,
    y3: 1.5,
  },
  {
    x: "Apr",
    y1: 1.5,
    y2: 2.0,
    y3: 1.8,
  },
  {
    x: "May",
    y1: 1.8,
    y2: 2.5,
    y3: 2.0,
  },
  {
    x: "Jun",
    y1: 2.0,
    y2: 2.8,
    y3: 2.5,
  },
];

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];

export const footers = ["Terms & Condition", "Privacy Policy"];

export const selectItems = [
  "groupType",
  "travelStyle",
  "interest",
  "budget",
] as (keyof TripFormData)[];

export const comboBoxItems = {
  groupType: groupTypes,
  travelStyle: travelStyles,
  interest: interests,
  budget: budgetOptions,
} as Record<keyof TripFormData, string[]>;

export const userXAxis: AxisModel = { valueType: "Category", title: "Day" };
export const useryAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const tripXAxis: AxisModel = {
  valueType: "Category",
  title: "Travel Styles",
  majorGridLines: { width: 0 },
};

export const tripyAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const CONFETTI_SETTINGS = {
  particleCount: 200, // Number of confetti pieces
  spread: 60, // Spread of the confetti burst
  colors: ["#ff0", "#ff7f00", "#ff0044", "#4c94f4", "#f4f4f4"], // Confetti colors
  decay: 0.95, // Gravity decay of the confetti
};

export const LEFT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 45, // Direction of the confetti burst (90 degrees is top)
  origin: { x: 0, y: 1 }, // Center of the screen
};

export const RIGHT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 135,
  origin: { x: 1, y: 1 },
};
```


</details>

<details>
<summary><code>index.d.ts</code></summary>

```ts
declare interface BaseUser {
  id: string;
  name: string;
  email: string;
  dateJoined: string;
  imageUrl: string;
}

declare interface UserData extends BaseUser {
  itineraryCreated: number | string;
  status: "user" | "admin";
}

declare type User = BaseUser;

declare interface Country {
  name: string;
  coordinates: [number, number];
  value: string;
  openStreetMap?: string;
}

declare interface DropdownItem {
  name: string;
}

declare interface SelectProps {
  data: Country[] | DropdownItem[];
  onValueChange: (value: string) => void;
  id: string;
  label: string;
  placeholder: string;
}

declare interface PillProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

declare interface Activity {
  time: string;
  description: string;
}

declare interface DayPlan {
  day: number;
  location: string;
  activities: Activity[];
}

declare interface Location {
  city: string;
  coordinates: [number, number];
  openStreetMap: string;
}

declare interface Trip {
  id: string;
  name: string;
  description: string;
  estimatedPrice: string;
  duration: number;
  budget: string;
  travelStyle: string;
  interests: string;
  groupType: string;
  country: string;
  imageUrls: string[];
  itinerary: DayPlan[];
  bestTimeToVisit: string[];
  weatherInfo: string[];
  location: Location;
  payment_link: string;
}

declare interface TripCardProps {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  tags: string[];
  price: string;
}

declare interface StatsCard {
  headerTitle: string;
  total: number;
  lastMonthCount: number;
  currentMonthCount: number;
}

declare interface TrendResult {
  trend: "increment" | "decrement" | "no change";
  percentage: number;
}

declare interface DashboardStats {
  totalUsers: number;
  usersJoined: {
    currentMonth: number;
    lastMonth: number;
  };
  userRole: {
    total: number;
    currentMonth: number;
    lastMonth: number;
  };
  totalTrips: number;
  tripsCreated: {
    currentMonth: number;
    lastMonth: number;
  };
}

declare interface CreateTripResponse {
  id?: string;
}

declare interface DestinationProps {
  containerClass?: string;
  bigCard?: boolean;
  activityCount: number;
  rating: number;
  bgImage: string;
  title: string;
}

type GetAllTripsResponse = {
  allTrips: Models.Document[];
  total: number;
};

declare interface UsersItineraryCount {
  imageUrl: string;
  name: string;
  count: number;
}

declare interface TripsInterest {
  imageUrl: string;
  name: string;
  interest: string;
}

declare interface InfoPillProps {
  text: string;
  image: string;
}

declare interface TripFormData {
  country: string;
  travelStyle: string;
  interest: string;
  budget: string;
  duration: number;
  groupType: string;
}
```
</details>

<details>
<summary><code>app/lib/utils.ts</code></summary>

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("MMMM DD, YYYY");
};

export function parseMarkdownToJson(markdownText: string): unknown | null {
  const regex = /```json\n([\s\S]+?)\n```/;
  const match = markdownText.match(regex);

  if (match && match[1]) {
    try {
      return JSON.parse(match[1]);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  }
  console.error("No valid JSON found in markdown text.");
  return null;
}

export function parseTripData(jsonString: string): Trip | null {
  try {
    const data: Trip = JSON.parse(jsonString);

    return data;
  } catch (error) {
    console.error("Failed to parse trip data:", error);
    return null;
  }
}

export function getFirstWord(input: string = ""): string {
  return input.trim().split(/\s+/)[0] || "";
}

export const calculateTrendPercentage = (
  countOfThisMonth: number,
  countOfLastMonth: number
): TrendResult => {
  if (countOfLastMonth === 0) {
    return countOfThisMonth === 0
      ? { trend: "no change", percentage: 0 }
      : { trend: "increment", percentage: 100 };
  }

  const change = countOfThisMonth - countOfLastMonth;
  const percentage = Math.abs((change / countOfLastMonth) * 100);

  if (change > 0) {
    return { trend: "increment", percentage };
  } else if (change < 0) {
    return { trend: "decrement", percentage };
  } else {
    return { trend: "no change", percentage: 0 };
  }
};

export const formatKey = (key: keyof TripFormData) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

```
</details>

<details>
<summary><code>npm install syncfusion</code></summary>

```ts
npm install @syncfusion/ej2-base @syncfusion/ej2-react-buttons @syncfusion/ej2-react-charts @syncfusion/ej2-react-grids @syncfusion/ej2-react-dropdowns @syncfusion/ej2-react-maps @syncfusion/ej2-react-navigations @syncfusion/ej2-react-splitbuttons

```
</details>

<details>
<summary><code>dashboardStats (dummy)</code></summary>

```ts
  const dashboardStats = {
    totalUsers: 1237,
    usersJoined: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 118,
    tripsCreated: { currentMonth: 6, lastMonth: 2 },
    userRole: { total: 62, currentMonth: 63, lastMonth: 78 },
  };
```
</details>

<details>
<summary><code>allTrips (dummy)</code></summary>

```ts
  const allTrips = [{
      id: 1,
      name: "Tropical Rewind",
      imageUrls: ["/assets/images/sample1.jpg"],
      itinerary: [{ location: "Thailand" }],
      tags: ["Adventure", "Culture"],
      travelStyle: "Solo",
      estimatedPrice: "$1,000",
    },
    {
      id: 2,
      name: "French Reverie",
      imageUrls: ["/assets/images/sample2.jpg"],
      itinerary: [{ location: "Paris" }],
      tags: ["Relaxation", "Culinary"],
      travelStyle: "Family",
      estimatedPrice: "$2,000",
    },
    {
      id: 3,
      name: "Zen Break",
      imageUrls: ["/assets/images/sample3.jpg"],
      itinerary: [{ location: "Japan" }],
      tags: ["Shopping", "Luxury"],
      travelStyle: "Couple",
      estimatedPrice: "$3,000",
    },
    {
      id: 4,
      name: "Adventure in Westeros",
      imageUrls: ["/assets/images/sample4.jpg"],
      itinerary: [{ location: "Croatia" }],
      tags: ["Historical", "Culture"],
      travelStyle: "Friends",
      estimatedPrice: "$4,000",
    },
    ];
```
</details>

<details>
<summary><code>users (dummy)</code></summary>

```ts
const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      imageUrl: "/assets/images/david.webp",
      dateJoined: formatDate("2025-01-01"),
      itineraryCreated: 10,
      status: "user",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      imageUrl: "/assets/images/david.webp",
      dateJoined: formatDate("2025-01-02"),
      itineraryCreated: 4,
      status: "user",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john.smith@example.com",
      imageUrl: "/assets/images/david.webp",
      dateJoined: formatDate("2025-01-03"),
      itineraryCreated: 8,
      status: "admin",
    },
  ];
```
</details>

<details>
<summary><code>Create Trip Prompt</code></summary>

```ts
const prompt = `Generate a ${numberOfDays}-day travel itinerary for ${country} based on the following user information:
    Budget: '${budget}'
    Interests: '${interests}'
    TravelStyle: '${travelStyle}'
    GroupType: '${groupType}'
    Return the itinerary and lowest estimated price in a clean, non-markdown JSON format with the following structure:
    {
    "name": "A descriptive title for the trip",
    "description": "A brief description of the trip and its highlights not exceeding 100 words",
    "estimatedPrice": "Lowest average price for the trip in USD, e.g.$price",
    "duration": ${numberOfDays},
    "budget": "${budget}",
    "travelStyle": "${travelStyle}",
    "country": "${country}",
    "interests": ${interests},
    "groupType": "${groupType}",
    "bestTimeToVisit": [
      '🌸 Season (from month to month): reason to visit',
      '☀️ Season (from month to month): reason to visit',
      '🍁 Season (from month to month): reason to visit',
      '❄️ Season (from month to month): reason to visit'
    ],
    "weatherInfo": [
      '☀️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
      '🌦️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
      '🌧️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
      '❄️ Season: temperature range in Celsius (temperature range in Fahrenheit)'
    ],
    "location": {
      "city": "name of the city or region",
      "coordinates": [latitude, longitude],
      "openStreetMap": "link to open street map"
    },
    "itinerary": [
    {
      "day": 1,
      "location": "City/Region Name",
      "activities": [
        {"time": "Morning", "description": "🏰 Visit the local historic castle and enjoy a scenic walk"},
        {"time": "Afternoon", "description": "🖼️ Explore a famous art museum with a guided tour"},
        {"time": "Evening", "description": "🍷 Dine at a rooftop restaurant with local wine"}
      ]
    },
    ...
    ]
    }`;
```
</details>

<details>
<summary><code>app/appwrite/auth.ts</code></summary>

```ts
import { ID, OAuthProvider, Query } from "appwrite";
import { account, database, appwriteConfig } from "~/appwrite/client";
import { redirect } from "react-router";

export const getExistingUser = async (id: string) => {
  try {
    const { documents, total } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", id)]
    );
    return total > 0 ? documents[0] : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const storeUserData = async () => {
  try {
    const user = await account.get();
    if (!user) throw new Error("User not found");

    const { providerAccessToken } = (await account.getSession("current")) || {};
    const profilePicture = providerAccessToken
      ? await getGooglePicture(providerAccessToken)
      : null;

    const createdUser = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: user.$id,
        email: user.email,
        name: user.name,
        imageUrl: profilePicture,
        joinedAt: new Date().toISOString(),
      }
    );

    if (!createdUser.$id) redirect("/sign-in");
  } catch (error) {
    console.error("Error storing user data:", error);
  }
};

const getGooglePicture = async (accessToken: string) => {
  try {
    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personFields=photos",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (!response.ok) throw new Error("Failed to fetch Google profile picture");

    const { photos } = await response.json();
    return photos?.[0]?.url || null;
  } catch (error) {
    console.error("Error fetching Google picture:", error);
    return null;
  }
};

export const loginWithGoogle = async () => {
  try {
    account.createOAuth2Session(
      OAuthProvider.Google,
      `${window.location.origin}/`,
      `${window.location.origin}/404`
    );
  } catch (error) {
    console.error("Error during OAuth2 session creation:", error);
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export const getUser = async () => {
  try {
    const user = await account.get();
    if (!user) return redirect("/sign-in");

    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [
        Query.equal("accountId", user.$id),
        Query.select(["name", "email", "imageUrl", "joinedAt", "accountId"]),
      ]
    );

    return documents.length > 0 ? documents[0] : redirect("/sign-in");
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

```
</details>

<details>
<summary><code>app/routes/admin/create-trip.tsx</code></summary>

```tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  LayerDirective,
  LayersDirective,
  MapsComponent,
} from "@syncfusion/ej2-react-maps";

import { Header } from "~/components";
import { comboBoxItems, selectItems } from "~/constants";
import { world_map } from "~/constants/world_map";
import type { Route } from "./+types/create-trip";
import { account } from "~/appwrite/client";
import { cn, formatKey } from "~/lib/utils";

export function meta() {
  return [
    { title: "Create Trip" },
    { name: "description", content: "Create a Personalized Trip" },
  ];
}

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return data.map((country: any) => ({
    name: country.flag + country.name.common,
    coordinates: country.latlng,
    value: country.name.common,
    openStreetMap: country.maps?.openStreetMaps,
  })) as Country[];
}

const CreateTrip = ({ loaderData }: Route.ComponentProps) => {
  const navigate = useNavigate();
  const countries = loaderData as Country[];

  const [formData, setFormData] = useState<TripFormData>({
    country: countries[0]?.name || "",
    travelStyle: "",
    interest: "",
    budget: "",
    duration: 0,
    groupType: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (key: keyof TripFormData, value: string | number) =>
    setFormData({ ...formData, [key]: value });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (
      !formData.country ||
      !formData.travelStyle ||
      !formData.interest ||
      !formData.budget ||
      !formData.groupType
    ) {
      setError("Please provide input for all fields");
      setLoading(false);
      return;
    }
    if (formData.duration < 1 || formData.duration > 10) {
      setError("Duration must be between 1 and 10 days");
      setLoading(false);
      return;
    }

    const user = await account.get();
    if (!user.$id) {
      console.error("User not authenticated");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/create-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          country: formData.country,
          numberOfDays: formData.duration,
          travelStyle: formData.travelStyle,
          interests: formData.interest,
          budget: formData.budget,
          groupType: formData.groupType,
          userId: user.$id,
        }),
      });

      const result: CreateTripResponse = await response.json();

      if (result?.id) navigate(`/trips/${result.id}`);
      else console.error("Failed to generate itinerary");
    } catch (error) {
      console.error("Error generating itinerary:", error);
    } finally {
      setLoading(false);
    }
  };

  const mapData = [
    {
      country: formData.country,
      color: "#EA382E",
      coordinates:
        countries.find((c: Country) => c.name === formData.country)
          ?.coordinates || [],
    },
  ];

  const countryData = countries.map((country) => ({
    text: country.name,
    value: country.value,
  }));

  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
      <Header
        title="Add a New Trip"
        description="View and edit AI-generated travel plans"
      />

      <section className="mt-2.5 wrapper-md">
        <form className="trip-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country">Country</label>
            <ComboBoxComponent
              id="country"
              dataSource={countryData}
              fields={{ text: "text", value: "value" }}
              placeholder="Select a Country"
              change={(e: { value: string | undefined }) => {
                if (e.value) {
                  handleChange("country", e.value);
                }
              }}
              className="combo-box"
              allowFiltering={true}
              filtering={(e) => {
                const query = e.text.toLowerCase();
                e.updateData(
                  countries
                    .filter((country) =>
                      country.name.toLowerCase().includes(query)
                    )
                    .map((country) => ({
                      text: country.name,
                      value: country.value,
                    }))
                );
              }}
            />
          </div>

          <div>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              name="duration"
              onChange={(e) => handleChange("duration", Number(e.target.value))}
              placeholder="Enter number of days (e.g., 5, 12)"
              className="form-input placeholder:text-gray-100"
            />
          </div>

          {selectItems.map((key) => (
            <div key={key}>
              <label htmlFor={key}>{formatKey(key)}</label>

              <ComboBoxComponent
                id={key}
                dataSource={comboBoxItems[key].map((item) => ({
                  text: item,
                  value: item,
                }))}
                fields={{ text: "text", value: "value" }}
                placeholder={`Select ${key}`}
                change={(e: { value: string | undefined }) => {
                  if (e.value) {
                    handleChange(key, e.value);
                  }
                }}
                allowFiltering={true}
                filtering={(e) => {
                  const query = e.text.toLowerCase();
                  e.updateData(
                    comboBoxItems[key]
                      .filter((item) => item.toLowerCase().includes(query))
                      .map((item) => ({ text: item, value: item }))
                  );
                }}
                className="combo-box"
              />
            </div>
          ))}

          <div>
            <label htmlFor="location">Location on map</label>
            <MapsComponent>
              <LayersDirective>
                <LayerDirective
                  shapeData={world_map}
                  dataSource={mapData}
                  shapePropertyPath="name"
                  shapeDataPath="country"
                  shapeSettings={{ colorValuePath: "color", fill: "#E5E5E5" }}
                />
              </LayersDirective>
            </MapsComponent>
          </div>

          <div className="bg-gray-200 h-px w-full" />

          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}

          <footer className="px-6 w-full">
            <ButtonComponent
              type="submit"
              className="button-class !h-12 !w-full"
              disabled={loading}
            >
              <img
                src={`/assets/icons/${loading ? "loader.svg" : "magic-star.svg"}`}
                alt="magic star"
                className={cn("size-5", { "animate-spin": loading })}
              />
              <span className="p-16-semibold text-white">
                {loading ? "Generating..." : "Generate Itinerary"}
              </span>
            </ButtonComponent>
          </footer>
        </form>
      </section>
    </main>
  );
};

export default CreateTrip;
```
</details>

<details>
<summary><code>app/appwrite/dashboard.ts</code></summary>

```ts
import { parseTripData } from "~/lib/utils";
import { database, appwriteConfig } from "./client";

interface Document {
    [key: string]: any;
}

type FilterByDate = (
    items: Document[],
    key: string,
    start: string,
    end?: string
) => number;

export const getUsersAndTripsStats = async (): Promise<DashboardStats> => {
    const d = new Date();
    const startCurrent = new Date(d.getFullYear(), d.getMonth(), 1).toISOString();
    const startPrev = new Date(d.getFullYear(), d.getMonth() -1, 1).toISOString();
    const endPrev = new Date(d.getFullYear(), d.getMonth(), 0).toISOString();

    const [users, trips] = await Promise.all([
        database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId
        ),
        database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.tripCollectionId
        ),
    ])

    const filterByDate: FilterByDate = (items, key, start, end) => items.filter((item) => (
        item[key] >= start && (!end || item[key] <= end)
    )).length;

    const filterUsersByRole = (role: string) => {
        return users.documents.filter((u: Document) => u.status === role)
    }

    return {
        totalUsers: users.total,
        usersJoined: {
            currentMonth: filterByDate(
                users.documents,
                'joinedAt',
                startCurrent,
                undefined
            ),
            lastMonth: filterByDate(
                users.documents,
                'joinedAt',
                startPrev,
                endPrev
            )
        },
        userRole: {
            total: filterUsersByRole('user').length,
            currentMonth: filterByDate(
                filterUsersByRole('user'),
                'joinedAt',
                startCurrent,
                undefined
            ),
            lastMonth: filterByDate(
                filterUsersByRole('user'),
                'joinedAt',
                startPrev,
                endPrev
            )
        },
        totalTrips: trips.total,
        tripsCreated: {
            currentMonth: filterByDate(
                trips.documents,
                'createdAt',
                startCurrent,
                undefined
            ),
            lastMonth: filterByDate(
                filterUsersByRole('user'),
                'joinedAt',
                startPrev,
                endPrev
            )
        },
    }
}

export const getUserGrowthPerDay = async () => {
    const users = await database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId
    );

    const userGrowth = users.documents.reduce(
        (acc: { [key: string]: number }, user: Document) => {
            const date = new Date(user.joinedAt);
            const day = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            });
            acc[day] = (acc[day] || 0) + 1;
            return acc;
        },
        {}
    );

    return Object.entries(userGrowth).map(([day, count]) => ({
        count: Number(count),
        day,
    }));
};

export const getTripsCreatedPerDay = async () => {
    const trips = await database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.tripCollectionId
    );

    const tripsGrowth = trips.documents.reduce(
        (acc: { [key: string]: number }, trip: Document) => {
            const date = new Date(trip.createdAt);
            const day = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            });
            acc[day] = (acc[day] || 0) + 1;
            return acc;
        },
        {}
    );

    return Object.entries(tripsGrowth).map(([day, count]) => ({
        count: Number(count),
        day,
    }));
};

export const getTripsByTravelStyle = async () => {
    const trips = await database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.tripCollectionId
    );

    const travelStyleCounts = trips.documents.reduce(
        (acc: { [key: string]: number }, trip: Document) => {
            const tripDetail = parseTripData(trip.tripDetails);

            if (tripDetail && tripDetail.travelStyle) {
                const travelStyle = tripDetail.travelStyle;
                acc[travelStyle] = (acc[travelStyle] || 0) + 1;
            }
            return acc;
        },
        {}
    );

    return Object.entries(travelStyleCounts).map(([travelStyle, count]) => ({
        count: Number(count),
        travelStyle,
    }));
};
```
</details>

<details>
<summary><code>app/routes/admin/dashboard.tsx</code></summary>

```tsx
import {Header, StatsCard, TripCard} from "../../../components";
import {getAllUsers, getUser} from "~/appwrite/auth";
import type { Route } from './+types/dashboard';
import {getTripsByTravelStyle, getUserGrowthPerDay, getUsersAndTripsStats} from "~/appwrite/dashboard";
import {getAllTrips} from "~/appwrite/trips";
import {parseTripData} from "~/lib/utils";
import {
    Category,
    ChartComponent,
    ColumnSeries,
    DataLabel, SeriesCollectionDirective, SeriesDirective,
    SplineAreaSeries,
    Tooltip
} from "@syncfusion/ej2-react-charts";
import {ColumnDirective, ColumnsDirective, GridComponent, Inject} from "@syncfusion/ej2-react-grids";
import {tripXAxis, tripyAxis, userXAxis, useryAxis} from "~/constants";
import {redirect} from "react-router";

export const clientLoader = async () => {
    const [
        user,
        dashboardStats,
        trips,
        userGrowth,
        tripsByTravelStyle,
        allUsers,
    ] = await Promise.all([
        await getUser(),
        await getUsersAndTripsStats(),
        await getAllTrips(4, 0),
        await getUserGrowthPerDay(),
        await getTripsByTravelStyle(),
        await getAllUsers(4, 0),
    ])

    const allTrips = trips.allTrips.map(({ $id, tripDetails, imageUrls }) => ({
        id: $id,
        ...parseTripData(tripDetails),
        imageUrls: imageUrls ?? []
    }))

    const mappedUsers: UsersItineraryCount[] = allUsers.users.map((user) => ({
        imageUrl: user.imageUrl,
        name: user.name,
        count: user.itineraryCount ?? Math.floor(Math.random() * 10),
    }))

    return {
        user,
        dashboardStats,
        allTrips,
        userGrowth,
        tripsByTravelStyle,
        allUsers: mappedUsers
    }
}


const Dashboard = ({ loaderData }: Route.ComponentProps) => {
    const user = loaderData.user as User | null;
    const { dashboardStats, allTrips, userGrowth, tripsByTravelStyle, allUsers } = loaderData;

    const trips = allTrips.map((trip) => ({
        imageUrl: trip.imageUrls[0],
        name: trip.name,
        interest: trip.interests,
    }))

    const usersAndTrips = [
        {
            title: 'Latest user signups',
            dataSource: allUsers,
            field: 'count',
            headerText: 'Trips created'
        },
        {
            title: 'Trips based on interests',
            dataSource: trips,
            field: 'interest',
            headerText: 'Interests'
        }
    ]

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? 'Guest'} 👋`}
                description="Track activity, trends and popular destinations in real time"
            />

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Users"
                        total={dashboardStats.totalUsers}
                        currentMonthCount={dashboardStats.usersJoined.currentMonth}
                        lastMonthCount={dashboardStats.usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Trips"
                        total={dashboardStats.totalTrips}
                        currentMonthCount={dashboardStats.tripsCreated.currentMonth}
                        lastMonthCount={dashboardStats.tripsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Active Users"
                        total={dashboardStats.userRole.total}
                        currentMonthCount={dashboardStats.userRole.currentMonth}
                        lastMonthCount={dashboardStats.userRole.lastMonth}
                    />
                </div>
            </section>
            <section className="container">
                <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>

                <div className='trip-grid'>
                    {allTrips.map((trip) => (
                        <TripCard
                            key={trip.id}
                            id={trip.id.toString()}
                            name={trip.name!}
                            imageUrl={trip.imageUrls[0]}
                            location={trip.itinerary?.[0]?.location ?? ''}
                            tags={[trip.interests!, trip.travelStyle!]}
                            price={trip.estimatedPrice!}
                        />
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <ChartComponent
                    id="chart-1"
                    primaryXAxis={userXAxis}
                    primaryYAxis={useryAxis}
                    title="User Growth"
                    tooltip={{ enable: true}}
                >
                    <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip]} />

                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={userGrowth}
                            xName="day"
                            yName="count"
                            type="Column"
                            name="Column"
                            columnWidth={0.3}
                            cornerRadius={{topLeft: 10, topRight: 10}}
                        />

                        <SeriesDirective
                            dataSource={userGrowth}
                            xName="day"
                            yName="count"
                            type="SplineArea"
                            name="Wave"
                            fill="rgba(71, 132, 238, 0.3)"
                            border={{ width: 2, color: '#4784EE'}}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>

                <ChartComponent
                    id="chart-2"
                    primaryXAxis={tripXAxis}
                    primaryYAxis={tripyAxis}
                    title="Trip Trends"
                    tooltip={{ enable: true}}
                >
                    <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip]} />

                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={tripsByTravelStyle}
                            xName="travelStyle"
                            yName="count"
                            type="Column"
                            name="day"
                            columnWidth={0.3}
                            cornerRadius={{topLeft: 10, topRight: 10}}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </section>

            <section className="user-trip wrapper">
                {usersAndTrips.map(({ title, dataSource, field, headerText}, i) => (
                    <div key={i} className="flex flex-col gap-5">
                        <h3 className="p-20-semibold text-dark-100">{title}</h3>

                        <GridComponent dataSource={dataSource} gridLines="None">
                            <ColumnsDirective>
                                <ColumnDirective
                                    field="name"
                                    headerText="Name"
                                    width="200"
                                    textAlign="Left"
                                    template={(props: UserData) => (
                                        <div className="flex items-center gap-1.5 px-4">
                                            <img src={props.imageUrl} alt="user" className="rounded-full size-8 aspect-square" referrerPolicy="no-referrer" />
                                            <span>{props.name}</span>
                                        </div>
                                    )}
                                />

                                <ColumnDirective
                                field={field}
                                headerText={headerText}
                                width="150"
                                textAlign="Left"
                                />
                                </ColumnsDirective>
                        </GridComponent>
                    </div>
                ))}
            </section>
        </main>
    )
}
export default Dashboard

```
</details>



## <a name="links">🔗 Assets</a>

- Assets used in the project can be found [here](https://jsm.dev/tourvisto-kit)
  <a href="https://jsm.dev/tourvisto-kit" target="_blank">
  <img src="public/assets/images/readme-video-kit.jpg" alt="Video Kit Banner">
  </a>

## <a name="more">🚀 More</a>

**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with
detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsm.dev/tourvisto-readme" target="_blank">
  <img src="public/assets/images/readme-bottom.jpg" alt="Project Banner">
</a>
