import React from 'react';

const About = () => {
    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:items-stretch">
                    <img
                        alt="Profile"
                        className="aspect-content rounded-full object-cover object-center sm:w-full md:w-1/2 lg:order-last"
                        src="/storage/adrien.jpg"
                        loading="lazy"
                        style={{ borderRadius: "50%", height: "500px", width: "500px" }}
                    />
                    <div className="space-y-2 md:w-1/2">
                        <h1 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none dark:text-darkQuaternary text-lightQuaternary`}>
                            Compare Adrien
                        </h1>
                        <p className="mx-auto max-w-[700px] md:text-xl text-text-gray-500 dark:text-gray-400">
                            Développeur en master 1 <br />
                            Expert en développement logiciel
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 space-y-4 flex flex-col items-center">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                    Je suis un développeur passionné, cumulant plus de <b> 5 années d'expérience </b> dans le domaine
                    du développement web. Mon parcours professionnel m'a conduit à travailler sur une
                    multitude de projets, me permettant ainsi d'acquérir des compétences variées, notamment
                    dans les technologies telles que <b>Laravel, React, Node.js et pleins d'autres. </b>
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                    Je suis également diplômé en tant que <b> concepteur et développeur d'applications </b>, ayant enrichi
                    mes connaissances durant deux années d'alternance au cours desquelles j'ai
                    collaboré sur divers projets avec des clients.
                </p>
            </div>
        </div>
    );
};

export default About;
