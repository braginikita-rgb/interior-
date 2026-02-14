
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Similar projects (just take next 2 or random)
    const similarProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

    return (
        <div className="bg-ivory min-h-screen pb-20">
            {/* Hero Cover */}
            <div className="relative h-[70vh] w-full bg-navy">
                <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
                <Container className="absolute bottom-0 left-0 right-0 py-20 z-10">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors uppercase text-xs tracking-widest"
                    >
                        <ArrowLeft className="w-4 h-4" /> Назад в портфолио
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 max-w-4xl leading-tight">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-8 md:gap-16 text-white/90 border-t border-white/20 pt-8">
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-bronze mb-1">
                                Город
                            </span>
                            <span className="text-xl font-serif">{project.city}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-bronze mb-1">
                                Площадь
                            </span>
                            <span className="text-xl font-serif">{project.area} м²</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-bronze mb-1">
                                Стиль
                            </span>
                            <span className="text-xl font-serif">{project.style}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-bronze mb-1">
                                Год
                            </span>
                            <span className="text-xl font-serif">{project.year}</span>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="py-20">
                {/* Description */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-serif text-navy mb-6">О проекте</h2>
                        <div className="prose prose-lg text-graphite/80 font-light leading-relaxed">
                            <p className="mb-6">{project.description}</p>
                            <p className="mb-6">
                                В основе концепции лежала идея создания пространства, которое было бы одновременно функциональным и эмоционально наполненным. Мы тщательно подбирали сочетания фактур: натуральный камень, дерево теплых оттенков и латунные акценты.
                            </p>
                            <p>
                                Особое внимание уделили светодизайну — многоуровневое освещение позволяет менять атмосферу в зависимости от времени суток и настроения.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8 p-8 bg-white border border-navy/5 h-fit shadow-sm">
                        <h3 className="text-xl font-serif text-navy">Детали</h3>
                        <ul className="space-y-4">
                            {project.tags.map(tag => (
                                <li key={tag} className="flex items-center gap-3 text-sm text-graphite/70">
                                    <span className="w-1.5 h-1.5 bg-bronze rounded-full flex-shrink-0" />
                                    {tag}
                                </li>
                            ))}
                            <li className="flex items-center gap-3 text-sm text-graphite/70">
                                <span className="w-1.5 h-1.5 bg-bronze rounded-full flex-shrink-0" />
                                Авторский надзор
                            </li>
                            <li className="flex items-center gap-3 text-sm text-graphite/70">
                                <span className="w-1.5 h-1.5 bg-bronze rounded-full flex-shrink-0" />
                                Комплектация под ключ
                            </li>
                        </ul>
                        <Link href="/contacts" className="block pt-6">
                            <Button variant="primary" className="w-full">Хочу такой проект</Button>
                        </Link>
                    </div>
                </div>

                {/* Gallery */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-serif text-navy">Галерея</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.images.map((img, i) => (
                            <div key={i} className={`relative overflow-hidden rounded-sm group ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-[4/3]"}`}>
                                <Image
                                    src={img}
                                    alt={`${project.title} - photo ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors pointer-events-none" />
                            </div>
                        ))}

                    </div>
                </div>
            </Container>

            {/* Similar Projects */}
            <section className="bg-white py-20 border-t border-navy/5">
                <Container>
                    <h2 className="text-3xl font-serif text-navy mb-12">Похожие проекты</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {similarProjects.map(p => (
                            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block space-y-4">
                                <div className="relative aspect-video overflow-hidden rounded-sm">
                                    <Image
                                        src={p.cover}
                                        alt={p.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-serif text-navy group-hover:text-bronze transition-colors">{p.title}</h3>
                                    <div className="text-xs uppercase tracking-widest text-bronze">{p.category}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
