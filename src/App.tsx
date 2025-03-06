import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import BreedInfo from "@/pages/BreedInfo";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import emailjs from "@emailjs/browser";
import "./lib/i18n";
// Initialize EmailJS
emailjs.init({
    publicKey: "plvSwMnwrtz7r7WIC",
});

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/breed" element={<BreedInfo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="" element={<NotFound />} />
        </Routes>
    );
}

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Router />
            </main>
            <Footer />
            <Toaster />
        </div>
    );
}

export default App;
