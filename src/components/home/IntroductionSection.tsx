import Image from "next/image";
import {
  DraggableCardContainer,
  DraggableCardBody,
} from "@/components/ui/draggable-card";

import Image1 from "@/assets/images/image_1.webp";
import Image2 from "@/assets/images/image_2.webp";
import Image3 from "@/assets/images/image_3.webp";
import Image4 from "@/assets/images/image_4.webp";
import Image5 from "@/assets/images/image_5.webp";
import Image6 from "@/assets/images/image_6.webp";

const items = [
  {
    title: "",
    image: Image1,
    className: "absolute top-1/2 -translate-y-1/12 left-[20%] rotate-[-5deg]",
  },
  {
    title: "",
    image: Image5,
    className: "absolute top-1/2 -translate-y-5/12 left-[25%] rotate-[-7deg]",
  },
  {
    title: "",
    image: Image3,
    className: "absolute top-1/2 -translate-y-4/12 left-[40%] rotate-[8deg]",
  },
  {
    title: "",
    image: Image4,
    className: "absolute top-1/2 -translate-y-1/12 left-[55%] rotate-[10deg]",
  },
  {
    title: "",
    image: Image6,
    className: "absolute top-1/2 -translate-y-0/12 right-[35%] rotate-[2deg]",
  },
  {
    title: "",
    image: Image2,
    className: "absolute top-1/2 -translate-y-2/12 left-[45%] rotate-[-7deg]",
  },
];

export default function IntroductionSection() {
  return (
    <section>
      <DraggableCardContainer className="relative flex min-h-screen w-full  justify-center overflow-clip">
        <div className="max-w-4xl my-16 px-6">
          <blockquote className="border-l-4 border-neutral-700 pl-6 mb-12">
            <p className="text-xl md:text-2xl italic text-neutral-600 mb-4">
              &quot;The privilege of a lifetime is to become who you truly
              are.&quot;
            </p>
            <cite className="text-sm text-neutral-400">— C.G. Jung</cite>
          </blockquote>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
            Explore the fundamental concepts of Jungian psychology through clear
            explanations and profound insights from{" "}
            <i>Jung&apos;s Map of the Soul</i> by Murray Stein.
          </p>
        </div>

        <p className="absolute top-1/2 mx-auto px-6 max-w-md text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
          &quot;Until you make the unconscious conscious, it will direct your
          life and you will call it fate.&quot;
        </p>
        {items.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <Image
              src={item.image}
              alt={item.title || "Illustration"}
              width={320}
              height={320}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            {item.title && (
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            )}
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}
