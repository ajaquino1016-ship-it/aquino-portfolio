import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { BookOpen , School , GraduationCap  } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">EDUCATION HISTORY</h2>
                    <p className="mt-4"> </p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 md:mt-16">
  
  <Card className="group border-0 shadow-none h-full flex flex-col">
    <CardHeader className="pb-3 flex-1 flex flex-col items-center">
      <CardDecorator>
        <School className="size-12" aria-hidden />
      </CardDecorator>

      <h2 className="mt-6 font-medium text-2xl text-center">
        Junior High School
      </h2>
    </CardHeader>

    <CardContent className="mt-auto">
      <p className="text-sm text-center">MRSCI</p>
    </CardContent>
  </Card>

  <Card className="group border-0 shadow-none h-full flex flex-col">
    <CardHeader className="pb-3 flex-1 flex flex-col items-center">
      <CardDecorator>
        <BookOpen className="size-12" aria-hidden />
      </CardDecorator>

      <h2 className="mt-6 font-medium text-2xl text-center">
        Senior High School – ICT Strand
      </h2>
    </CardHeader>

    <CardContent className="mt-auto">
      <p className="text-sm text-center">MRSCI</p>
    </CardContent>
  </Card>

  <Card className="group border-0 shadow-none h-full flex flex-col">
    <CardHeader className="pb-3 flex-1 flex flex-col items-center">
      <CardDecorator>
        <GraduationCap className="size-12" aria-hidden />
      </CardDecorator>

      <h2 className="mt-6 font-medium text-2xl text-center">
        Bachelor of Science in Information Technology
      </h2>
    </CardHeader>

    <CardContent className="mt-auto">
      <p className="text-sm text-center">AMA FAIRVIEW</p>
    </CardContent>
  </Card>

</div>

            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
