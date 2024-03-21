import React from "react";
import facebook from "./Assets/icon-facebook.svg";
import instagram from "./Assets/icon-instagram.svg";
import twitter from "./Assets/icon-twitter.svg";
import youtube from "./Assets/icon-youtube.svg";
import up from "./Assets/icon-up.svg";
import down from "./Assets/icon-down.svg";

export default function OverviewComponent() {
  return (
    <>
      <h2 className="text-slate-600 font-bold mb-8 text-2xl md:text-3xl dark:text-white">Overeview - Today</h2>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
                <li className="text-slate-600 font-bold dark:text-slate-400">Page Views</li>
                <li><img src={facebook} alt="Facebook" /></li>
            </ul>
            <ul className="flex items-center justify-between">
                <li className="font-bold text-slate-800 text-3xl dark:text-white">87</li>
                <li className="flex items-center text-emerald-600 font-bold text-sm "><img src={up} alt="" className="w-3 mr-2" /> 3%</li>
            </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
                <li className="text-slate-600 font-bold dark:text-slate-400">Likes</li>
                <li><img src={facebook} alt="Facebook" /></li>
            </ul>
            <ul className="flex items-center justify-between">
                <li className="font-bold text-slate-800 text-3xl dark:text-white">52</li>
                <li className="flex items-center text-rose-600 font-bold text-sm "><img src={down} alt="" className="w-3 mr-2" /> 2%</li>
            </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
                <li className="text-slate-600 font-bold dark:text-slate-400">Likes</li>
                <li><img src={instagram} alt="Facebook" /></li>
            </ul>
            <ul className="flex items-center justify-between">
                <li className="font-bold text-slate-800 text-3xl dark:text-white">5462</li>
                <li className="flex items-center text-emerald-600 font-bold text-sm "><img src={up} alt="" className="w-3 mr-2" /> 2257%</li>
            </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
                <li className="text-slate-600 font-bold dark:text-slate-400">Profile Views</li>
                <li><img src={instagram} alt="Facebook" /></li>
            </ul>
            <ul className="flex items-center justify-between">
                <li className="font-bold text-slate-800 text-3xl dark:text-white">52k</li>
                <li className="flex items-center text-emerald-600 font-bold text-sm "><img src={up} alt="" className="w-3 mr-2" /> 1375%</li>
            </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
                <li className="text-slate-600 font-bold dark:text-slate-400">Retweets</li>
                <li><img src={twitter} alt="twitter" /></li>
            </ul>
            <ul className="flex items-center justify-between">
                <li className="font-bold text-slate-800 text-3xl dark:text-white">117</li>
                <li className="flex items-center text-emerald-600 font-bold text-sm "><img src={up} alt="" className="w-3 mr-2" /> 303%</li>
            </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
                <li className="text-slate-600 font-bold dark:text-slate-400">Likes</li>
                <li><img src={twitter} alt="twitter" /></li>
            </ul>
            <ul className="flex items-center justify-between">
                <li className="font-bold text-slate-800 text-3xl dark:text-white">507</li>
                <li className="flex items-center text-emerald-600 font-bold text-sm "><img src={up} alt="" className="w-3 mr-2" /> 1375%</li>
            </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
                <li className="text-slate-600 font-bold dark:text-slate-400">Likes</li>
                <li><img src={youtube} alt="youtube" /></li>
            </ul>
            <ul className="flex items-center justify-between">
                <li className="font-bold text-slate-800 text-3xl dark:text-white">107</li>
                <li className="flex items-center text-rose-600 font-bold text-sm "><img src={down} alt="" className="w-3 mr-2" /> 19%</li>
            </ul>
        </article>

        <article className="bg-slate-200 p-5 rounded shadow shadow-slate-50 dark:bg-slate-800 dark:shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
                <li className="text-slate-600 font-bold dark:text-slate-400">Total Views</li>
                <li><img src={youtube} alt="youtube" /></li>
            </ul>
            <ul className="flex items-center justify-between">
                <li className="font-bold text-slate-800 text-3xl dark:text-white">1407</li>
                <li className="flex items-center text-rose-600 font-bold text-sm "><img src={down} alt="" className="w-3 mr-2" /> 12%</li>
            </ul>
        </article>
      </section>
    </>
  );
}
