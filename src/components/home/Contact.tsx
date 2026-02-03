"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <section id="contacts" className="bg-ivory py-32 border-t border-navy/5">
            <Container>
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2 space-y-8">
                        <span className="text-bronze font-bold text-xs uppercase tracking-widest block">Контакты</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-navy">
                            Давайте обсудим <br /> ваш проект
                        </h2>
                        <p className="text-graphite/60 leading-relaxed max-w-md text-lg">
                            Оставьте заявку, и мы свяжемся с вами для обсуждения деталей и назначения встречи.
                        </p>

                        <div className="pt-8 space-y-4">
                            <a href="tel:+79990000000" className="block text-xl md:text-2xl text-navy hover:text-bronze transition-colors">+7 (999) 000-00-00</a>
                            <a href="mailto:hello@studio.com" className="block text-xl md:text-2xl text-navy hover:text-bronze transition-colors">hello@studio.com</a>
                            <p className="text-graphite/60">Москва, ул. Примерная, 12</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 bg-white p-8 md:p-12 shadow-[0_20px_40px_rgba(11,18,32,0.05)]">
                        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-navy/40">Имя</label>
                                    <Input placeholder="Ваше имя" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-navy/40">Телефон</label>
                                    <Input placeholder="+7 (___) ___-__-__" type="tel" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy/40">Тип объекта</label>
                                <Input placeholder="Квартира, Дом, Офис..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy/40">Площадь</label>
                                <Input placeholder="м²" type="number" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy/40">Сообщение</label>
                                <textarea
                                    className="flex w-full min-h-[100px] rounded-none border-b border-navy/20 bg-transparent px-0 py-2 text-base shadow-sm placeholder:text-navy/30 focus-visible:outline-none focus-visible:border-bronze disabled:cursor-not-allowed disabled:opacity-50 text-navy font-light resize-none"
                                    placeholder="Расскажите о вашей задаче..."
                                />
                            </div>

                            <Button className="w-full" size="lg">Отправить заявку</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};
