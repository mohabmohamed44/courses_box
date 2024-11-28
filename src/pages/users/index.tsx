import Link from "next/link";
import Layout from "@/Components/Layout";
import { sampleUserData } from "@/utils/simple-data";

const UsersPage = () => (
  <Layout title="Users">
    <h1 className="text-2xl text-center">Users</h1>
    <div className="flex justify-center items-center mt-4">
      <ul className="list-none menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box text-center">
        {sampleUserData.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default UsersPage;
