import "./Footer.css"

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <div>
            <footer className="footer">{`Copyright © Quote collector ${year}`}</footer>
        </div>
    )

}