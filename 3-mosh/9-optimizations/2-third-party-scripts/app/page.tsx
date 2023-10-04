import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import cofee from "@/public/images/cofee.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      {/* <Image src={cofee} alt="Cofee" /> */}
      <Image
        src="https://bit.ly/react-cover"
        alt="Cofee"
        // --- This is how to set image to fix size ---
        // width={300}
        // height={170}

        // --- This is how to set image to fit size ---
        fill
        // --- This is how to use CSS Styling ---
        // style={{ objectFit: "cover" }}

        // --- This is how to use TailwindCSS Styling
        className="object-cover"
        sizes="(max-witdth: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
