// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import {Head} from '@inertiajs/react';
// import {PageProps} from '@/types';
// import React, {useEffect, useState} from 'react';
// import {router} from "@inertiajs/react";
// import copy from 'clipboard-copy';
// import Confetti from 'react-confetti';
// import '../../css/app.css';
//
// interface DashboardProps extends PageProps {
//     generated_url: string;
//     errorRedirection: string;
// }
//
// type User = {
//     auth: {
//         user: Array<User>;
//     };
// }
// const Dashboard: React.FC<DashboardProps> = ({auth, generated_url, errorRedirection, success_earn}) => {
//     const [url, setUrl] = useState<string>('');
//     const [error, setError] = useState<string>(errorRedirection);
//     const [isValidUrl, setIsValidUrl] = useState<boolean>(false);
//     const [showConfetti, setShowConfetti] = useState<boolean>(false);
//
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const inputValue = e.target.value;
//         setUrl(inputValue);
//         validateUrl(inputValue);
//     };
//
//     if (generated_url) {
//         localStorage.setItem('lastGenerateLink', generated_url)
//     }
//
//     const validateUrl = (inputValue: string) => {
//         const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
//
//         if (urlRegex.test(inputValue)) {
//             setError("");
//             setIsValidUrl(true);
//         } else {
//             setError("Veuillez saisir une URL valide (ex: https://shorturl.com)");
//             setIsValidUrl(false);
//         }
//     };
//
//     const handleCopyToClipboard = async () => {
//         try {
//             await copy(generated_url);
//             alert('Lien copié dans le presse-papiers !');
//         } catch (err) {
//             console.error('Erreur lors de la copie dans le presse-papiers', err);
//         }
//     };
//
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (url !== '' && isValidUrl) {
//             router.post('/dashboard', {'url': url});
//         }
//     };
//
//     useEffect(() => {
//         if (success_earn) {
//             setShowConfetti(true);
//
//             setTimeout(() => {
//                 setShowConfetti(false)
//             }, 10000);
//
//             const confettiTimeout = setTimeout(() => {
//                 setShowConfetti(false);
//             }, 10000);
//
//             return () => {
//                 clearTimeout(confettiTimeout);
//                 setShowConfetti(false);
//             };
//         }
//     }, [success_earn]);
//
//
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
//         >
//             <Head title="Dashboard"/>
//             {showConfetti && (
//                 <><Confetti/>
//                     <div
//                         className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded">
//                         Succès débloqué !
//                     </div>
//                 </>
//             )}
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="container mx-auto mt-10 animate-fadeIn text-center pb-10">
//                             <form onSubmit={handleSubmit} className="mt-4">
//                                 <input
//                                     type="text"
//                                     placeholder="Insérer l'URL ici"
//                                     value={url}
//                                     onChange={handleInputChange}
//                                     className={`py-2 px-4 border w-64 transition duration-300 focus:outline-none focus:border-blue-500 mt-4`}
//                                 />
//                                 <button
//                                     type="submit"
//                                     className={`py-2 px-4 bg-blue-500 text-white rounded cursor-pointer opacity-80 transition duration-300 ${!isValidUrl ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-700 transform hover:scale-105'}`}
//                                     disabled={!isValidUrl}
//                                 >
//                                     Générer un lien
//                                 </button>
//                             </form>
//
//                             {localStorage.getItem('lastGenerateLink') && (
//                                 <p className="mt-4">
//                                     Voici le dernier lien généré :{' '}
//                                     <span className="underline cursor-pointer text-blue-500"
//                                           onClick={handleCopyToClipboard}>
//                                         {localStorage.getItem('lastGenerateLink')}
//                                     </span>
//                                 </p>
//                             )}
//                             {error && (
//                                 <p className="text-red-500 mt-4 font-bold">{error}</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// };
//
// export default Dashboard;
