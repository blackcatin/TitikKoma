export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    category: 'Enterprise' | 'Startup' | 'SME' | 'Design' | 'AI' | 'Fintech';
    avatarInitial: string;
}

export const testimonialData: Testimonial[] = [
    {
        id: 1,
        name: "Aris Munandar",
        role: "Operations Manager",
        text: "Integrasi sistem manajemen gudang yang dibangun Titik Koma berhasil memangkas waktu input data hingga 40%. Arsitektur sistemnya sangat stabil dan mudah dioperasikan oleh tim lapangan kami.",
        category: "Enterprise",
        avatarInitial: "A"
    },
    {
        id: 2,
        name: "Clarissa Utama",
        role: "Startup Founder",
        text: "Iterasi produk yang cepat dan komunikasi teknis yang transparan. Titik Koma berhasil mentransformasi MVP kami menjadi platform siap rilis dengan performa yang sangat impresif.",
        category: "Startup",
        avatarInitial: "C"
    },
    {
        id: 3,
        name: "Bambang Sujatmiko",
        role: "SME Owner",
        text: "Solusi Point of Sale berbasis Computer Vision yang mereka kembangkan benar-benar inovatif. Akurasi deteksi produknya sangat tinggi, sangat membantu otomatisasi transaksi di toko kami.",
        category: "AI",
        avatarInitial: "B"
    },
    {
        id: 4,
        name: "Dian Sasmita",
        role: "Product Manager",
        text: "UI/UX yang dirancang tidak hanya estetis, tetapi juga sangat intuitif. Kami melihat peningkatan signifikan pada retensi pengguna sejak mengimplementasikan desain baru dari Titik Koma.",
        category: "Design",
        avatarInitial: "D"
    },
    {
        id: 5,
        name: "Hendra Wijaya",
        role: "CTO @ EduTech",
        text: "Sistem manajemen pembelajaran (LMS) yang dikembangkan sangat scalable. Mampu menangani lonjakan 10.000 pengguna bersamaan tanpa lag sedikitpun.",
        category: "Enterprise",
        avatarInitial: "H"
    },
    {
        id: 6,
        name: "Siska Amelia",
        role: "Head of Growth",
        text: "Dashboard analytics buatan Titik Koma membantu kami mengambil keputusan berbasis data secara real-time. Visualisasi datanya sangat memudahkan tim marketing.",
        category: "Fintech",
        avatarInitial: "S"
    },
    {
        id: 7,
        name: "dr. Lukman Hakim",
        role: "Clinic Director",
        text: "Otomasi rekam medis elektronik yang dibangun sangat membantu efisiensi layanan kami. Integrasi antar departemen menjadi jauh lebih lancar.",
        category: "Enterprise",
        avatarInitial: "L"
    }
];