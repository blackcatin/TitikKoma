import arkanaImg from '../../assets/mockup/Arkana.png';
import recomImg from '../../assets/mockup/recom.jpg';
import ecomImg from '../../assets/mockup/e-commerce.jpg';
import bankImg from '../../assets/mockup/banking.jpg';
import custImg from '../../assets/mockup/customer.jpg';
import eduImg from '../../assets/mockup/edu.jpg';
import dashboardImg from '../../assets/mockup/dashboard.jpg';
import faceImg from '../../assets/mockup/face.jpg';
import FitImg from '../../assets/mockup/Fitlife.png';
import FoodImg from '../../assets/mockup/Food.png';
import LMSImg from '../../assets/mockup/LMS.png';
import luminaImg from '../../assets/mockup/lumina.png';
import nusaImg from '../../assets/mockup/nusa.png';
import redesignImg from '../../assets/mockup/redesign.jpg';
import SalesImg from '../../assets/mockup/sales.jpg';
import smartimg from '../../assets/mockup/smart.png';
import zenithImg from '../../assets/mockup/Zenith.png';

export const portfolioData = [
  /* ================= WEB ================= */
  {
    id: 1,
    title: "Lumina E-Commerce",
    category: "web",
    description: "Transformasi retail tradisional menjadi ekosistem digital berperforma tinggi.",
    mainMockup: luminaImg,
    techStack: ["React", "Next.js", "Tailwind"],
    themeColor: "#ba3c3d",
    userComments: [
      {
        id: 101,
        userName: "Sarah Jenkins",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        text: "Flow belanja-nya kerasa premium.",
        likes: 24,
        position: "top-[12%] right-[6%]",
        delay: 0.4
      },
      {
        id: 102,
        userName: "Aris Setiawan",
        avatar: "https://i.pravatar.cc/150?u=aris",
        text: "UX checkout-nya enak banget.",
        likes: 19,
        position: "bottom-[18%] left-[-4%]",
        delay: 0.7
      }
    ]
  },
  {
    id: 2,
    title: "EduTrack LMS",
    category: "web",
    description: "Platform pembelajaran online untuk institusi pendidikan.",
    mainMockup: LMSImg,
    techStack: ["Next.js", "Supabase"],
    themeColor: "#6366f1",
    userComments: [
      {
        id: 301,
        userName: "Akademi Nusantara",
        avatar: "https://i.pravatar.cc/150?u=edu",
        text: "Manajemen kelas jadi simpel.",
        likes: 27,
        position: "bottom-[20%] right-[4%]",
        delay: 0.6
      }
    ]
  },
  {
    id: 3,
    title: "Nusa Travel Landing",
    category: "web",
    description: "Landing page campaign untuk peningkatan booking wisata.",
    mainMockup: nusaImg,
    techStack: ["Next.js", "GSAP"],
    themeColor: "#0ea5e9",
    userComments: [
      {
        id: 401,
        userName: "Nusa Travel Team",
        avatar: "https://i.pravatar.cc/150?u=travel",
        text: "Conversion naik signifikan.",
        likes: 23,
        position: "top-[8%] right-[10%]",
        delay: 0.5
      }
    ]
  },
  {
    id: 4,
    title: "Arkana Company Profile",
    category: "web",
    description: "Website corporate modern untuk meningkatkan kredibilitas perusahaan.",
    mainMockup: arkanaImg,
    techStack: ["React", "Vite", "Tailwind"],
    themeColor: "#1f2937",
    userComments: [
      {
        id: 201,
        userName: "Bima Pratama",
        avatar: "https://i.pravatar.cc/150?u=bima",
        text: "Brand image kami naik level.",
        likes: 18,
        position: "top-[15%] left-[5%]",
        delay: 0.5
      }
    ]
  },
  

  /* ================= MOBILE ================= */
  {
    id: 5,
    title: "Zenith Banking",
    category: "mobile",
    description: "Aplikasi perbankan masa depan dengan keamanan tinggi.",
    mainMockup: zenithImg,
    techStack: ["React Native", "Firebase"],
    themeColor: "#d49d00",
    userComments: [
      {
        id: 501,
        userName: "Fintech Partner",
        avatar: "https://i.pravatar.cc/150?u=bank",
        text: "Terasa aman & profesional.",
        likes: 19,
        position: "top-[10%] right-[8%]",
        delay: 0.4
      }
    ]
  },
  {
    id: 6,
    title: "FitLife App",
    category: "mobile",
    description: "Aplikasi tracking kebugaran dan gaya hidup sehat.",
    mainMockup: FitImg,
    techStack: ["React Native", "Expo"],
    themeColor: "#16a34a",
    userComments: [
      {
        id: 601,
        userName: "Personal Trainer",
        avatar: "https://i.pravatar.cc/150?u=fit",
        text: "Client lebih konsisten olahraga.",
        likes: 22,
        position: "bottom-[15%] left-[4%]",
        delay: 0.6
      }
    ]
  },
  {
    id: 7,
    title: "FoodieGo",
    category: "mobile",
    description: "Aplikasi food delivery UMKM lokal.",
    mainMockup: FoodImg,
    techStack: ["React Native", "Node.js"],
    themeColor: "#dc2626",
    userComments: [
      {
        id: 801,
        userName: "UMKM Partner",
        avatar: "https://i.pravatar.cc/150?u=umkm",
        text: "Order harian meningkat.",
        likes: 25,
        position: "bottom-[10%] right-[5%]",
        delay: 0.6
      }
    ]
  },
  {
    id: 8,
    title: "SmartClinic",
    category: "mobile",
    description: "Aplikasi manajemen antrian & rekam medis klinik.",
    mainMockup: smartimg,
    techStack: ["Flutter", "Firebase"],
    themeColor: "#0f766e",
    userComments: [
      {
        id: 701,
        userName: "Clinic Admin",
        avatar: "https://i.pravatar.cc/150?u=clinic",
        text: "Antrian jauh lebih tertib.",
        likes: 17,
        position: "top-[14%] left-[6%]",
        delay: 0.5
      }
    ]
  },
  

  /* ================= UI/UX ================= */
  {
    id: 9,
    title: "E-Commerce Redesign",
    category: "ui/ux",
    description: "Redesign UI untuk meningkatkan conversion rate.",
    mainMockup: redesignImg,
    techStack: ["Figma", "Design System"],
    themeColor: "#f97316",
    userComments: [
      {
        id: 901,
        userName: "Retail Client",
        avatar: "https://i.pravatar.cc/150?u=retail",
        text: "Lebih clean & efisien.",
        likes: 26,
        position: "top-[14%] left-[6%]",
        delay: 0.5
      }
    ]
  },
  {
    id: 10,
    title: "Banking App UX",
    category: "ui/ux",
    description: "Desain UX aplikasi keuangan berbasis riset pengguna.",
    mainMockup: bankImg,
    techStack: ["Figma", "UX Research"],
    themeColor: "#2563eb",
    userComments: [
      {
        id: 1001,
        userName: "UX Lead",
        avatar: "https://i.pravatar.cc/150?u=ux",
        text: "Flow-nya terasa natural.",
        likes: 20,
        position: "bottom-[12%] right-[4%]",
        delay: 0.6
      }
    ]
  },
  {
    id: 11,
    title: "Edu Platform UI",
    category: "ui/ux",
    description: "Desain sistem UI platform pembelajaran digital.",
    mainMockup: eduImg,
    techStack: ["Figma", "Design Token"],
    themeColor: "#7c3aed",
    userComments: [
      {
        id: 1101,
        userName: "Product Owner",
        avatar: "https://i.pravatar.cc/150?u=po",
        text: "Lebih ramah untuk user baru.",
        likes: 18,
        position: "top-[10%] right-[6%]",
        delay: 0.5
      }
    ]
  },
  {
    id: 12,
    title: "Dashboard Analytics UI",
    category: "ui/ux",
    description: "Desain dashboard data yang fokus pada clarity & insight.",
    mainMockup: dashboardImg,
    techStack: ["Figma", "UX Flow"],
    themeColor: "#0f172a",
    userComments: [
      {
        id: 1201,
        userName: "Data Manager",
        avatar: "https://i.pravatar.cc/150?u=dataux",
        text: "Data jadi mudah dibaca.",
        likes: 21,
        position: "bottom-[14%] left-[5%]",
        delay: 0.6
      }
    ]
  },

  /* ================= DATA & AI ================= */
  {
    id: 13,
    title: "Sales Forecast Engine",
    category: "data&AI",
    description: "Model prediksi penjualan berbasis data historis.",
    mainMockup: SalesImg,
    techStack: ["Python", "Scikit-Learn"],
    themeColor: "#2563eb",
    userComments: [
      {
        id: 1301,
        userName: "Business Analyst",
        avatar: "https://i.pravatar.cc/150?u=data",
        text: "Prediksi-nya sangat akurat.",
        likes: 34,
        position: "top-[10%] right-[5%]",
        delay: 0.5
      }
    ]
  },
  {
    id: 14,
    title: "Customer Churn AI",
    category: "data&AI",
    description: "Model AI untuk prediksi churn pelanggan.",
    mainMockup: custImg,
    techStack: ["Python", "XGBoost"],
    themeColor: "#7c3aed",
    userComments: [
      {
        id: 1501,
        userName: "Marketing Lead",
        avatar: "https://i.pravatar.cc/150?u=ml",
        text: "Retensi customer meningkat.",
        likes: 31,
        position: "top-[12%] left-[6%]",
        delay: 0.5
      }
    ]
  },
   {
    id: 15,
    title: "Smart Recom Engine",
    category: "data&AI",
    description: "Sistem rekomendasi produk berbasis perilaku user.",
    mainMockup: recomImg,
    techStack: ["Python", "TensorFlow"],
    themeColor: "#16a34a",
    userComments: [
      {
        id: 1601,
        userName: "E-Commerce Lead",
        avatar: "https://i.pravatar.cc/150?u=reco",
        text: "CTR produk naik drastis.",
        likes: 36,
        position: "bottom-[10%] right-[5%]",
        delay: 0.6
      }
    ]
  },
   {
    id: 16,
    title: "Face Attendance System",
    category: "data&AI",
    description: "Sistem absensi berbasis pengenalan wajah.",
    mainMockup: faceImg,
    techStack: ["OpenCV", "TensorFlow"],
    themeColor: "#0ea5e9",
    userComments: [
      {
        id: 1401,
        userName: "HR Department",
        avatar: "https://i.pravatar.cc/150?u=hr",
        text: "Absensi jadi otomatis.",
        likes: 29,
        position: "bottom-[18%] left-[3%]",
        delay: 0.6
      }
    ]
  },
 
];
