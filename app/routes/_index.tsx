import type { MetaFunction } from "@remix-run/node";
import {Link} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div className="whitespace-nowrap">
        <img src="where-is-waldo.jpg" alt="" className="h-screen w-screen object-cover"/>

        <h3 className="absolute z-10 rounded-full text-4xl top-1/2 -mt-28 bg-white font-bold p-6 -translate-x-1/2 left-1/2">
            Where is Waldo?
        </h3>

        <Link
            to={"/game/1"}
            className="
            absolute z-10 text-3xl top-1/2 -translate-x-1/2 left-1/2
            -translate-y-1/2 bg-white px-12 py-6  border-8 border-blue-500
            rounded-full
          ">
          Start
        </Link>
      </div>
  );
}
