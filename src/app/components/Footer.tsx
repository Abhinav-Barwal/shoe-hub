import Link from "next/link"
export default function Footer() {
    return(
        <>
        <div className="footer">
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Services</Link>
            <div className="copyright">
                @2025 Abhinav Barwal copyright reserved
            </div>
        </div>

        </>
    )
}