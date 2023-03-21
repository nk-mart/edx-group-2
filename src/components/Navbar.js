export default function Navbar(){
    return (
        
        <nav className="nav">
            <a href= "/"className="site-title text-size 6xl">QuoteNerdy</a>
            <ul>
                 <li>
                    <a href="/save">Save</a>
                </li>
                <li className= "active">
                <a href="/collection">collection</a>
                </li>
              
                
                
            </ul>
        </nav>

    )
}