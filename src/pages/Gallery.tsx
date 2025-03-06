import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

// Helper function to load images from a directory
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
            .map((path) => path.replace("/src/", ""));
    } catch (error) {
        console.error(`Error loading ${directory} images:`, error);
        return [];
    }
}

function ImageGrid({ images }: { images: string[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((image, index) => (
                <Dialog key={index}>
                    <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:scale-[1.02] transition-transform">
                            <CardContent className="p-3">
                                <div className="aspect-square overflow-hidden rounded-lg">
                                    <img
                                        src={`/${image}`}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w border-none">
                        <DialogTitle className="sr-only">
                            Image Preview
                        </DialogTitle>
                        <img
                            src={`/${image}`}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-auto rounded-lg"
                        />
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}

export default function Gallery() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("adults");

    const [puppyImages, setPuppyImages] = useState<string[]>([]);
    const [adultImages, setAdultImages] = useState<string[]>([]);

    useEffect(() => {
        // Load images when component mounts
        setPuppyImages(loadImagesFromDirectory("puppies"));
        setAdultImages(loadImagesFromDirectory("adult"));
    }, []);

    return (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">
                    {t("gallery.title")}
                </h1>

                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <TabsList className="mb-8 mx-auto bg-black/5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <TabsTrigger
                            value="adults"
                            className={
                                activeTab == "adults"
                                    ? "text-black bg-white/60 drop-shadow-sm shadow-black"
                                    : "text-black/40"
                            }
                        >
                            {t("gallery.adults")}
                        </TabsTrigger>
                        <TabsTrigger
                            value="puppies"
                            className={
                                activeTab == "puppies"
                                    ? "text-black bg-white/60 drop-shadow-sm shadow-black"
                                    : "text-black/40"
                            }
                        >
                            {t("gallery.puppies")}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="puppies">
                        <ImageGrid images={puppyImages} />
                    </TabsContent>

                    <TabsContent value="adults">
                        <ImageGrid images={adultImages} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
