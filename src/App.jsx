import './App.css';
import {Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import marriage from "./assets/marriage.png";
import babyShower from "./assets/icons8-confetti-48.png";
import conference from "./assets/icons8-conference-48.png";
import feteDeNaissance from "./assets/icons8-schedule-48.png";
import anniversaire from "./assets/icons8-birthday-80.png";
import register from "./assets/inscription.png";
import cup from "./assets/cup.png";
import annonce from "./assets/annonces.png";
import makeup from "./assets/makeup.png";
import makeupImg from "./assets/makeupimg.jpg";
import backgroundImage from "./assets/image3.jpg";
import React from "react";

function App() {
    return (
            <div>
                <nav>
                    <NavBar/>
                </nav>
                <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '90vh' }}>
                    <div className="w-[55%] mx-auto">
                        <div className="py-[140px]">
                            <div>
                                <h1 className="text-8xl font-medium font-serif">Un Clic, <span className="text-yellow-600">vos</span></h1>
                                <h1 className="text-8xl font-medium font-serif"><span className="text-yellow-600">événements</span> bine</h1>
                                <h1 className="text-8xl font-medium font-serif">yedik</h1>
                                <p className="py-5 text-gray-500 text-xl font-serif font-medium">Découvrons les meilleurs Prestataires des évenements</p>
                            </div>
                            <div className="bg-white rounded-md shadow-lg">
                                <div className="flex gap-3 py-4 px-5">
                                    <div>
                                        <div className="relative flex items-center text-black">
                                            <span className="absolute">
                                                  <svg
                                                      className="w-7 h-7 mx-3 text-gray-900 bg-gray-400 py-1 rounded-md"
                                                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                      height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
                                                </svg>
                                            </span>
                                            <input type="text" placeholder="Que recherchez-vous ?"
                                                   className="block w-full py-4 text-black font-serif text-lg placeholder-black bg-white border border-gray-200 rounded-md pl-11 pr-5 rtl:pr-11 rtl:pl-5  dark:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="relative flex items-center">
                                            <span className="absolute">
                                                <svg className="w-7 h-7 mx-3 text-gray-900 bg-gray-400 py-1 rounded-md"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                     height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
                                                </svg>
                                            </span>
                                            <div id="custom-select">
                                                <select
                                                    className="block w-[270px] py-[19px] text-black font-serif text-lg placeholder-black bg-white border border-gray-200 rounded-md pl-11 pr-5 rtl:pr-11 rtl:pl-5  dark:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40">
                                                    <option>Tous les catégories</option>
                                                    <option className="" value="option1">Marriage</option>
                                                    <option className="" value="option2">Fete de naissance</option>
                                                    <option className="" value="option2">Anniversaire</option>
                                                    <option className="" value="option2">Conférence</option>
                                                    <option className="" value="option3">BabyShower</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="relative flex items-center">
                                            <div className="absolute">
                                                <svg className="w-7 h-7 mx-3 text-gray-900 bg-gray-400 py-1 rounded-md"
                                                     aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                                                </svg>
                                            </div>
                                            <input type="text" placeholder="Ville (Ex: Casablanca)"
                                                   className="block w-full py-4 text-black font-serif text-lg placeholder-black bg-white border border-gray-200 rounded-md pl-11 pr-5 rtl:pr-11 rtl:pl-5  dark:text-gray-800 dark:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                    </div>

                                    <div
                                        className="text-white bg-black py-4 px-8 rounded-sm font-serif font-medium ">
                                        <div className="flex justify-center items-center gap-10">
                                            <button className="">Rechercher</button>
                                            <svg className="w-5 h-5 dark:text-white" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-5 py-10">
                                <div
                                    className="flex flex-col justify-center text-center items-center border-2 border-gray-400 py-3 rounded-md cursor-pointer px-5 hover:bg-[#fce404 ] hover:text-white duration-500">
                                    <img className="w-12 h-12" src={marriage} alt=""/>
                                    <h1 className="font-serif font-medium  py-1">Marriage</h1>
                                </div>
                                <div
                                    className="flex flex-col justify-center text-center items-center border-2 border-gray-400 py-3 rounded-md cursor-pointer px-5 hover:bg-[#fce404 ] hover:text-white duration-500">
                                    <img className="w-12 h-12" src={anniversaire} alt=""/>
                                    <h1 className="font-serif font-medium  py-1">Anniversaire</h1>
                                </div>
                                <div
                                    className="flex flex-col justify-center text-center items-center border-2 border-gray-400 py-3 rounded-md cursor-pointer px-5 hover:bg-[#fce404 ] hover:text-white duration-500">
                                    <img className="w-12 h-12" src={feteDeNaissance} alt=""/>
                                    <h1 className="font-serif font-medium  py-1">Fete de naissance</h1>
                                </div>
                                <div
                                    className="flex flex-col justify-center text-center items-center border-2 border-gray-400 py-3 rounded-md cursor-pointer px-5 hover:bg-[#fce404 ] hover:text-white duration-500">
                                    <img className="w-12 h-12" src={babyShower} alt=""/>
                                    <h1 className="font-serif font-medium  py-1">BabyShower</h1>
                                </div>
                                <div
                                    className="flex flex-col justify-center text-center items-center border-2 border-gray-400 py-3 rounded-md cursor-pointer px-5 hover:bg-[#fce404 ] hover:text-white duration-500">
                                    <img className="w-12 h-12" src={conference} alt=""/>
                                    <h1 className="font-serif font-medium  py-1">Conférence</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[60%] mx-auto">
                    <h1 className="text-5xl fornt-medium font-serif text-center py-14">Vous étes Prestataire <span
                        className="text-yellow-600">des événements</span> ?</h1>
                    <p className="text-gray-500 font-serif font-medium text-lg text-center">C'est avec plaisir que nous
                        accueillons tous les prestataires d'événements ! Publiez vos annonces et partagez votre talent
                        avec notre communauté passionnée.</p>
                    <div className="flex justify-center  text-center gap-5 mt-16">
                        <div className="flex flex-col text-center items-center w-[37%] h-[100%]">
                            <img className="h-24 w-24 bg-yellow-600 rounded-full px-2 py-2" src={register} alt=""/>
                            <h1 className="text-center text-2xl font-serif font-medium py-5">S'inscrire</h1>
                            <p className="text-gray-500 font-serif font-medium text-lg ">En vous inscrivant sur notre
                                plateforme, vous pouvez tout de suite profiter d'un tableau de bord rempli d'outils
                                pratiques pour mieux gérer vos clients. C'est vraiment utile pour vous simplifier la vie
                                !</p>
                        </div>
                        <div className="flex flex-col text-center items-center w-[36%] h-[100%]">
                            <img className="h-24 w-24 bg-yellow-600 rounded-full px-2 py-2" src={annonce} alt=""/>
                            <h1 className="text-center text-2xl font-serif font-medium py-5">Publier votre annonce</h1>
                            <p className="text-gray-500 font-serif font-medium text-lg ">Quand vous publiez votre
                                annonce avec des images sur notre site, vous avez de fortes chances de rencontrer de
                                nouveaux clients. C'est une belle opportunité pour élargir votre clientéle !</p>
                        </div>
                        <div className="flex flex-col text-center items-center w-[35%] h-[100%]">
                            <img className="h-24 w-24 bg-yellow-600 rounded-full px-2 py-2" src={cup} alt=""/>
                            <h1 className="text-center text-2xl font-serif font-medium py-5">Découvrir des nouveaux
                                clients</h1>
                            <p className="text-gray-500 font-serif font-medium text-lg ">Explorez et connectez vous avec
                                une clientéle désireuse d'organiser des événements exceptionnels !</p>
                        </div>
                    </div>

                    <div className="py-24">
                        <h1 className="font-medium font-serif text-gray-500 text-md bg-zinc-400 px-6 py-1 w-56 rounded-md">Découvrez les nouveautés</h1>
                        <h1 className="text-4xl text-black font-serif font-medium py-5">Nouvelles annonces des prestataires</h1>

                        <div className="flex justify-between mt-24 py-10">
                            <div className="bg-black px-12 py-2 rounded-sm">
                                <button className="text-xl font-serif font-medium text-white">Tous</button>
                            </div>
                            <div className="flex justify-center items-center gap-10 bg-yellow-600 px-8 py-2 rounded-sm">
                                <button className="text-xl font-serif font-medium text-white">Voir tous</button>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="border border-gray-500 w-[28%] rounded-md hover:shadow-2xl ">
                                <img className="h-[250px] w-full transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-80" src={makeupImg} alt=""/>
                                <div className="flex gap-2 px-3 mt-3 ">
                                    <h1 className="text-xl font-serif font-medium">Make up artist</h1>
                                    <img className="w-[26px] h-[26px] " src={makeup} alt=""/>
                                </div>
                                <div className="flex gap-2 px-3  py-3 ">
                                    <svg className="w-6 h-6 bg-yellow-600 px-1 py-1 dark:text-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                                    </svg>
                                    <p className="text-md font-serif font-medium text-gray-500 ">Casablanca, Maroc</p>
                                </div>
                                <div className="w-full h-[1px] bg-gray-500"></div>
                                <div className="flex justify-between items-center px-5">
                                    <div className=" py-4 flex justify-center items-center gap-2">
                                        <div className="border-gray-400 border px-1 py-1 rounded-full  hover:border-yellow-500 duration-500">
                                            <svg className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                            </svg>
                                        </div>
                                        <div className="border-gray-400 border px-1 py-1 rounded-full hover:text-yellow-500 hover:border-yellow-500">
                                            <svg className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
                                            </svg>
                                        </div>
                                        <div className="border-gray-400 border px-1 py-1 rounded-full hover:text-yellow-500 hover:border-yellow-500">
                                            <svg className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 font-serif font-medium">66 Vue</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
    );
}

export default App;
