import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "Services", path: "/services-deep-dive", icon: "Code" },
    // { name: 'Portfolio', path: '/portfolio-showcase', icon: 'Briefcase' },
    { name: "Innovation Lab", path: "/innovation-lab", icon: "Zap" },
    // { name: 'Knowledge Center', path: '/knowledge-center', icon: 'BookOpen' },
    { name: "Contact", path: "/contact-consultation", icon: "MessageCircle" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <Icon name="Code2" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                CodeCraft
              </h1>
              <p className="text-xs text-text-secondary font-medium tracking-wide">
                AGENCY
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? "text-accent bg-accent/10"
                    : "text-text-secondary hover:text-primary hover:bg-surface"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    name={item.icon}
                    size={16}
                    className={`transition-colors duration-300 ${
                      isActivePath(item.path)
                        ? "text-accent"
                        : "text-text-muted group-hover:text-primary"
                    }`}
                  />
                  <span>{item.name}</span>
                </div>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="primary"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => (window.location.href = "/contact-consultation")}
                className="shadow-soft hover:shadow-elevated"
              >
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMenuOpen ? "X" : "Menu"}
                size={24}
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? "text-accent bg-accent/10 border-l-2 border-accent"
                    : "text-text-secondary hover:text-primary hover:bg-surface"
                }`}
              >
                <Icon
                  name={item.icon}
                  size={18}
                  className={`transition-colors duration-300 ${
                    isActivePath(item.path) ? "text-accent" : "text-text-muted"
                  }`}
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <Icon
                    name="ChevronRight"
                    size={16}
                    className="ml-auto text-accent"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-6 pt-4 border-t border-border">
            <Button
              variant="primary"
              size="md"
              fullWidth
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => {
                closeMenu();
                window.location.href = "/contact-consultation";
              }}
              className="shadow-soft"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-primary/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
