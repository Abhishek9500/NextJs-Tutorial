import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({children}:{children:ReactNode}){
    return(
        <section>
            <aside>
                <h2>Dashboard Sidebar</h2>
                <ul>
                    <li><Link href="/dashboard/overview" style={{textDecoration:'none'}}>Overview</Link></li>
                    <li><Link href="/dashboard/analytics" style={{textDecoration:'none'}}>Analytics</Link></li>
                    <li><Link href="/dashboard/setings" style={{textDecoration:'none'}}>Setings</Link></li>

                </ul>
            </aside>
            <div>
                {children}
            </div>
        </section>
    )
}