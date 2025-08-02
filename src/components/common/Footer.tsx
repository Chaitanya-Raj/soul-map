import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" py-4 px-6 bg-neutral-950">
      <ul className="max-w-7xl mx-auto flex justify-center gap-4 text-neutral-400">
        <li>
          <Link href="https://chaitanyaraj.dev">Who made this?</Link>
        </li>
        <li>
          <Link href="#">Why?</Link>
        </li>
        <li>
          <Link href="https://github.com/Chaitanya-Raj">Wanna see more?</Link>
        </li>
      </ul>
    </footer>
  );
}
