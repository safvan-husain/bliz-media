import { cn } from "@/lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "@/components/ui/testimonial-card"
import { useEffect, useMemo, useRef, useState } from "react"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null)
    const [shouldAnimate, setShouldAnimate] = useState(false)

    useEffect(() => {
        const sectionEl = sectionRef.current
        if (!sectionEl) return

        const media = window.matchMedia?.("(prefers-reduced-motion: reduce)")
        if (media?.matches) return

        if (!("IntersectionObserver" in window)) {
            setShouldAnimate(true)
            return
        }

        const rect = sectionEl.getBoundingClientRect()
        setShouldAnimate(rect.top < window.innerHeight && rect.bottom > 0)

        const observer = new IntersectionObserver(
            ([entry]) => setShouldAnimate(entry?.isIntersecting ?? false),
            { threshold: 0.1 }
        )

        observer.observe(sectionEl)
        return () => observer.disconnect()
    }, [])

    const { repeatedCardsPerHalf, durationSeconds } = useMemo(() => {
        const minCardsPerHalf = 8
        const safeTestimonials = testimonials.length ? testimonials : []
        const repeatCount = Math.max(
            1,
            Math.ceil(minCardsPerHalf / Math.max(1, safeTestimonials.length))
        )

        const repeatedCardsPerHalf = Array.from({ length: repeatCount }, (_, setIndex) =>
            safeTestimonials.map((testimonial, i) => (
                <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                    className="shrink-0"
                />
            ))
        ).flat()

        return {
            repeatedCardsPerHalf,
            durationSeconds: 20 * repeatCount
        }
    }, [testimonials])

    return (
        <section
            ref={sectionRef}
            className={cn(
                "bg-background text-foreground",
                "py-12 sm:py-24 md:py-32 px-0",
                className
            )}
        >
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                        {title}
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div
                        className="testimonial-marquee group flex overflow-hidden p-2 [--gap:1.5rem] flex-row"
                        style={{ ["--duration" as never]: `${durationSeconds}s` }}
                    >
                        <div
                            className="testimonial-marquee-track flex w-max shrink-0 flex-row will-change-transform"
                            data-animate={shouldAnimate ? "true" : "false"}
                        >
                            <div className="flex [gap:var(--gap)] pr-[var(--gap)]">
                                {repeatedCardsPerHalf}
                            </div>
                            <div
                                className="flex [gap:var(--gap)] pr-[var(--gap)]"
                                aria-hidden="true"
                            >
                                {repeatedCardsPerHalf}
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-white sm:block z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-white sm:block z-10" />
                </div>
            </div>
        </section>
    )
}
