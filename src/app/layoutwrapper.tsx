'use client'
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layoutwrapper({children}: {children: React.ReactNode}) {
    const pathname = usePathname();
    const hidelayout = pathname.startsWith('/login-page');

    return (
        <>
            {!hidelayout && <Navbar/>}
            <main>{children}</main>
            {!hidelayout && <Footer/>}
        </>
    );
}