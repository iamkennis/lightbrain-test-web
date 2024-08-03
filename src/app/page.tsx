"use client"
import Features from "@/components/Features";
import Header from "@/components/Header";
import { ReactLenis } from "@studio-freight/react-lenis";
export default function Home() {
  return (
    <ReactLenis
    root
    options={{
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    }}
  >
    <main>
     <Header/>
     <Features/>
    </main>
    </ReactLenis>
  );
}
