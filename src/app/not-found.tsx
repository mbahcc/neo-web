import Link from "next/link";
import NavBar from "./components/navbar";

export default function NotFound() {
    return(

        <div>
            <NavBar />
            <div className = "error-message-container">
        
                <h1 className = "error-message-header">404 </h1>
                
                <p className = "error-message-subtext">Sorry, we were unable to find that page.</p>
                <div style = {{display: "flex", alignItems: "center", gap: "0.25rem"}}>
                <p className = "error-message-route">Return to</p>
                <p className = "error-message-home-page"><Link href = "/">home page</Link></p>
                </div>
            </div>

        </div>


    )
}