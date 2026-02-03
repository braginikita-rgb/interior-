import { Contact } from "@/components/home/Contact";
import { Container } from "@/components/ui/Container";

export default function ContactsPage() {
    return (
        <div className="bg-ivory min-h-screen pt-32">
            <Container className="mb-0">
                <div className="space-y-6">
                    <span className="text-bronze font-bold text-xs uppercase tracking-widest block">Свяжитесь с нами</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-navy">Контакты</h1>
                </div>
            </Container>
            <Contact />
        </div>
    );
}
