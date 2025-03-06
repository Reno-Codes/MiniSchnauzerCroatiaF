import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigation = [
        { name: t("nav.home"), href: "/" },
        { name: t("nav.about"), href: "/about" },
        { name: t("nav.breed"), href: "/breed" },
        { name: t("nav.gallery"), href: "/gallery" },
        { name: t("nav.contact"), href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="/components/layout/logo.png"
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                        <span className="hidden text-lg font-semibold sm:inline-block">
                            Mini Schnauzer Croatia
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:items-center lg:space-x-6">
                        {navigation.map((item) => (
                            <Link key={item.href} to={item.href}>
                                <Button
                                    variant={
                                        location.pathname === item.href
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className="text-sm font-medium transition-all hover:bg-muted "
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}

                        {/* Language Selector */}
                        <Select
                            value={i18n.language}
                            onValueChange={(value) =>
                                i18n.changeLanguage(value)
                            }
                        >
                            <SelectTrigger className="w-[130px] ">
                                <SelectValue placeholder={t("nav.language")} />
                            </SelectTrigger>
                            <SelectContent className="bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                                <SelectItem value="hr">Croatian</SelectItem>
                                <SelectItem value="en">English</SelectItem>
                            </SelectContent>
                        </Select>
                    </nav>

                    {/* Mobile Menu Button and Language Selector */}
                    <div className="flex lg:hidden items-center space-x-4">
                        <Select
                            value={i18n.language}
                            onValueChange={(value) =>
                                i18n.changeLanguage(value)
                            }
                        >
                            <SelectTrigger className="w-[100px] ">
                                <SelectValue placeholder={t("nav.language")} />
                            </SelectTrigger>
                            <SelectContent className="bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                                <SelectItem value="hr">Croatian</SelectItem>
                                <SelectItem value="en">English</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        isMobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden">
                        <div className="space-y-2 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link key={item.href} to={item.href}>
                                    <Button
                                        variant={
                                            location.pathname === item.href
                                                ? "secondary"
                                                : "ghost"
                                        }
                                        className="w-full justify-start text-sm font-medium"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
