import React, {useEffect, useState} from 'react';
import {Link} from "@inertiajs/react";
import {FiX, FiMenu} from "react-icons/fi";
import {CiUser} from "react-icons/ci";
import {DarkModeSwitch} from "react-toggle-dark-mode";
// @ts-ignore
import {Link as ScrollLink} from 'react-scroll';

const Header = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode: any) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <header className={`px-4 lg:px-6 h-16 flex items-center
            bg-lightSecondary
            dark:bg-darkSecondary`}>
            <Link className={`flex items-center justify-center
                            text-lightQuaternary
                            dark:text-darkQuaternary`} href="login">
                <CiUser className="h-6 w-6"/>
                <span className="sr-only">Portfolio</span>
            </Link>

            <button
                className="lg:hidden ml-auto text-lightQuaternary dark:text-darkQuaternary"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
            </button>

            {/* Menu sur les écrans mobiles */}
            <nav
                className={`fixed inset-y-0 left-0 z-50 bg-lightSecondary dark:bg-darkSecondary w-1/2 lg:w-64 p-4 transition-transform transform-gpu ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
            >
                <button
                    className="absolute top-4 right-4 text-lightQuaternary dark:text-darkQuaternary"
                    onClick={toggleMenu}
                >
                    <FiX size={24}/>
                </button>

                <div className="flex flex-col gap-4 mt-12"> {/* Ajout de la marge en haut */}
                    <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                className={`text-sm font-medium hover:underline underline-offset-4
                        cursor-pointer
                        text-lightQuaternary
                        dark:text-darkQuaternary`}>
                        A propos
                    </ScrollLink>

                    <ScrollLink to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                        text-lightQuaternary
                        dark:text-darkQuaternary`}>
                        Compétences
                    </ScrollLink>

                    <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                        dark:text-darkQuaternary
                        text-lightQuaternary`}>
                        Projets
                    </ScrollLink>

                    <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                                className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                        dark:text-darkQuaternary
                        text-lightQuaternary`}>
                        Contact
                    </ScrollLink>
                </div>

                <div className={`fixed bottom-4  z-50 ${isMenuOpen ? 'lg:hidden' : ''}`}>
                    <DarkModeSwitch
                        style={{color: "black"}}
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        moonColor={'#ECB365'}
                        size={40}
                    />
                </div>
            </nav>

            {/* Menu traditionnel sur les écrans larges */}
            <nav className="ml-auto flex gap-4 sm:gap-6 hidden lg:flex">
                <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                            className={`text-sm font-medium hover:underline underline-offset-4
                                cursor-pointer
                                text-lightQuaternary
                                dark:text-darkQuaternary`}>
                    A propos
                </ScrollLink>

                <ScrollLink to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                            className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                                text-lightQuaternary
                                dark:text-darkQuaternary`}>
                    Compétences
                </ScrollLink>

                <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                            className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                                dark:text-darkQuaternary
                                text-lightQuaternary`}>
                    Projets
                </ScrollLink>

                <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70}
                            className={`text-sm font-medium hover:underline underline-offset-4 cursor-pointer
                                dark:text-darkQuaternary
                                text-lightQuaternary`}>
                    Contact
                </ScrollLink>

                <DarkModeSwitch
                    style={{color: "black"}}
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    moonColor={'#ECB365'}
                    size={20}
                />
            </nav>
        </header>
    );
};

export default Header;
