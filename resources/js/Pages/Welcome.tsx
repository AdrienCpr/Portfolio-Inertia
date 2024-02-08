import * as React from 'react';
import About from "@/Pages/Components/Portfolio/About";
import Skills from "@/Pages/Components/Portfolio/Skills";
import Projects from "@/Pages/Components/Portfolio/Projects";
import Contact from "@/Pages/Components/Portfolio/Contact";
import Footer from "@/Pages/Components/Footer";
import Header from "@/Pages/Components/Header";

export default function Welcome({REACT_APP_SITE_KEY}: { REACT_APP_SITE_KEY: string }) {
    return (
        <div className={`flex flex-col min-h-screen
                        bg-lightPrimary
                        dark:bg-darkPrimary
                        transition-all duration-500`}>
            <Header/>

            <main className="flex-1 mx-auto overflow-hidden">
                <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <About/>
                </section>

                <section id="skills"
                         className={`w-full py-12 md:py-24 lg:py-32 bg-lightSecondary dark:bg-darkSecondary`}>
                    <Skills/>
                </section>

                <section id="projects" className="w-full text-center py-12 md:py-24 lg:py-32">
                    <Projects/>
                </section>

                <section id="contact"
                         className={`w-full py-12 md:py-24 lg:py-32 bg-lightSecondary dark:bg-darkSecondary`}>
                    <Contact REACT_APP_SITE_KEY={REACT_APP_SITE_KEY}/>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
