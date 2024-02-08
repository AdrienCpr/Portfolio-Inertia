import React, {useEffect} from 'react';
import Modal from 'react-modal';
import {IoCloseOutline} from "react-icons/io5";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '600px',
        width: '90%',
        margin: '0 auto',
    },
};


const Footer = () => {
    const [termsModalIsOpen, setTermsModalIsOpen] = React.useState(false);
    const [privacyModalIsOpen, setPrivacyModalIsOpen] = React.useState(false);

    function openTermsModal() {
        setTermsModalIsOpen(true);
    }

    function closeTermsModal() {
        setTermsModalIsOpen(false);
    }

    function openPrivacyModal() {
        setPrivacyModalIsOpen(true);
    }

    function closePrivacyModal() {
        setPrivacyModalIsOpen(false);
    }

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);


    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className={`text-xs
                text-lightTertiary
                dark:text-darkQuaternary`}
            >
                © 2024 Compare Adrien. Tous droits réservés.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">

                <button className={`text-xs hover:underline underline-offset-4
                    dark:text-darkQuaternary
                    text-lightTertiary`}
                    onClick={openTermsModal}
                >
                    Conditions d'utilisation
                </button>

                <Modal
                    isOpen={termsModalIsOpen}
                    style={customStyles}
                    contentLabel="Conditions d'utilisation"
                    onRequestClose={closeTermsModal}
                >
                    <button
                        className="hover:text-dark text-gray-600 font-bold absolute top-2 right-4"
                        onClick={closeTermsModal}
                    >
                        <span><IoCloseOutline className="h-7 w-7"/></span>
                    </button>

                    <div className="text-left">
                        <h2 className="text-3xl underline font-bold mb-4 mt-4 text-center">Conditions d'utilisation</h2>

                        <h4 className=" underline font-bold mb-2">Introduction :</h4>
                        <p className="mb-4">
                            Bienvenue sur le Portfolio de Compare Adrien. En utilisant ce site, vous acceptez les
                            conditions
                            énoncées ci-dessous.
                            Si vous n'êtes pas d'accord avec ces conditions, veuillez ne pas utiliser ce site.
                        </p>

                        <h4 className=" underline font-bold mb-2">Acceptation des conditions :</h4>
                        <p className="mb-4">
                            En accédant à ce site, vous acceptez de respecter les présentes conditions d'utilisation,
                            toutes les lois et
                            réglementations applicables, et vous acceptez d'être responsable du respect des lois locales
                            éventuellement
                            applicables.
                        </p>

                        <h4 className=" underline font-bold mb-2">Droits de propriété intellectuelle :</h4>
                        <p className="mb-4">
                            Tous les contenus présents sur ce site, y compris mais sans s'y limiter, le texte, les
                            graphiques, le code
                            source et les images, sont la propriété intellectuelle exclusive de Compare Adrien. Vous
                            vous
                            engagez à ne pas
                            reproduire, distribuer, afficher, vendre ou créer des œuvres dérivées basées sur ces
                            contenus sans autorisation
                            expresse.
                        </p>

                        <h4 className=" underline font-bold mb-2">Utilisation autorisée :</h4>
                        <p className="mb-4">
                            Vous êtes autorisé à consulter, télécharger et imprimer les contenus de ce site à des fins
                            personnelles et non
                            commerciales. Toute autre utilisation sans autorisation écrite préalable est strictement
                            interdite.
                        </p>

                        <h4 className=" underline font-bold mb-2">Responsabilités des utilisateurs :</h4>
                        <p className="mb-4">
                            En utilisant ce site, vous vous engagez à ne pas perturber, endommager ou compromettre
                            l'intégrité du site, et
                            à respecter les droits des autres utilisateurs.
                        </p>

                        <h4 className=" underline font-bold mb-2">Modification des conditions :</h4>
                        <p className="mb-4">
                            Compare Adrien se réserve le droit de modifier ces conditions d'utilisation à tout moment.
                            Les
                            utilisateurs
                            seront informés des changements par le biais d'une notification sur le site.
                        </p>

                        <h4 className=" underline font-bold mb-2">Résiliation :</h4>
                        <p>
                            Compare Adrien se réserve le droit de refuser l'accès au site à tout utilisateur en cas de
                            violation flagrante
                            des présentes conditions d'utilisation.
                        </p>
                    </div>
                </Modal>

                <button className={`text-xs hover:underline underline-offset-4
                        text-lightTertiary
                        dark:text-darkQuaternary`}
                        onClick={openPrivacyModal}>
                    Confidentialité
                </button>

                <Modal
                    isOpen={privacyModalIsOpen}
                    style={customStyles}
                    contentLabel="Conditions d'utilisation"
                    onRequestClose={closePrivacyModal}
                >
                    <button
                        className="hover:text-dark text-gray-600 font-bold absolute top-2 right-2"
                        onClick={closePrivacyModal}
                    >
                        <span><IoCloseOutline className="h-7 w-7"/></span>
                    </button>
                    <div className="text-left">
                        <h2 className="text-3xl underline font-bold mb-4 mt-4 text-center">Confidentialité</h2>

                        <h4 className=" underline font-bold mb-2">Collecte d'informations :</h4>
                        <p className="mb-4">
                            Nous collectons des informations personnelles telles que votre nom, adresse e-mail et
                            informations de contact uniquement lorsque vous les fournissez volontairement, par exemple,
                            en remplissant un formulaire de contact.
                        </p>

                        <h4 className=" underline font-bold mb-2">Utilisation des informations :</h4>
                        <p className="mb-4">
                            Les informations collectées sont utilisées pour personnaliser votre expérience sur le site,
                            répondre à vos demandes, et améliorer nos services. Elles ne seront pas vendues, échangées,
                            transférées ou fournies à des tiers sans votre consentement explicite.
                        </p>

                        <h4 className=" underline font-bold mb-2">Partage d'informations :</h4>
                        <p className="mb-4">
                            Nous ne partageons vos informations personnelles avec des tiers que dans le but de fournir
                            les services que vous avez demandés, avec votre consentement explicite.
                        </p>

                        <h4 className=" underline font-bold mb-2">Sécurité :</h4>
                        <p className="mb-4">
                            Nous mettons en place des mesures de sécurité pour protéger vos informations personnelles
                            contre tout accès non autorisé, divulgation, altération ou destruction.
                        </p>

                        <h4 className=" underline font-bold mb-2">Droits des utilisateurs :</h4>
                        <p className="mb-4">
                            Vous avez le droit d'accéder, de rectifier et de supprimer vos informations personnelles.
                            Pour exercer ces droits, veuillez nous contacter via les coordonnées fournies sur le site.
                        </p>

                        <h4 className=" underline font-bold mb-2">Modifications de la politique de confidentialité
                            :</h4>
                        <p className="mb-4">
                            Toute modification de notre politique de confidentialité sera publiée sur cette page.
                            En continuant à utiliser le site après ces modifications, vous acceptez les termes mis à
                            jour.
                        </p>
                    </div>
                </Modal>

            </nav>
        </footer>
    );
};

export default Footer;
