import React from 'react';
import logo from '/src/assets//logo.png'

const NavBar = () => {
    return (
        <div>
        <div className="flex justify-between px-10 py-2 shadow-gray shadow-md">
            <div className="flex gap-32">
                <img className="w-24 h-16" src={logo} alt=""/>
                <ul className="flex gap-16 py-5 font-serif font-medium text-md">
                    <div className="flex gap-3 justify-center items-center ">
                        <div id="marriage-icons"  className="w-[6px] h-[6px] rounded-lg bg-yellow-500 hidden"></div>
                        <li id="marriage-btn"
                            onMouseEnter={() => document.getElementById('marriage').classList.remove('hidden')} >Marriage
                        </li>
                        <svg id="marriage-icons" className="w-4 h-4 text-gray-800 hidden" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m8 10 4 4 4-4"/>
                        </svg>
                    </div>
                    <li>Fete de naissance</li>
                    <li>BabyShower</li>
                    <li>Anniversaire</li>
                    <li>Conférence</li>
                </ul>
            </div>
            <div className="text-white bg-yellow-600 py-3 px-12 rounded-md font-serif font-medium mt-2">
                <div className="flex justify-center items-center gap-10 mt-1">
                <button className="">Publier Votre Annonce</button>
                    <svg className="w-5 h-5 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-5-4v4h4V3h-4Z"/>
                    </svg>
                </div>
            </div>
        </div>
            <div id="marriage" onMouseLeave={() => document.getElementById('marriage').classList.add('hidden')} className="bg-white w-[450px] h-[310px] ml-[240px] mt-1 shadow-2xl hidden">
                    <ul className="px-6 py-2 font-serif font-medium text-md">
                        <li>Traiteur Pour Mariage</li>
                        <div className="flex justify-between">
                            <li>Lieu de réception</li>
                            <svg className="w-4 h-4 text-gray-800 " aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m10 16 4-4-4-4"/>
                            </svg>
                        </div>
                        <li>Nagafa (Planification de marriage)</li>
                        <li>Tyafer / Chocolatier</li>
                        <li>Photographe et vidéographe</li>
                        <div className="flex justify-between">
                            <li>Musique</li>
                            <svg className="w-4 h-4 text-gray-800 " aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m10 16 4-4-4-4"/>
                            </svg>
                        </div>
                        <li>Serveur Freelance</li>
                        <li>Femme de Menage Freelance</li>
                        <li>Agence de voyage (Lien de Miel)</li>
                        <li>Patisserie / Wedding Cake</li>
                        <li>Adoul / Cérémonie</li>
                        <li>Locataire des Robes de mariée et tenues pour le marié</li>
                    </ul>
            </div>
        </div>
    );
};

export default NavBar;