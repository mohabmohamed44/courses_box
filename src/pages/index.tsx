import Link from "next/link";
import Layout from "@/Components/Layout";

export default function Home() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="text-center mt-3">Hello Next.js 👋</h1>
      <div className="mx-auto text-center mt-5">
        <Link href="/users/about" className="p-3 w-3 h-3 bg-red-500 text-white rounded-md hover:bg-red-600 hover:transition-colors hover:duration-300">
          <button >Go to About</button>
        </Link>
      </div>
    </Layout>
  );
}
