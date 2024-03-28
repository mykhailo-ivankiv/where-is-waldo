import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Where is Waldo?</title>
        <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤪</text></svg>"
        />
        <Meta/>
        <Links/>
    </head>
    <body>
    {children}
    <ScrollRestoration/>
    <Scripts/>
    </body>
    </html>
  );
}

export default function App() {
    return <Outlet />;
}
