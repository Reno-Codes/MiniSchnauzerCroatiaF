import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Contact() {
    const { t } = useTranslation();
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    const form = useForm<InsertContact>({
        resolver: zodResolver(insertContactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit = async (data: InsertContact) => {
        try {
            const formattedMessage = `
        Ime: ${data.name}
        Email: ${data.email}
        Telefon: ${data.phone}
        Poruka:
        ${data.message}
      `;

            const templateParams = {
                message: formattedMessage,
                // Optionally, include individual fields if your template supports them:
                name: data.name,
                email: data.email,
                phone: data.phone,
            };

            await emailjs.send(
                "service_tjhv8q1", // Your EmailJS service ID
                "template_tmwhmt6", // Your EmailJS template ID
                templateParams,
                "plvSwMnwrtz7r7WIC" // Your public key
            );

            toast({
                title: t("Success!"),
                description: t("Email sent successfully!"),
            });
            form.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            toast({
                title: t("Error"),
                description: t("Error sending email!"),
                variant: "destructive",
            });
        }
    };

    return (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {t("contact.title")}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <Form {...form}>
                            <form
                                ref={formRef}
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                {t("contact.form.name")}
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                {t("contact.form.email")}
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                {t("contact.form.phone")}
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="tel" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                {t("contact.form.message")}
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea rows={5} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={form.formState.isSubmitting}
                                    className="w-full text-white bg-orange-500 hover:bg-orange-600/70 hover:backdrop-blur"
                                >
                                    {t("contact.form.submit")}
                                </Button>
                            </form>
                        </Form>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                {t("contact.info.location")}
                            </h3>
                            <p>Đakovo, Croatia</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Contact Info
                            </h3>
                            <p>
                                {t("contact.info.phone")}:{" "}
                                <a
                                    className="hover:text-orange-500"
                                    href="tel:+38598897330"
                                >
                                    +385 98 897 330
                                </a>
                            </p>
                            <p>
                                Email:{" "}
                                <a
                                    className="underline hover:text-orange-500"
                                    href="mailto:palma.dj@gmail.com"
                                >
                                    palma.dj@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
