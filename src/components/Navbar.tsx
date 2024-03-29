import { gitHubOauthUrl } from "@/constants/urls";
import { getCookie } from "@/utils/cookiesHelper";
import Link from "next/link";

export default async function Navbar() {
  const token = await getCookie("accessToken");

  return (
    <nav className="bg-primary p-6 fixed z-10 top-0 left-0 right-0">
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {!token && (
          <li>
            <Link href={gitHubOauthUrl}>login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
