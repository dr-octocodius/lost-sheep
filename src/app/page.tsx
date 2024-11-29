import Image from "next/image";

import { account, ID } from "@lib/appwrite/client";

export default function Home() {
  console.log(ID.unique());
  return (
    <div>
      <h1 className="text-3xl font-bold font-display">Hello </h1>
    </div>
  );
}
