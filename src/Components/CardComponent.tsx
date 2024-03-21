import React from "react";
import facebook from "./Assets/icon-facebook.svg";
import instagram from "./Assets/icon-instagram.svg";
import twitter from "./Assets/icon-twitter.svg";
import youtube from "./Assets/icon-youtube.svg";
import up from "./Assets/icon-up.svg";
import down from "./Assets/icon-down.svg";

export default function CardComponent(props: any) {
   return (
    <>
    
    <section className="py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-600">
        <ul className="flex items-center justify-center text-center">
          <li>
            <img src={facebook} alt="" className="mr-2"/>
          </li>
          <li className="text-sm text-slate-600 font-bold dark:text-slate-400">@nathanf</li>
        </ul>
        <h2 className="text-5xl font-bold text-slate-800 text-center my-5 dark:text-white">
          1987 <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400">Followers</span>
        </h2>
        <p className="text-center text-emerald-600 flex items-center justify-center font-bold">
          <img src={up} alt="" className="mr-2 w-3"/> 12 Today
        </p>
      </article>

      <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-500">
        <ul className="flex items-center justify-center text-center">
          <li>
            <img src={twitter} alt="" className="mr-2"/>
          </li>
          <li className="text-sm text-slate-600 font-bold dark:text-slate-400">@nathanf</li>
        </ul>
        <h2 className="text-5xl font-bold text-slate-800 text-center my-5 dark:text-white">
          1044 <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400">Followers</span>
        </h2>
        <p className="text-center text-emerald-600 flex items-center justify-center font-bold">
          <img src={up} alt="" className="mr-2 w-3"/> 99 Today
        </p>
      </article>

      <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 relative">
        <div className="bg-gradient-to-r from-[#fdc468] to-[#df4996] h-2 w-full rounded-tl-lg rounded-tr-lg absolute top-0 left-0"></div>
        <ul className="flex items-center justify-center text-center">
          <li>
            <img src={instagram} alt="" className="mr-2"/>
          </li>
          <li className="text-sm text-slate-600 font-bold dark:text-slate-400">@realnathanf</li>
        </ul>
        <h2 className="text-5xl font-bold text-slate-800 text-center my-5 dark:text-white">
          11k <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400">Followers</span>
        </h2>
        <p className="text-center text-emerald-600 font-bold flex items-center justify-center">
          <img src={up} alt="" className="mr-2 w-3"/> 1099 Today
        </p>
      </article>

      <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-red-700">
        <ul className="flex items-center justify-center text-center">
          <li>
            <img src={youtube} alt="" className="mr-2"/>
          </li>
          <li className="text-sm text-slate-600 font-bold dark:text-slate-400">@nathanf</li>
        </ul>
        <h2 className="text-5xl font-bold text-slate-800 text-center my-5 dark:text-white">
          8329 <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400">Subscribers</span>
        </h2>
        <p className="text-center text-rose-600 font-bold flex items-center justify-center">
          <img src={down} alt="" className="mr-2 w-3"/> 144 Today
        </p>
      </article>
    </section>
    </>
  );
}
