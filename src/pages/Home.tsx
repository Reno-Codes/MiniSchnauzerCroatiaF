import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
    const { t } = useTranslation();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Set playback speed when the video loads
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <div className="flex flex-col">
            <section className="relative h-[80vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src="/src/attached_assets/videos/puppy-video.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="container relative z-10 flex mx-auto items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="max-w-2xl text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {t("home.hero.title")}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            {t("home.hero.subtitle")}
                        </p>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="text-lg bg-orange-500 hover:bg-orange-600/70 hover:backdrop-blur"
                            >
                                {t("contact.title")}
                            </Button>
                        </Link>

                        <Link to="/gallery">
                            <Button
                                size="lg"
                                className="text-lg ml-6 bg-orange-500 hover:bg-orange-600/70 hover:backdrop-blur"
                            >
                                {t("nav.gallery")}
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Sections */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                            <div className="rounded-lg overflow-hidden ">
                                <img
                                    src="/attached_assets/puppies/p-20230917_192143.jpg"
                                    alt="Puppy"
                                    className="w-full h-64 object-cover hover:scale-[1.02] transition-transform"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src="/attached_assets/adult/a-IMG_2628.png"
                                    alt="Adult Dog"
                                    className="w-full h-64 object-cover hover:scale-[1.02] transition-transform"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src="/attached_assets/adult/a-IMG-20230803-WA0001.jpg"
                                    alt="Featured Dog"
                                    className="w-full h-64 object-cover hover:scale-[1.02] transition-transform"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
