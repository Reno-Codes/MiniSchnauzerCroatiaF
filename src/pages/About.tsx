import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Helper function to load images from directories
function loadImagesFromDirectory(directory: string) {
    try {
        const images = import.meta.glob(
            "/src/attached_assets/**/*.{jpg,jpeg,png,gif}",
            {
                eager: true,
                import: "default",
            }
        );

        return Object.keys(images)
            .filter((path) => path.includes(directory))
            .map((path) => path.replace("/public/", ""));
    } catch (error) {
        console.error(`Error loading ${directory} images:`, error);
        return [];
    }
}

export default function About() {
    const { t } = useTranslation();
    const [allDogImages, setAllDogImages] = useState<string[]>([]);

    useEffect(() => {
        // Load images from both folders
        const puppyImages = loadImagesFromDirectory("puppies");
        const adultImages = loadImagesFromDirectory("adult");
        setAllDogImages([...puppyImages, ...adultImages]);
    }, []);

    return (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        {t("about.title")}
                    </h1>

                    <div className="space-y-12">
                        <div>
                            <p className="text-lg leading-relaxed mb-8">
                                {t("about.description")}
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">
                                    {t("about.values")}
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <span className="text-primary text-green-500">
                                            ✓
                                        </span>
                                        <span>
                                            {t(
                                                "about.value_points.health_tested"
                                            )}
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-primary text-green-500">
                                            ✓
                                        </span>
                                        <span>
                                            {t("about.value_points.socialized")}
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-primary text-green-500">
                                            ✓
                                        </span>
                                        <span>
                                            {t(
                                                "about.value_points.clean_facility"
                                            )}
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-primary text-green-500">
                                            ✓
                                        </span>
                                        <span>
                                            {t(
                                                "about.value_points.lifetime_support"
                                            )}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-6">
                                {t("about.dogs.title")}
                            </h2>
                            <p className="text-lg mb-6">
                                {t("about.dogs.description")}
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {allDogImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square rounded-lg overflow-hidden"
                                    >
                                        <img
                                            src={image}
                                            alt={`Dog ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
