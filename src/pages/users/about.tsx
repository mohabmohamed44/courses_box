import Layout from "@/Components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1 className="text-center font-semibold mt-4 text-xl">About Page</h1>
      <p className="text-center font-normal text-lg mt-4">This is the about page of the Next.js + TypeScript example app.</p>
      <p className="m-auto text-center mt-5">
        <Link href="/" className="p-3 w-3 h-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:transition-colors hover:duration-300">Go home</Link>
      </p>
    </Layout>
  );
}
