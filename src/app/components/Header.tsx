import Link from "next/link"
export default function Header() {
    return (
        <>
        <div className="header">
            <Link href="/dashboard">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="/dashboard/apitesting">Users</Link>
            <Link href="/dashboard/gallery">Products</Link>
            <Link href="#">Contact Us</Link>
        </div>
        </>
    )
}