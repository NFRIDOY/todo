import { Link } from "react-router-dom"


export default function Footer() {
    let date = new Date()
    return (
        <footer className="footer footer-center p-4 bg-neutral text-white font-semibold w-auto">
            <aside>
                <p> © {date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear() } - Developed By <Link to={"https://github.com/NFRIDOY"} className="text-violet-300 font-black">Md. Noman Faysal Ridoy</Link></p>
            </aside>
        </footer>
    )
}
