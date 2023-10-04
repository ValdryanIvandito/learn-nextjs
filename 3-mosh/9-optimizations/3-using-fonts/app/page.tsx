"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1 className="font-poppins">Hello World</h1>
      <button onClick={() => setVisible(true)} className="btn btn-neutral">
        Show
      </button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}
