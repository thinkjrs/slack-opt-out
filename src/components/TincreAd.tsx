"use client";
import Image from "next/image";
import { tincreAdOnClick } from "@/lib/tincreAdOnClick";

export function TincreAdSquare(props: {
  image?: { url?: string; width?: number };
  adtext?: string;
}) {
  return props.image ? (
    <Image
      src={props?.image?.url || ""}
      className="rounded-full dark:bg-gray-300"
      alt={`${props?.adtext || "ad"} image`}
      priority={true}
      width={props?.image?.width || 40}
      height={props?.image?.width || 40}
      sizes="(max-width: 80px) 100vw, 40px"
    />
  ) : null;
}
export const TincreAd = (props: {
  url?: string;
  adtext?: string;
  image?: { url?: string; width?: number };
}) => {
  return (
    <a
      onClick={async (event) => await tincreAdOnClick(event, props)}
      href={props?.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex px-3 py-1 space-x-2 font-sans text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm shadow-primary-light dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 place-items-center right-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 hover:bg-slate-100 hover:text-slate-900 hover:dark:bg-trueGray-800 hover:dark:text-trueGray-400 hover:border-primary-bold hover:border-2 transition duration-300 ease-in-out hover:drop-shadow-xl hover:scale-105 group hover:dark:bg-slate-600 hover:dark:text-slate-200"
    >
      <TincreAdSquare {...props} />
      <span>
        {props?.adtext}{" "}
        <span className="group-hover:animate-pulse group-hover:text-primary-bold group-hover:dark:text-slate-50">
          ↗
        </span>
      </span>
    </a>
  );
};
