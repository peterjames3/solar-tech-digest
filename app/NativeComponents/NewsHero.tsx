import Image from 'next/image';
export default function NewsHero(){
    return(
        <section className="w-full  h-[20rem] relative -z-10 rounded-3xl overflow-hidden">
            <Image
            src="/sleek solar panels.webp" 
            alt="sleek solar panels "
            priority={true}
            fill={true}
            style={{ objectFit:'cover' }}
          
            />

            <header className="absolute top-1/2 left-1/2 transition -translate-y-1/2 -translate-x-1/2 ">
                <h2 className='headline text-background hover:text-primary transition-color duration-300 ease-in-out'>News</h2>
            </header>

        </section>
    )
}