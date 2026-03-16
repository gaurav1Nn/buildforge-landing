export const Footer = () => (
  <footer className="py-20 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <span className="text-2xl font-bold tracking-tighter">BuildForge</span>
        <p className="text-muted-foreground mt-4 max-w-xs">
          Don't Just Study Business. Run One.
        </p>
      </div>
      <div>
        <h5 className="font-bold mb-6">Program</h5>
        <ul className="space-y-4 text-muted-foreground text-sm">
          <li><a href="#mentors" className="hover:text-foreground transition-colors">Curriculum</a></li>
          <li><a href="#mentors" className="hover:text-foreground transition-colors">Mentors</a></li>
          <li><a href="#location" className="hover:text-foreground transition-colors">Cebu Campus</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-6">Apply</h5>
        <ul className="space-y-4 text-muted-foreground text-sm">
          <li><a href="#faq" className="hover:text-foreground transition-colors">Scholarships</a></li>
          <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
          <li><a href="#faq" className="hover:text-foreground transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between text-[11px] text-muted-foreground uppercase tracking-widest gap-2">
      <span>© 2026 BuildForge Academy</span>
      <span>Cebu City, Philippines</span>
    </div>
  </footer>
);
