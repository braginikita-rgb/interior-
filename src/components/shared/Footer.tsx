import { Container } from "@/components/ui/Container";
import Image from "next/image";

export const Footer = () => {


    return (
        <footer className="bg-navy text-white py-20 border-t border-white/10">
            <Container className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="relative h-48 w-[800px]">
                        <Image
                            src="/logo.png"
                            alt="STUDIO"
                            fill
                            className="object-contain object-left"
                            unoptimized
                        />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Создаем пространства для жизни и бизнеса. Полный цикл работ: от идеи до новоселья.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-bronze text-xs uppercase tracking-widest font-bold">Навигация</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><a href="/" className="hover:text-bronze transition-colors">Главная</a></li>
                        <li><a href="/portfolio" className="hover:text-bronze transition-colors">Портфолио</a></li>
                        <li><a href="/services" className="hover:text-bronze transition-colors">Услуги</a></li>
                        <li><a href="/contacts" className="hover:text-bronze transition-colors">Контакты</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-bronze text-xs uppercase tracking-widest font-bold">Контакты</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>+7 (999) 000-00-00</li>
                        <li>hello@studio.com</li>
                        <li>Москва, ул. Примерная, 12</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-bronze text-xs uppercase tracking-widest font-bold">Соцсети</h4>
                    <div className="flex gap-4 text-sm text-white/80">
                        <a href="#" className="hover:text-bronze transition-colors">Instagram</a>
                        <a href="#" className="hover:text-bronze transition-colors">Telegram</a>
                        <a href="#" className="hover:text-bronze transition-colors">WhatsApp</a>
                    </div>
                </div>
            </Container>
            <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-white/40">
                © {new Date().getFullYear()} STUDIO. All rights reserved.
            </div>
        </footer>
    );
};
