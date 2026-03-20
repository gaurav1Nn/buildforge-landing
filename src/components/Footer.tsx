export const Footer = () => (
  <footer className="py-20 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <span className="text-2xl font-bold tracking-tighter">BravioSchool</span>
        <p className="text-muted-foreground mt-4 max-w-xs">
          Don't Just Study Business. Run One.
        </p>
      </div>
      <div>
        <h5 className="font-bold mb-6"></h5>
        <ul className="space-y-4 text-muted-foreground text-sm">
          <li><a href="#mentors" className="hover:text-foreground transition-colors"></a></li>
          <li><a href="#mentors" className="hover:text-foreground transition-colors"></a></li>
          <li><a href="#location" className="hover:text-foreground transition-colors">Bali Campus</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-6"></h5>
        <ul className="space-y-4 text-muted-foreground text-sm">
          <li><a href="#faq" className="hover:text-foreground transition-colors"></a></li>
          <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
          <li><a href="#faq" className="hover:text-foreground transition-colors"></a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between text-[11px] text-muted-foreground uppercase tracking-widest gap-2">
      <span>© 2026 BravioSchool Academy</span>
      <span>Bali, Indonesia</span>
    </div>
  </footer>
);
