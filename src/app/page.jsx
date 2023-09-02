import Link from "next/link";

export default function Home() {
  return (
    <Link href={"/filter"} style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", fontSize: "3rem", color: "black", fontWeight: "bold" }}>
      Click here to start your quiz
    </Link>
  )
}
