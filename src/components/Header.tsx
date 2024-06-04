import Link from "next/link";

export default function Header() {
  return (
    <div className="relative h-screen text-white overflow-hidden bg-transparent -mt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Slack is training models on your corporate secrets.
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          {`Here's a simple tool to opt-out from this horrific behavior.`}
        </p>
        <Link
          href="#interaction-container"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Snail mail them now
        </Link>
      </div>
    </div>
  );
}
