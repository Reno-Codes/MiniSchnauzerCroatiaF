import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Mini Schnauzer Croatia
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Đakovo, Croatia
                                <br />
                                <a
                                    className="hover:text-orange-500"
                                    href="tel:+38598897330"
                                >
                                    +385 98 897 330
                                </a>
                                <br />
                                <a
                                    className="underline hover:text-orange-500"
                                    href="mailto:reno.lulic94@gmail.com"
                                >
                                    palma.dj@gmail.com
                                </a>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                {t("nav.quick_links")}
                            </h3>
                            <nav className="flex flex-col space-y-2">
                                <Link
                                    className="hover:text-orange-500"
                                    to="/about"
                                >
                                    {t("nav.about")}
                                </Link>
                                <Link
                                    className="hover:text-orange-500"
                                    to="/breed"
                                >
                                    {t("nav.breed")}
                                </Link>
                                <Link
                                    className="hover:text-orange-500"
                                    to="/gallery"
                                >
                                    {t("nav.gallery")}
                                </Link>
                                <Link
                                    className="hover:text-orange-500"
                                    to="/contact"
                                >
                                    {t("nav.contact")}
                                </Link>
                            </nav>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                {t("nav.follow_us")}
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.tiktok.com/@tikdogkira"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-500"
                                >
                                    <FaTiktok className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com/kira_the_schnauzer_/#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-500"
                                >
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Mini Schnauzer Croatia.{" "}
                        {t("footer.rights")}
                    </div>
                </div>
            </div>
        </footer>
    );
}
