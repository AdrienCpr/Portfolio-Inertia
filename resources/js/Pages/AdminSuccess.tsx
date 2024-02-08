// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import {Head} from '@inertiajs/react';
// import {PageProps} from '@/types';
// import React, {useState} from 'react';
// import {router} from "@inertiajs/react";
// import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import '../../css/carousel.css';
// import {log} from "util";
// import {all} from "axios";
//
//
// interface Success {
//     id: number;
//     name: string;
//     description: string;
//     icon: string;
// }
//
// interface Category {
//     id: number;
//     category: string;
// }
//
// interface DashboardProps extends PageProps {
//     success: Success[];
//     allCategory: Category[]
// }
//
// const AdminSuccess: React.FC<DashboardProps> = ({auth, success, allCategory}) => {
//     const [name, setName] = useState<string>('');
//     const [description, setDescription] = useState<string>('');
//     const [icon, setIcon] = useState(null);
//     const [category_id, setCategory] = useState<string>('');
//     const [count_to_have, setCountToHave] = useState<number>(0);
//     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const inputNameValue = e.target.value;
//         setName(inputNameValue);
//     };
//     const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const inputDescriptionValue = e.target.value;
//         setDescription(inputDescriptionValue);
//     };
//
//     const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         // @ts-ignore
//         const inputIconValue = e.target.files[0];
//         // @ts-ignore
//         setIcone(inputIconValue);
//     };
//
//     const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const inputCategoryValue = e.target.value;
//         setCategory(inputCategoryValue);
//     };
//
//     const handleCountToHaveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const inputCountToHaveValue = e.target.valueAsNumber;
//         setCountToHave(inputCountToHaveValue);
//     };
//
//     const clearInput = () => {
//         setName('');
//         setDescription('');
//         setIcon(null);
//         setCategory('');
//         setCountToHave(0);
//     };
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (name !== '' && description !== '' && icon !== null && category_id !== '' && count_to_have !== 0) {
//             router.post('/success', {
//                 'name': name,
//                 'description': description,
//                 'icon': icon,
//                 'category_id': category_id,
//                 'count_to_have': count_to_have
//             });
//         }
//         clearInput();
//     };
//
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
//         >
//             <Head title="Dashboard"/>
//
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="container mx-auto mt-10 animate-fadeIn text-center pb-10">
//                             <form onSubmit={handleSubmit} className="mt-4">
//                                 <div className="mb-4">
//                                     <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
//                                         Nom :
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         placeholder="Insérer l'URL ici"
//                                         value={name}
//                                         onChange={handleNameChange}
//                                         className="py-2 px-4 border w-64 transition duration-300 focus:outline-none focus:border-blue-500"
//                                         required
//                                     />
//                                 </div>
//
//                                 <div className="mb-4">
//                                     <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
//                                         Description :
//                                     </label>
//                                     <textarea
//                                         id="description"
//                                         name="description"
//                                         placeholder="Insérer la description ici"
//                                         value={description}
//                                         // @ts-ignore
//                                         onChange={handleDescriptionChange}
//                                         className="py-2 px-4 border w-64 transition duration-300 focus:outline-none focus:border-blue-500"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="icon" className="block text-gray-700 text-sm font-bold mb-2">
//                                         Image :
//                                     </label>
//                                     <input
//                                         type="file"
//                                         id="icon"
//                                         name="icon"
//                                         onChange={(e) => handleIconChange(e)}
//                                         className="py-2 px-4 border w-64 transition duration-300 focus:outline-none focus:border-blue-500"
//                                         accept="image/*"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
//                                         Catégorie :
//                                     </label>
//                                     <select
//                                         id="category"
//                                         name="category"
//                                         value={category_id}
//                                         // @ts-ignore
//                                         onChange={handleCategoryChange}
//                                         className="py-2 px-4 border w-64 transition duration-300 focus:outline-none focus:border-blue-500"
//                                         required
//                                     >
//                                         <option value="">
//                                             Sélectionner une catégorie
//                                         </option>
//                                         {allCategory.map((category) => (
//                                             <option key={category.id} value={category.id}>{category.category}</option> // Added key prop for mapping elements
//                                         ))}
//                                     </select>
//                                 </div>
//
//                                 <div className="mb-4">
//                                     <label htmlFor="count_to_have"
//                                            className="block text-gray-700 text-sm font-bold mb-2">
//                                         Count to Have :
//                                     </label>
//                                     <input
//                                         type="number"
//                                         id="count_to_have"
//                                         name="count_to_have"
//                                         placeholder="Insérer le nombre pour obtenir le succès"
//                                         value={count_to_have}
//                                         onChange={handleCountToHaveChange}
//                                         className="py-2 px-4 border w-64 transition duration-300 focus:outline-none focus:border-blue-500"
//                                         required
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="py-2 px-4 bg-blue-500 text-white rounded cursor-pointer opacity-80 transition duration-300"
//                                 >
//                                     Créer un succès
//                                 </button>
//                             </form>
//                             {success.length > 0 && (
//                                 <div className="mt-8">
//                                     <div className="carousel-container max-w-2xl mx-auto">
//                                         <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125}
//                                                           totalSlides={success.length}>
//                                             <Slider>
//                                                 {success.map((s) => (
//                                                     <Slide index={s.id} key={s.id} className="carousel-slide">
//                                                         <div className="carousel-content">
//                                                             <img
//                                                                 src={`/uploads/${s.icon}`}
//                                                                 alt={`Icone de ${s.name}`}
//                                                                 className="carousel-image h-200 w-200"
//                                                                 style={{height: '30em', width: '40em'}}
//                                                             />
//                                                             <h1 className="carousel-title underline mb-4 mt-4 text-xl font-bold">{s.name}</h1>
//                                                             <p className="carousel-description border border-gray-300 p-4">{s.description}</p>
//                                                         </div>
//                                                     </Slide>
//
//                                                 ))}
//                                             </Slider>
//                                             {/*<div className="flex justify-between mt-4 pb-10">*/}
//                                             {/*    <ButtonBack*/}
//                                             {/*        className="carousel-button carousel-button-back"> {'<'} </ButtonBack>*/}
//                                             {/*    <ButtonNext*/}
//                                             {/*        className="carousel-button carousel-button-next"> {'>'} </ButtonNext>*/}
//                                             {/*</div>*/}
//                                         </CarouselProvider>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// };
//
// export default AdminSuccess;
