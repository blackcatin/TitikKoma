export interface FaqItem {
    q: string;
    a: string;
    icon: string;
    category: 'General' | 'Technical' | 'Service';
}

export const faqData: FaqItem[] = [
    {
        category: 'Service',
        q: "Bagaimana alur pengerjaan proyek di Titik Koma?",
        a: "Kami menggunakan metodologi Strategy-First. Dimulai dari fase Discovery (riset mendalam), Crafting (pengembangan iteratif), hingga Evolution (optimasi berkelanjutan) sesuai dengan roadmap yang telah disepakati.",
        icon: "🚀"
    },
    {
        category: 'Technical',
        q: "Apakah sistem yang dibangun bisa diskalakan (scalable)?",
        a: "Ya. Kami membangun arsitektur menggunakan standar Cloud-Native dan Clean Code, sehingga sistem Anda siap untuk ditingkatkan kapasitasnya seiring pertumbuhan pengguna.",
        icon: "📈"
    },
    {
        category: 'General',
        q: "Berapa lama estimasi waktu pengerjaan?",
        a: "Durasi sangat bergantung pada kompleksitas modul. Namun secara standar, MVP (Minimum Viable Product) dapat kami selesaikan dalam rentang 4 hingga 12 minggu.",
        icon: "⏳"
    },
    {
        category: 'Technical',
        q: "Bagaimana dengan hak cipta kode dan aset?",
        a: "Setelah proyek selesai dan pelunasan dilakukan, seluruh hak kekayaan intelektual (IP Rights) termasuk source code dan aset desain sepenuhnya menjadi milik klien.",
        icon: "⚖️"
    },
    {
        category: 'Service',
        q: "Bagaimana cara saya memantau progres proyek?",
        a: "Kami menyediakan akses ke Progress Board dan mengadakan pertemuan rutin (Weekly Update) agar Anda selalu mengetahui perkembangan teknis dan tantangan yang kami hadapi.",
        icon: "💬"
    },
    {
        category: 'General',
        q: "Apa yang terjadi jika ditemukan bug setelah peluncuran?",
        a: "Kami memberikan masa garansi pemeliharaan teknis (Technical Support) selama 3 bulan pertama untuk memastikan sistem berjalan stabil di lingkungan produksi.",
        icon: "🛠️"
    },
    {
        category: 'Technical',
        q: "Bagaimana standar keamanan data yang diterapkan?",
        a: "Kami mengimplementasikan enkripsi AES-256 untuk data at-rest dan protokol SSL/TLS untuk transmisi data. Setiap sistem juga melalui tahap Security Audit untuk memitigasi kerentanan OWASP Top 10.",
        icon: "🛡️"
    },
    {
        category: 'Service',
        q: "Apakah Titik Koma menerima kolaborasi jangka panjang?",
        a: "Tentu. Selain pengerjaan berbasis proyek, kami menyediakan model kerjasama 'Dedicated Team' bagi partner yang membutuhkan iterasi pengembangan produk secara berkelanjutan setiap bulannya.",
        icon: "🤝"
    },
    {
        category: 'Technical',
        q: "Apakah sistem kami bisa diintegrasikan dengan API pihak ketiga?",
        a: "Sangat bisa. Kami berpengalaman mengintegrasikan berbagai API mulai dari Payment Gateway, sistem logistik, hingga AI tools (OpenAI/Anthropic) ke dalam infrastruktur yang kami bangun.",
        icon: "🔌"
    },
    {
        category: 'General',
        q: "Bagaimana jika saya belum memiliki dokumen spesifikasi teknis?",
        a: "Tidak masalah. Di fase Discovery, tim analis kami akan membantu mendefinisikan User Stories dan kebutuhan teknis untuk diterjemahkan ke dalam blueprint produk yang komprehensif.",
        icon: "📝"
    },
    {
        category: 'Service',
        q: "Bagaimana Titik Koma menangani kerahasiaan ide bisnis klien?",
        a: "Integritas adalah prioritas kami. Kami bersedia menandatangani Non-Disclosure Agreement (NDA) bahkan sebelum diskusi teknis mendalam dimulai untuk menjamin keamanan ide bisnis Anda.",
        icon: "🔐"
    },
    {
        category: 'Technical',
        q: "Infrastruktur cloud apa yang digunakan?",
        a: "Kami fleksibel mengikuti preferensi klien, namun standar deployment kami mengoptimalkan layanan AWS, Google Cloud, atau Vercel untuk memastikan ketersediaan sistem yang tinggi (high availability).",
        icon: "☁️"
    },
    {
        category: 'General',
        q: "Apakah layanan Titik Koma tersedia untuk klien di luar Indonesia?",
        a: "Ya. Kami beroperasi secara global dengan sistem manajemen proyek yang memungkinkan kolaborasi lintas zona waktu secara efisien menggunakan tools sinkronisasi modern.",
        icon: "🌍"
    }
];