import PillNav from '../components/PillNav';
import { usePage } from '@inertiajs/react';
import logo from '/public/favicon.ico';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { url } = usePage();

    return (
      <div className="min-h-screen bg-brand-dark text-white">
        <PillNav
          logo={logo}
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'About', href: '/about' },
            { label: 'Methodology', href: '/methodology' },
            { label: 'Contact', href: '/contact' },
          ]}
          activeHref={url}
          baseColor="#ba3c3d"     
          pillColor="transparent" 
          pillTextColor="#9ca3af" 
          hoveredPillTextColor="#ffffff"
        />

        <main className="pt-32 p-10">
          {children}
        </main>
      </div>
    );
}