import { siteImages } from "../utils/siteImages";
import image2 from "../assets/images/projects/home1.png";
import image4 from "../assets/images/projects/home3.png";
import image5 from "../assets/images/projects/home4.png";
import image3 from "../assets/images/projects/home5.png";
import carimg2 from "../assets/images/projects/car2.png";
import carimg from "../assets/images/projects/car.png";
import carimg1 from "../assets/images/projects/car1.png";


export const projectData = [
  {
    id: "luxury-resort",
    category: "Hospitality Platform",
    title: "Luxury Resort Website",
    year: "2026",
    shortDescription:
      "A full-stack luxury resort booking platform with premium frontend experience and backend-powered enquiry management.",
    description:
      "A full-stack resort booking and management website built to showcase Luxury Resort accommodations, experiences, and a smooth guest enquiry journey.",
    longDescription:
      "Luxury Resort Website is a modern full-stack hospitality platform designed to present luxury rooms, resort experiences, and enquiry-driven booking flow in a polished and conversion-focused way. The frontend is built with React, Vite, React Router, and Tailwind CSS to deliver a responsive, elegant, and mobile-first user experience. The backend is powered by Express.js, MongoDB, Mongoose, Nodemailer, CORS, and dotenv to handle enquiry submissions, persistent data storage, admin-ready APIs, and automated email notifications. The platform includes room showcase, room details, gallery, testimonials, experiences, contact form, and backend enquiry handling with health-check and structured API flow.",
    result:
      "Delivered a premium digital guest experience with responsive UI, room showcase, detailed enquiry workflow, backend API structure, database integration, and automated email communication.",
    image: image4,
    banner: image4,
    gallery: [
      image4,
      image3,
      image5,
    ],
    tech: [
      "React 18",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Nodemailer",
      "CORS",
    ],
    highlights: [
      "Responsive mobile-first frontend layout",
      "Room showcase and detailed room pages",
      "Experiences, gallery, testimonials, and contact form",
      "REST API based enquiry submission flow",
      "MongoDB storage with Mongoose schema",
      "Email notification system using Nodemailer",
      "Health check endpoint and environment-based configuration",
      "Modern full-stack architecture for hospitality business needs",
    ],
    features: [
      {
        title: "Luxury Frontend Experience",
        text: "Built with a premium visual layout focused on elegant room presentation, smooth navigation, gallery sections, and engaging guest-facing content.",
      },
      {
        title: "Detailed Room & Resort Showcase",
        text: "The platform highlights room specifications, amenities, experiences, and image-rich presentation to improve guest understanding and interest.",
      },
      {
        title: "Enquiry Management Workflow",
        text: "Guests can submit booking enquiries with room type, contact details, dates, guest count, and additional requests through a structured contact flow.",
      },
      {
        title: "Backend API & Database Integration",
        text: "Express.js backend with MongoDB stores enquiry data securely and supports scalable management for future admin use cases.",
      },
      {
        title: "Automated Email Communication",
        text: "Nodemailer integration supports automated enquiry notification and communication workflow for better operational handling.",
      },
      {
        title: "Scalable Project Structure",
        text: "The application is organized with reusable components, clean page separation, utility helpers, route-based architecture, and backend modularity.",
      },
    ],
    process: [
      "Planned the hospitality-focused user journey and luxury UI direction",
      "Designed frontend structure for rooms, experiences, gallery, testimonials, and enquiry interaction",
      "Built modular React pages and reusable components for scalable presentation",
      "Developed Express backend routes and MongoDB enquiry handling",
      "Integrated email workflow, CORS support, validation, and environment-based configuration",
      "Tested responsiveness, enquiry flow, and deployment readiness",
    ],
    metrics: [
      { label: "Architecture", value: "Full Stack" },
      { label: "Industry", value: "Hospitality" },
      { label: "Backend", value: "API + DB + Email" },
      { label: "UX Goal", value: "Guest Conversion" },
    ],
    liveLink: "https://resort.webixinfotech.in",
  },

  // CAR RENTAL PLATFORM
  {
    id: "car-rental-platform",
    category: "Automotive Platform",
    title: "Car Management System",
    year: "2026",
    shortDescription:
      "A premium car rental website built to showcase luxury vehicles, real-time availability, and seamless reservation flow.",
    description:
      "A modern automotive rental platform designed to display high-end cars, support client bookings, and simplify the reservation experience.",
    longDescription:
      "Car Management System delivers a polished digital showroom for premium vehicles, built with React, Vite, React Router, and Tailwind CSS. The platform presents curated car collections, detail-rich vehicle pages, search filter options, and a smooth booking inquiry workflow. It emphasizes responsive browsing, strong visual storytelling, and conversion-focused reservation actions for automotive customers.",
    result:
      "Created a premium automotive booking experience with a clear vehicle catalogue, robust reservation flow, and a polished responsive interface.",
      // image
    image: carimg,
    banner: carimg,
    gallery: [carimg, carimg2, carimg1],
    tech: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
    ],
    highlights: [
      "High-end vehicle showcase with elegant visual presentation",
      "Reservation workflow for booking enquiries and availability planning",
      "Responsive, mobile-first car browsing experience",
      "Clean automotive page layout with vehicle details and features",
    ],
    features: [
      {
        title: "Vehicle Showcase",
        text: "Displays luxury cars with rich imagery, feature details, and clear rental options.",
      },
      {
        title: "Booking Inquiry Flow",
        text: "Supports customer booking requests through a structured reservation form.",
      },
      {
        title: "Filterable Fleet",
        text: "Provides an intuitive way to browse cars by category, price, and features.",
      },
      {
        title: "Premium Automotive UI",
        text: "Designed with a sophisticated layout that reflects a luxury rental brand.",
      },
    ],
    process: [
      "Defined the luxury automotive user experience",
      "Built responsive car catalogue and detail pages",
      "Created booking inquiry and availability components",
      "Tested across devices and polished visual presentation",
    ],
    metrics: [
      { label: "Type", value: "Automotive" },
      { label: "Focus", value: "Bookings" },
      { label: "Stack", value: "Web Platform" },
      { label: "Goal", value: "Reservations" },
    ],
    liveLink: "https://car-management-demo.netlify.app/",
  },
  {
    id: "ecommerce-experience",
    category: "Web Platform",
    title: "E-commerce Experience",
    year: "2025",
    shortDescription:
      "A modern shopping platform focused on usability, filtering, secure checkout, and smooth product discovery.",
    description:
      "A clean and scalable e-commerce platform designed to improve customer browsing and product discovery while supporting easy store management.",
    longDescription:
      "This project focuses on modern UI presentation, strong user flow, fast browsing, secure checkout journey, and dashboard-based management. The architecture is designed to support scalability and high usability for both customers and business operators.",
    result: "Boosted usability and improved product discovery flow.",
    image: siteImages.project3,
    banner: siteImages.project1,
    gallery: [siteImages.project1, siteImages.project2, siteImages.project3],
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    highlights: [
      "Modern storefront interface",
      "Improved product discovery",
      "Secure checkout journey",
      "Management-friendly structure",
    ],
    features: [
      {
        title: "Product Browsing",
        text: "Structured category and filtering system designed for quick and easy discovery.",
      },
      {
        title: "Checkout Experience",
        text: "Simple and secure purchase flow that reduces friction for users.",
      },
      {
        title: "Scalable UI",
        text: "Reusable components and responsive layout help the platform grow with business needs.",
      },
      {
        title: "Business Utility",
        text: "Built to support smoother management and better customer interaction.",
      },
    ],
    process: [
      "Requirement planning",
      "UX and structure design",
      "Frontend and backend flow setup",
      "Testing and optimization",
      "Deployment preparation",
    ],
    metrics: [
      { label: "Type", value: "Commerce" },
      { label: "Focus", value: "Usability" },
      { label: "Stack", value: "Web Platform" },
      { label: "Goal", value: "Conversions" },
    ],
  },
  {
    id: "business-portfolio",
    category: "Corporate Website",
    title: "Business Portfolio",
    year: "2026",
    shortDescription:
      "A premium corporate portfolio website built to establish brand credibility and improve service presentation.",
    description:
      "A modern business website designed to showcase services, trust, positioning, and strong company identity.",
    longDescription:
      "This project focuses on presenting a business brand in a premium and conversion-focused way. It combines clean layout, credibility-building sections, strong typography, and modern interface patterns that make the brand look professional and trustworthy.",
    result: "Stronger digital presence with conversion-focused structure.",
    image: siteImages.project2,
    banner: siteImages.project2,
    gallery: [siteImages.project2, siteImages.project1, siteImages.project4],
    tech: ["React", "Tailwind CSS", "Vercel"],
    highlights: [
      "Corporate brand presentation",
      "Service-focused structure",
      "Responsive premium interface",
      "Better trust building",
    ],
    features: [
      {
        title: "Brand Identity",
        text: "Modern layout and visual hierarchy designed to reflect professionalism.",
      },
      {
        title: "Service Presentation",
        text: "Clear sections help users understand the company’s capabilities quickly.",
      },
      {
        title: "Responsive Experience",
        text: "Optimized for mobile, tablet, and desktop layouts.",
      },
      {
        title: "Lead Generation",
        text: "CTA and section planning support stronger enquiry conversion.",
      },
    ],
    process: [
      "Brand analysis",
      "UI planning",
      "Section structuring",
      "Responsive implementation",
      "Final polish",
    ],
    metrics: [
      { label: "Type", value: "Corporate" },
      { label: "Focus", value: "Credibility" },
      { label: "UI", value: "Premium" },
      { label: "Goal", value: "Lead Generation" },
    ],
  },
  {
    id: "booking-solution",
    category: "Mobile App",
    title: "Booking Solution",
    year: "2025",
    shortDescription:
      "A cross-platform booking app with reminders, account access, and a streamlined user journey.",
    description:
      "A user-friendly mobile booking solution built to simplify appointment and service reservations across devices.",
    longDescription:
      "This project offers a simplified user booking journey with mobile-first usability, reminders, account access, and intuitive flow handling. The product is designed to make service interaction easier and more accessible for customers.",
    result: "Simplified booking process and improved customer convenience.",
    image: siteImages.project5,
    banner: siteImages.project3,
    gallery: [siteImages.project3, siteImages.project2, siteImages.project1],
    tech: ["React Native", "Firebase", "REST API"],
    highlights: [
      "Cross-platform mobile experience",
      "Appointment-friendly flow",
      "Reminder support",
      "Convenient customer journey",
    ],
    features: [
      {
        title: "Easy Booking Flow",
        text: "Reduces friction and makes appointment booking faster for users.",
      },
      {
        title: "Reminder Support",
        text: "Improves booking attendance and user convenience with notifications.",
      },
      {
        title: "Account Access",
        text: "Users can manage booking details and access their journey in one place.",
      },
      {
        title: "Mobile-first UX",
        text: "Built for modern service interactions and on-the-go accessibility.",
      },
    ],
    process: [
      "User flow planning",
      "Mobile screen design",
      "Booking logic integration",
      "Testing and refinement",
      "Launch setup",
    ],
    metrics: [
      { label: "Platform", value: "Mobile" },
      { label: "Flow", value: "Booking" },
      { label: "UX", value: "Smooth" },
      { label: "Goal", value: "Convenience" },
    ],
  },
  {
    id: "analytics-control-panel",
    category: "Admin Dashboard",
    title: "Analytics Control Panel",
    year: "2026",
    shortDescription:
      "A data-driven control panel for analytics, monitoring, operations, and team visibility.",
    description:
      "An advanced reporting dashboard that helps businesses track performance, operations, and decision-making metrics from one place.",
    longDescription:
      "This dashboard project is designed for operational visibility and business control. It combines clean UI, analytics-focused presentation, reporting structure, and centralized monitoring so teams can act faster with better data awareness.",
    result: "Better data visibility and faster business decisions.",
    image: siteImages.project1,
    banner: siteImages.project1,
    gallery: [siteImages.project1, siteImages.project4, siteImages.project2],
    tech: ["React", "Charts", "Tailwind CSS", "REST API"],
    highlights: [
      "Operational dashboard layout",
      "Analytics widgets and reports",
      "Centralized monitoring",
      "Decision support visibility",
    ],
    features: [
      {
        title: "Centralized Insights",
        text: "Important analytics and operations are shown in one clean dashboard layout.",
      },
      {
        title: "Reporting Clarity",
        text: "Charts and metric blocks improve understanding of trends and performance.",
      },
      {
        title: "Operational Monitoring",
        text: "Useful for tracking activity, productivity, and business outcomes.",
      },
      {
        title: "Modern Dashboard UI",
        text: "Built for scalable control panel use cases with strong visual structure.",
      },
    ],
    process: [
      "Data requirement planning",
      "Dashboard structure design",
      "Chart and widget development",
      "API integration",
      "Optimization and polish",
    ],
    metrics: [
      { label: "Type", value: "Dashboard" },
      { label: "Focus", value: "Analytics" },
      { label: "Use Case", value: "Operations" },
      { label: "Goal", value: "Insights" },
    ],
  },
];