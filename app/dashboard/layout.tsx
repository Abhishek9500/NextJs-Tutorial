import type { ReactNode } from "react";

export default function RootLayout({children}:{children:ReactNode}){
    return(
        <section>
            <aside>
                <h2>Dashboard Sidebar</h2>
                <ul>
                    <li><a href="/dashboard/overview" style={{textDecoration:'none'}}>Overview</a></li>
                    <li><a href="/dashboard/analytics" style={{textDecoration:'none'}}>Analytics</a></li>
                    <li><a href="/dashboard/setings" style={{textDecoration:'none'}}>Setings</a></li>

                </ul>
            </aside>
            <div>
                {children}
            </div>
        </section>
    )
}