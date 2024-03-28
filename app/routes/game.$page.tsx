import {LoaderFunctionArgs} from "@remix-run/node";
import {useLoaderData, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import { twMerge } from 'tailwind-merge'

const shuffle = (inputArray: any[]) => {
    const array = [...inputArray];
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const questions = [
    {
        question: "What is COST?",
        answers: [
            {description: "Cloud Optimization Savings Tracker", isCorrect: true},
            {description: "Cats Organizing Secret Talks", isCorrect: false},
            {description: "Cheese Orbiting Space Team", isCorrect: false},
            {description: "Cartoon Overload Streaming Technology", isCorrect: false}
        ]
    },

    {
        question: "FaaS?",
        answers: [
            {description: "Finances as a Service", isCorrect: true},
            {description: "Frogs as Artistic Swimmers", isCorrect: false},
            {description: "Flamingos Adopting Antelope Strategies", isCorrect: false},
            {description: "Furniture as a Snack", isCorrect: false}
        ]
    },

    {
        question: "IAC",
        answers: [
            {description: "Infrastructure as Code", isCorrect: true},
            {description: "Ice Cream as Currency", isCorrect: false},
            {description: "Invisible Alien Cats", isCorrect: false},
            {description: "Instantly Appearing Cupcakes", isCorrect: false}
        ]
    },

    {
        question: "OPEX",
        answers: [
            {description: "Operational Expenditure", isCorrect: true},
            {description: "Octopuses Painting Exteriors", isCorrect: false},
            {description: "Origami Penguins Expedition", isCorrect: false},
            {description: "Overly Polite Extraterrestrials", isCorrect: false}
        ]
    },

    {
        question: "LOG",
        answers: [
            {description: "Logging Optimization Gateway", isCorrect: true},
            {description: "Lizards Organizing Galas", isCorrect: false},
            {description: "Lemons Over Gravity", isCorrect: false},
            {description: "Laughter-Operated Generator", isCorrect: false}
        ]
    },

    {
        question: "MTTR",
        answers: [
            {description: "Mean Time to Repair", isCorrect: true},
            {description: "Mice Training for Triathlons Relay", isCorrect: false},
            {description: "Marshmallows Trying to Relax",
                // img:"/1.png",
                isCorrect: false},
            {description: "Mystery Time-Travel Room", isCorrect: false}
        ]
    },

    {
        question: "SLO",
        answers: [
            {description: "Service Level Objective", isCorrect: true},
            {description: "Squirrels Learning Origami", isCorrect: false},
            {description: "Spaghetti Launching Operations", isCorrect: false},
            {description: "Super Luminous Owls", isCorrect: false}
        ]
    },

    {
        question: "SLI",
        answers: [
            {description: "Service Level Indicator", isCorrect: true},
            {description: "Sea Lions Investigating", isCorrect: false},
            {description: "Sandwich Length Index", isCorrect: false},
            {description: "Silent Laughing Intervals", isCorrect: false}
        ]
    }

]

export async function loader({params}: LoaderFunctionArgs) {
    const question = questions[params.page-1];

    return {
        ...question,
        answers: shuffle(question.answers)
    };
}

export default function GamePage () {
    const page = useLoaderData();
    const navigate = useNavigate();
    const params = useParams();

    const [answers, setAnswer] = useState<number>(null);

    useEffect(() => setAnswer(null), [params.page]);

    useEffect(() => {
        if(answers !== null) {
            setTimeout(() => {
                const page = Number(params.page);
                if ( page === questions.length) navigate(`/result`)
                else navigate(`/game/${page + 1}`)

            }, 1000);
        }
    }, [answers]);


    return <div className="max-w-96 h-screen m-auto gap-6 grid items-center content-center grid-cols-12 text-center">
        <div className="col-span-12 text-4xl font-bold">{page.question}</div>

        <div style={{backgroundImage: `url(${page.answers[0].img})`}} onClick={ () => answers === null && setAnswer(0)} className={twMerge("bg-contain relative cursor-pointer text-xl p-4 rounded-lg col-span-6 aspect-square flex items-center justify-center text-sky-800 bg-sky-100 border-4 transition hover:border-sky-500 border-sky-200", answers === 0 && (page.answers[0].isCorrect ? "border-emerald-500 hover:border-emerald-500 bg-emerald-50 text-emerald-900" : "border-rose-500 hover:border-rose-500 bg-rose-50 text-rose-900"))}>{page.answers[0].description}</div>
        <div style={{backgroundImage: `url(${page.answers[1].img})`}} onClick={ () => answers === null && setAnswer(1)} className={twMerge("bg-contain relative cursor-pointer text-xl p-4 rounded-lg col-span-6 aspect-square flex items-center justify-center text-sky-800 bg-sky-100 border-4 transition hover:border-sky-500 border-sky-200", answers === 1 && (page.answers[1].isCorrect ? "border-emerald-500 hover:border-emerald-500 bg-emerald-50 text-emerald-900" : "border-rose-500 hover:border-rose-500 bg-rose-50 text-rose-900"))}>{page.answers[1].description}</div>
        <div style={{backgroundImage: `url(${page.answers[2].img})`}} onClick={ () => answers === null && setAnswer(2)} className={twMerge("bg-contain relative cursor-pointer text-xl p-4 rounded-lg col-span-6 aspect-square flex items-center justify-center text-sky-800 bg-sky-100 border-4 transition hover:border-sky-500 border-sky-200", answers === 2 && (page.answers[2].isCorrect ? "border-emerald-500 hover:border-emerald-500 bg-emerald-50 text-emerald-900" : "border-rose-500 hover:border-rose-500 bg-rose-50 text-rose-900"))}>{page.answers[2].description}</div>
        <div style={{backgroundImage: `url(${page.answers[3].img})`}} onClick={ () => answers === null && setAnswer(3)} className={twMerge("bg-contain relative cursor-pointer text-xl p-4 rounded-lg col-span-6 aspect-square flex items-center justify-center text-sky-800 bg-sky-100 border-4 transition hover:border-sky-500 border-sky-200", answers === 3 && (page.answers[3].isCorrect ? "border-emerald-500 hover:border-emerald-500 bg-emerald-50 text-emerald-900" : "border-rose-500 hover:border-rose-500 bg-rose-50 text-rose-900"))}>{page.answers[3].description}</div>

    </div>
}