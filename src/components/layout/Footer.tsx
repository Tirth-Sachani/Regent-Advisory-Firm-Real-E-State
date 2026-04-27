import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral pt-20 pb-10 border-t border-outline/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">Regent</span>
              <span className="font-serif text-3xl tracking-tight text-white/70">Advisory</span>
            </Link>
            <p className="font-sans text-sm text-neutral/70 max-w-md leading-relaxed">
              A premier British real estate advisory firm, providing timeless authority and data-driven insights to high-net-worth individuals and institutional investors.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-tertiary mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm text-neutral/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-tertiary mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm text-neutral/80">
              <li>1 Berkeley Square<br/>Mayfair, London W1J 6EA</li>
              <li>+44 (0) 20 7499 9000</li>
              <li>enquiries@regentadvisory.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-neutral/50">
          <p>&copy; {new Date().getFullYear()} Regent Estate Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
