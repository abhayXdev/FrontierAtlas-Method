"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bookmark, Menu, X, ArrowLeft } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <nav aria-label="Main Navigation" className="h-[60px] w-full bg-surface border-b border-border-subtle flex items-center justify-between px-4 md:px-8 shrink-0 z-50 sticky top-0 transition-all duration-300 relative">
        
        {/* Mobile Search Overlay (Takes over navbar completely on mobile when active) */}
        {isMobileSearchOpen && (
          <div className="absolute inset-0 flex items-center px-4 bg-surface z-50 md:hidden animate-in fade-in slide-in-from-right-4 duration-200">
            <button 
              type="button" 
              className="text-text-muted hover:text-text-main mr-3"
              onClick={() => setIsMobileSearchOpen(false)}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 relative flex items-center group">
              <Search className="w-4 h-4 text-primary absolute left-3 pointer-events-none" />
              <input 
                type="text" 
                autoFocus
                placeholder="Search methods, papers, tasks..." 
                className="w-full h-10 pl-9 pr-4 rounded-md border border-primary/40 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-[14px] text-text-main shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-4 shrink-0 group">
          {/* Mobile Hamburger Menu */}
          <button 
            type="button" 
            className="lg:hidden text-text-muted hover:text-text-main transition-colors" 
            aria-label="Toggle Mobile Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2" aria-label="Frontier Atlas Home">
            <span className="text-primary font-bold text-xl tracking-tighter group-hover:scale-110 transition-transform duration-300" aria-hidden="true">FA</span>
            <span className="font-bold text-text-main text-[17px] tracking-tight hidden sm:block">Frontier Atlas</span>
          </Link>
        </div>
        
        {/* Middle: Desktop Search Bar (Expand on focus) */}
        <div className="hidden md:flex flex-1 max-w-md focus-within:max-w-2xl mx-8 relative items-center group transition-all duration-500 ease-out">
          <Search className="w-4 h-4 text-text-muted absolute left-3 pointer-events-none transition-colors duration-300 group-focus-within:text-primary" />
          <input 
            type="text" 
            placeholder="Search papers, authors, topics, benchmarks..." 
            className="w-full h-9 pl-9 pr-12 rounded-md border border-border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-[13px] text-text-main transition-all duration-300 shadow-sm focus:shadow-md placeholder:text-text-muted/70"
          />
          <div className="absolute right-2 flex items-center justify-center h-5 px-1.5 bg-surface border border-border-subtle rounded text-[10px] font-bold text-text-muted pointer-events-none select-none transition-colors duration-300 group-focus-within:border-primary/30 group-focus-within:text-primary">
            ⌘ K
          </div>
        </div>

        {/* Right: Links & Profile */}
        <div className="flex items-center gap-4 md:gap-6 shrink-0">
          <ul role="list" className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-text-main m-0 p-0 list-none">
            <li><Link href="#" className="link-underline">Explore</Link></li>
            <li><Link href="#" className="link-underline">Rankings</Link></li>
            <li><Link href="#" className="link-underline">Tasks</Link></li>
            <li><Link href="/methods" className="link-underline text-primary">Methods</Link></li>
            <li><Link href="#" className="link-underline">About</Link></li>
          </ul>
          
          <div className="flex items-center gap-4 lg:border-l lg:border-border-subtle lg:pl-4">
            {/* Mobile Search Button Trigger */}
            <button 
              type="button" 
              className="md:hidden text-text-muted hover:text-primary transition-colors" 
              aria-label="Open Mobile Search"
              onClick={() => setIsMobileSearchOpen(true)}
            >
              <Search className="w-[20px] h-[20px]" strokeWidth={2.5} />
            </button>

            {/* Desktop Bookmark Button (Hide on very small screens to save space) */}
            <button type="button" className="text-text-muted hover:text-primary hover:-translate-y-0.5 hover:scale-110 transition-all duration-200 hidden sm:block" aria-label="Bookmarks">
              <Bookmark className="w-[18px] h-[18px]" strokeWidth={2} />
            </button>

            <button type="button" className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-primary/20 bg-primary/5 text-primary text-[12px] font-bold hover:bg-primary hover:text-surface hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" aria-label="User Profile">
              JP
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 right-0 z-40 bg-surface border-b border-border-subtle shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-4 py-6 space-y-6">
            <ul role="list" className="flex flex-col space-y-2 text-[16px] font-bold text-text-main m-0 p-0 list-none">
              <li><Link href="#" className="hover:text-primary transition-colors block py-3 border-b border-border-subtle/50" onClick={() => setIsMobileMenuOpen(false)}>Explore</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors block py-3 border-b border-border-subtle/50" onClick={() => setIsMobileMenuOpen(false)}>Rankings</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors block py-3 border-b border-border-subtle/50" onClick={() => setIsMobileMenuOpen(false)}>Tasks</Link></li>
              <li><Link href="/methods" className="text-primary block py-3 border-b border-border-subtle/50" onClick={() => setIsMobileMenuOpen(false)}>Methods</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors block py-3" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
