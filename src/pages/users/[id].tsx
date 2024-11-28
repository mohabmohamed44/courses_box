import Layout from "@/Components/Layout"; // Correct import path
import { sampleUserData } from "@/utils/simple-data";
import { useRouter } from "next/router";

const UserPage = () => {
  const { query } = useRouter();
  const user = sampleUserData.find((user) => user.id === Number(query.id));

  if (!user) {
    return (
      <Layout title="User Not Found">
        <p>User not found</p>
      </Layout>
    );
  }

  return (
    <Layout title={`User: ${user.name}`}>
      <h1>{user.name}</h1>
      <p>ID: {user.id}</p>
    </Layout>
  );
};

export default UserPage;
