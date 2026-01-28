import * as Icons from "lucide-react";

export interface TechnicalSpecialty {
    icon: string;
    title: string;
    category: "Frontend" | "Backend" | "Mobile" | "UI/UX" | "AI & Data" | "DevOps & System" | "Product & Support" | "Fullstack";
    desc: string;
    fullDesc: string;
    work: string[];
    techStack: string;
    target: string;
    budget: string;
}

export const technicalSpecialties: TechnicalSpecialty[] = [

    {
        icon: "Layout",
        title: "Frontend Developer",
        category: "Frontend",
        desc: "Membangun antarmuka web modern yang responsif dan cepat.",
        fullDesc: "Kami mengembangkan antarmuka web yang fokus pada performa, aksesibilitas, dan konsistensi UI untuk memastikan pengalaman pengguna terbaik di berbagai perangkat.",
        work: ["Responsive Website Development", "Custom Dashboard UI", "Component-based Frontend Architecture", "Performance & Accessibility Optimization"],
        techStack: "React, Next.js, TypeScript, Tailwind CSS",
        target: "Startup, UMKM, dan perusahaan yang butuh web modern dan scalable.",
        budget: "Mulai 5jt - 20jt+"
    },
    {
        icon: "Atom",
        title: "React Developer",
        category: "Frontend",
        desc: "Pengembangan SPA menggunakan React dengan state management optimal.",
        fullDesc: "Fokus pada pengembangan SPA berbasis React dengan struktur kode rapi, reusable component, dan state management yang efisien.",
        work: ["SPA Development", "State Management Setup", "Reusable UI Components", "Frontend Code Refactoring"],
        techStack: "React, Redux/Zustand, Vite, Tailwind CSS",
        target: "Produk digital yang butuh UI dinamis dan interaktif.",
        budget: "Mulai 6jt - 25jt+"
    },
    {
        icon: "Rocket",
        title: "Next.js Developer",
        category: "Frontend",
        desc: "Optimasi SEO, SSR, dan performa web berbasis Next.js.",
        fullDesc: "Mengembangkan website berbasis Next.js dengan SSR dan SSG untuk performa dan SEO maksimal.",
        work: ["SEO-friendly Website", "SSR & SSG Implementation", "Landing Page Optimization", "Content-driven Website"],
        techStack: "Next.js, TypeScript, Tailwind CSS, Vercel",
        target: "Bisnis yang mengandalkan SEO dan kecepatan website.",
        budget: "Mulai 7jt - 30jt+"
    },
    {
        icon: "Layers",
        title: "Vue Developer",
        category: "Frontend",
        desc: "Pengembangan UI reaktif dan scalable dengan Vue.js.",
        fullDesc: "Membangun antarmuka berbasis Vue dengan struktur modular dan reaktivitas tinggi untuk aplikasi skala kecil hingga besar.",
        work: ["Vue SPA Development", "Composable UI Architecture", "Admin Panel Development", "UI Performance Optimization"],
        techStack: "Vue.js, Pinia, Tailwind CSS",
        target: "Aplikasi internal dan dashboard berbasis web.",
        budget: "Mulai 6jt - 25jt+"
    },
    {
        icon: "Code",
        title: "Fullstack Developer",
        category: "Fullstack",
        desc: "Mengembangkan aplikasi web dari frontend hingga backend secara menyeluruh.",
        fullDesc: "Membangun sistem web end-to-end, mulai dari desain UI/UX, frontend interaktif, hingga backend yang scalable dan aman. Menjamin integrasi penuh antara server, database, dan client-side.",
        work: [
            "End-to-End Web Development",
            "Frontend & Backend Integration",
            "Database & API Management",
            "Performance & Security Optimization"
        ],
        techStack: "React, Node.js, Express, MongoDB/PostgreSQL, Tailwind CSS",
        target: "Startup, tim kecil, atau perusahaan yang butuh pengembang serba bisa.",
        budget: "Mulai 10jt - 40jt+"
    },


    // === Backend ===
    {
        icon: "Server",
        title: "Backend Developer",
        category: "Backend",
        desc: "Mengembangkan logika server dan sistem backend yang andal.",
        fullDesc: "Membangun backend yang aman, scalable, dan siap menangani kebutuhan bisnis jangka panjang.",
        work: ["Backend Architecture Design", "API Development", "Database Management", "System Optimization"],
        techStack: "Laravel, Node.js, PostgreSQL, Redis",
        target: "Aplikasi bisnis dan sistem internal.",
        budget: "Mulai 8jt - 35jt+"
    },
    {
        icon: "Plug",
        title: "API Engineer",
        category: "Backend",
        desc: "Merancang RESTful & GraphQL API standar industri.",
        fullDesc: "Merancang API yang rapi, terdokumentasi, dan mudah diintegrasikan dengan berbagai platform.",
        work: ["REST & GraphQL API", "API Documentation", "Third-party Integration", "Performance Optimization"],
        techStack: "Node.js, Express, Laravel, Swagger",
        target: "Produk dengan banyak integrasi sistem.",
        budget: "Mulai 7jt - 30jt+"
    },
    {
        icon: "Database",
        title: "Database Engineer",
        category: "Backend",
        desc: "Merancang dan mengoptimalkan database relasional & NoSQL.",
        fullDesc: "Menjamin data tersimpan dengan aman, cepat diakses, dan mudah di-maintain.",
        work: ["Database Design & Modeling", "Query Optimization", "Backup & Recovery Planning", "NoSQL Integration"],
        techStack: "PostgreSQL, MySQL, MongoDB, Redis",
        target: "Tim backend dan data-heavy application.",
        budget: "Mulai 7jt - 30jt+"
    },
    {
        icon: "Shield",
        title: "Authentication Specialist",
        category: "Backend",
        desc: "Keamanan sistem login, JWT, OAuth, dan access control.",
        fullDesc: "Membangun sistem autentikasi dan otorisasi yang aman untuk aplikasi web dan mobile.",
        work: ["JWT & OAuth Implementation", "Role-based Access Control", "SSO Integration", "Security Audit"],
        techStack: "Node.js, Laravel, Firebase Auth",
        target: "Aplikasi yang butuh keamanan akses tinggi.",
        budget: "Mulai 6jt - 28jt+"
    },

    // === Mobile ===
    {
        icon: "Smartphone",
        title: "Mobile App Developer",
        category: "Mobile",
        desc: "Pengembangan aplikasi mobile modern lintas platform.",
        fullDesc: "Membangun aplikasi mobile yang stabil, cepat, dan user-friendly untuk Android dan iOS.",
        work: ["Mobile App Development", "API Integration", "App Performance Optimization", "App Store Deployment"],
        techStack: "Flutter, React Native, Firebase",
        target: "Startup dan bisnis berbasis aplikasi mobile.",
        budget: "Mulai 10jt - 50jt+"
    },
    {
        icon: "Android",
        title: "Android Developer",
        category: "Mobile",
        desc: "Pengembangan aplikasi Android native dan modern.",
        fullDesc: "Membuat aplikasi Android native dengan performa optimal dan desain material.",
        work: ["Android Studio Setup", "Material UI Implementation", "Performance Optimization", "Play Store Deployment"],
        techStack: "Kotlin, Java, Android Studio",
        target: "Aplikasi Android native perusahaan dan startup.",
        budget: "Mulai 8jt - 40jt+"
    },
    {
        icon: "Apple",
        title: "iOS Developer",
        category: "Mobile",
        desc: "Membangun aplikasi iOS dengan performa optimal.",
        fullDesc: "Mengembangkan aplikasi iOS dengan desain Apple Human Interface Guidelines dan performa tinggi.",
        work: ["Swift Development", "UIKit/SwiftUI Implementation", "App Store Deployment", "Performance Monitoring"],
        techStack: "Swift, Xcode, SwiftUI",
        target: "Startup dan perusahaan yang menargetkan pengguna iOS.",
        budget: "Mulai 8jt - 40jt+"
    },
    {
        icon: "Framer",
        title: "Flutter Developer",
        category: "Mobile",
        desc: "Aplikasi cross-platform cepat dengan Flutter.",
        fullDesc: "Membangun aplikasi lintas platform dengan Flutter, performa tinggi dan maintainable.",
        work: ["Flutter Setup", "Cross-platform Development", "State Management", "Firebase Integration"],
        techStack: "Flutter, Dart, Firebase",
        target: "Startup yang ingin aplikasi lintas platform cepat.",
        budget: "Mulai 9jt - 45jt+"
    },

    // === UI/UX ===
    {
        icon: "PenTool",
        title: "UI/UX Designer",
        category: "UI/UX",
        desc: "Merancang pengalaman pengguna yang intuitif dan menarik.",
        fullDesc: "Menggabungkan riset, desain visual, dan kebutuhan bisnis menjadi pengalaman digital yang efektif.",
        work: ["User Research", "Wireframe & Prototyping", "UI Design", "Usability Testing"],
        techStack: "Figma, FigJam, Design System",
        target: "Produk digital yang fokus pada user experience.",
        budget: "Mulai 5jt - 25jt+"
    },
    {
        icon: "Layers",
        title: "UX Researcher",
        category: "UI/UX",
        desc: "Riset perilaku pengguna untuk pengalaman terbaik.",
        fullDesc: "Menganalisis interaksi pengguna untuk mengoptimalkan alur dan interface produk.",
        work: ["User Interviews", "Persona Creation", "Journey Mapping", "Usability Testing"],
        techStack: "Figma, Notion, Miro",
        target: "Tim produk dan desain UX.",
        budget: "Mulai 5jt - 18jt+"
    },
    {
        icon: "Type",
        title: "UX Writer",
        category: "UI/UX",
        desc: "Menyusun microcopy yang jelas dan user-friendly.",
        fullDesc: "Membuat teks antarmuka yang mudah dipahami, efektif, dan sesuai brand voice.",
        work: ["Microcopy Writing", "Error & Help Texts", "UI Content Strategy", "Consistency Check"],
        techStack: "Notion, Figma, Contentful",
        target: "Produk digital yang butuh komunikasi UI efektif.",
        budget: "Mulai 4jt - 15jt+"
    },
    {
        icon: "Monitor",
        title: "Interaction Designer",
        category: "UI/UX",
        desc: "Mendesain interaksi yang intuitif dan engaging.",
        fullDesc: "Menciptakan flow interaktif dan micro-interactions yang meningkatkan user engagement.",
        work: ["Animation & Micro-interactions", "Prototype Interaction", "UI Feedback Loops", "User Testing"],
        techStack: "Figma, Principle, After Effects",
        target: "Produk digital yang ingin interaksi halus dan engaging.",
        budget: "Mulai 5jt - 22jt+"
    },
    {
        icon: "Grid",
        title: "Design System Engineer",
        category: "UI/UX",
        desc: "Membangun sistem desain konsisten dan scalable.",
        fullDesc: "Menjaga konsistensi UI & UX melalui design tokens, component library, dan guideline.",
        work: ["Component Library Setup", "Design Tokens", "UI Audit", "Documentation"],
        techStack: "Storybook, Figma, React/Vue",
        target: "Tim frontend dan desain untuk maintainable UI.",
        budget: "Mulai 5jt - 20jt+"
    },

    {
        icon: "Cpu",
        title: "Machine Learning Engineer",
        category: "AI & Data",
        desc: "Membangun dan mengintegrasikan model machine learning.",
        fullDesc: "Merancang, melatih, dan mengoptimalkan model machine learning untuk analisis data, prediksi, dan automation di berbagai platform.",
        work: [
            "Data Preprocessing & Feature Engineering",
            "Model Training & Evaluation",
            "Hyperparameter Tuning",
            "Integration with Production Systems"
        ],
        techStack: "Python, TensorFlow, PyTorch, scikit-learn, Pandas",
        target: "Perusahaan yang membutuhkan prediksi dan otomatisasi berbasis data.",
        budget: "Mulai 12jt - 60jt+"
    },
    {
        icon: "Brain",
        title: "AI Engineer",
        category: "AI & Data",
        desc: "Implementasi solusi kecerdasan buatan end-to-end.",
        fullDesc: "Mendesain dan mengembangkan sistem AI, termasuk NLP, computer vision, dan rekomendasi cerdas yang dapat diintegrasikan dengan produk digital.",
        work: [
            "AI Solution Architecture",
            "NLP & CV Model Implementation",
            "Recommendation System Development",
            "AI API & Service Integration"
        ],
        techStack: "Python, PyTorch, OpenCV, Hugging Face Transformers",
        target: "Produk digital yang membutuhkan fitur cerdas berbasis AI.",
        budget: "Mulai 15jt - 70jt+"
    },
    {
        icon: "BarChart",
        title: "Data Analyst",
        category: "AI & Data",
        desc: "Mengolah data menjadi insight yang actionable.",
        fullDesc: "Menganalisis dataset, membuat visualisasi, dan menyusun laporan data untuk mendukung pengambilan keputusan bisnis yang tepat.",
        work: [
            "Data Cleaning & Transformation",
            "Data Visualization & Dashboarding",
            "KPI & Metric Analysis",
            "Reporting & Business Insights"
        ],
        techStack: "Python, SQL, Tableau, Power BI, Excel",
        target: "Bisnis yang ingin memanfaatkan data untuk pengambilan keputusan.",
        budget: "Mulai 8jt - 35jt+"
    },
    {
        icon: "Database",
        title: "Data Scientist",
        category: "AI & Data",
        desc: "Analisis data lanjutan dan predictive modeling.",
        fullDesc: "Mengembangkan model prediktif dan analisis statistik lanjutan untuk mendukung strategi bisnis berbasis data.",
        work: [
            "Predictive Modeling & Forecasting",
            "Statistical Analysis",
            "Machine Learning Pipeline",
            "Data-driven Decision Support"
        ],
        techStack: "Python, R, TensorFlow, PyTorch, SQL",
        target: "Perusahaan yang ingin mengoptimalkan strategi bisnis berbasis data.",
        budget: "Mulai 12jt - 55jt+"
    },
    {
        icon: "Eye",
        title: "Computer Vision Engineer",
        category: "AI & Data",
        desc: "Solusi visual recognition dan image processing.",
        fullDesc: "Membangun sistem computer vision untuk object detection, image classification, dan video analysis dengan performa tinggi.",
        work: [
            "Object Detection & Recognition",
            "Image & Video Processing",
            "Model Optimization & Deployment",
            "Integration with Web/Mobile Applications"
        ],
        techStack: "Python, OpenCV, PyTorch, TensorFlow, YOLO",
        target: "Produk yang membutuhkan analisis visual otomatis.",
        budget: "Mulai 10jt - 50jt+"
    },
    {
        icon: "MessageSquare",
        title: "NLP Engineer",
        category: "AI & Data",
        desc: "Pengolahan bahasa alami untuk sistem cerdas.",
        fullDesc: "Mengembangkan sistem NLP untuk chatbots, sentiment analysis, dan text-based automation dengan performa tinggi dan akurat.",
        work: [
            "Text Preprocessing & Tokenization",
            "Sentiment Analysis & Classification",
            "Chatbot & Conversational AI",
            "Integration with Applications"
        ],
        techStack: "Python, Hugging Face Transformers, spaCy, NLTK, TensorFlow",
        target: "Produk digital yang membutuhkan pemahaman bahasa alami.",
        budget: "Mulai 10jt - 45jt+"
    },

];
