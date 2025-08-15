import Link from "next/link"
import logo from "../public/images/logo.png"
import Image from "next/image"
export default function Logo() {
  return (
    <div className="flex justify-center w-full  items-center">
      <Link href={"/"}>
        <Image width={60} height={60} src={logo} alt="logo" />{" "}
      </Link>
    </div>
  )
}
