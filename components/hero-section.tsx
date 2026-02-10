import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-64">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                            <h1 className=" mt-8font-roboto font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-center break-words lg:whitespace-nowrap
">
  Aaron James A. Aquino
</h1>


                              <p className="mt-8 max-w-3xl text-pretty text-3xl"> 2nd Year College</p>
                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section>
               
            </main>
        </>
    )
}
