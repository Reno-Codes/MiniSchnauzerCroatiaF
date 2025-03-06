import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const characteristics = [
    {
        title: "temperament",
        details: [
            "friendly",
            "intelligent",
            "alert",
            "good_with_children",
            "excellent_watchdog",
        ],
    },
    {
        title: "physical",
        details: ["height", "weight", "build", "distinctive_features", "coat"],
    },
    {
        title: "care",
        details: [
            "grooming",
            "exercise",
            "vet_checkups",
            "dental",
            "socialization",
        ],
    },
    {
        title: "health",
        details: [
            "generally_healthy",
            "eye_examinations",
            "hip_screening",
            "dental_care",
            "life_expectancy",
        ],
    },
];

export default function BreedInfo() {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        {t("breed.title")}
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-lg leading-relaxed mb-8">
                                {t("breed.description")}
                            </p>

                            <Card className="mb-8">
                                <CardContent className="p-0">
                                    <img
                                        src="https://img.freepik.com/premium-photo/miniature-schnauzer-white-gray-sits-looks-you-light-background-copy-space-bearded-miniature-schnauzer-puppy_295890-3478.jpg"
                                        alt="Miniature Schnauzer"
                                        className="w-full h-72 object-cover rounded-lg"
                                    />
                                </CardContent>
                            </Card>

                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                {characteristics.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                    >
                                        <AccordionTrigger className="text-lg font-semibold">
                                            {t(
                                                `breed.characteristics.${item.title}.title`
                                            )}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 pl-4">
                                                {item.details.map(
                                                    (detail, detailIndex) => (
                                                        <li
                                                            key={detailIndex}
                                                            className="text-muted-foreground"
                                                        >
                                                            •{" "}
                                                            {t(
                                                                `breed.characteristics.${item.title}.details.${detail}`
                                                            )}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="space-y-8">
                            <Card className="overflow-hidden">
                                <CardContent className="p-0">
                                    <img
                                        src="https://img.freepik.com/premium-photo/purebred-schnauzer-terrier-puppy_138545-169.jpg"
                                        alt="Miniature Schnauzer Profile"
                                        className="w-full h-80 object-cover"
                                    />
                                </CardContent>
                            </Card>

                            <div className="grid grid-cols-2 gap-4">
                                <Card className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <img
                                            src="https://img.freepik.com/free-photo/portrait-cute-miniature-schnauzer-lights_181624-35750.jpg"
                                            alt="Schnauzer Close-up"
                                            className="w-full h-48 object-cover"
                                        />
                                    </CardContent>
                                </Card>

                                <Card className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <img
                                            src="https://img.freepik.com/free-photo/adorable-miniature-puppy-schnauzer-looking-camera-red-background-studio-shot_181624-55312.jpg"
                                            alt="Schnauzer Playing"
                                            className="w-full h-48 object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="bg-muted p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">
                                    {t("breed.ideal_for")}
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <span className="text-primary text-green-500">
                                            ✓
                                        </span>
                                        <span>
                                            {t("breed.ideal_points.families")}
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-primary text-green-500">
                                            ✓
                                        </span>
                                        <span>
                                            {t("breed.ideal_points.apartments")}
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-primary text-green-500">
                                            ✓
                                        </span>
                                        <span>
                                            {t("breed.ideal_points.first_time")}
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="text-primary text-green-500">
                                            ✓
                                        </span>
                                        <span>
                                            {t("breed.ideal_points.active")}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
