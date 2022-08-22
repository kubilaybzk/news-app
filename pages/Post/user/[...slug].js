import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/Layout/Layout";

export default function AllDetails() {
  const router=useRouter();
  const test=router.query;

  return (
    <>
     <Layout title={"PostDetails"}>
      {JSON.stringify(test)}
     </Layout>
    </>
  );
}
