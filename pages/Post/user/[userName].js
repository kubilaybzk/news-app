import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/Layout/Layout";

export default function UserDetails() {
  const router = useRouter();
  const { userName } = router.query;

  return (
    <Layout title={"UserName"}>
      <div>{userName}</div>
    </Layout>
  );
}
