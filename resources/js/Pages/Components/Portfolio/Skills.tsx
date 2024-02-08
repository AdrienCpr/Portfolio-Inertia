import React from 'react';
import {SiCplusplus, SiKotlin, SiLivewire, SiUnrealengine, SiPostgresql, SiJavascript, SiOracle} from "react-icons/si";
import {FaCss3Alt, FaHtml5, FaJava, FaLaravel, FaReact, FaNodeJs} from "react-icons/fa";
const Skills = () => {
    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl mb-8
                        text-lightQuaternary
                        dark:text-darkQuaternary`}>Compétences</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="group">
                            <FaLaravel
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity
                                text-lightQuaternary
                                dark:text-darkQuaternary"
                            >
                                Laravel
                            </p>
                        </div>
                        <div className="group">
                            <SiLivewire
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity
                                text-lightQuaternary
                                dark:text-darkQuaternary"
                            >
                                Livewire
                            </p>
                        </div>
                        <div className="group">
                            <FaNodeJs
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                Node js
                            </p>
                        </div>
                        <div className="group">
                            <SiJavascript
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                Javascript
                            </p>
                        </div>
                        <div className="group">
                            <FaReact
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                React
                            </p>
                        </div>
                        <div className="group">
                            <FaHtml5
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                Html5
                            </p>
                        </div>
                        <div className="group">
                            <FaCss3Alt
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                Css3
                            </p>
                        </div>
                        <div className="group">
                            <SiKotlin
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                Kotlin
                            </p>
                        </div>
                        <div className="group">
                            <SiPostgresql
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                PostegreSql
                            </p>
                        </div>
                        <div className="group">
                            <SiOracle
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                Oracle
                            </p>
                        </div>
                        <div className="group">
                            <SiUnrealengine
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                UE5
                            </p>
                        </div>
                        <div className="group">
                            <FaJava
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                Java
                            </p>
                        </div>
                        <div className="group">
                            <SiCplusplus
                                className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"/>
                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity dark:text-darkQuaternary">
                                C++
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
