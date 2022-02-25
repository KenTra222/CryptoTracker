const Layout = ({children, title = "Crypto Tracker"}) =>{
    return(
        <div className="layout">
            <Head >
                <title>{title}</title>
                <link rel='icon' href="/favicon.ico"/>
            </Head>
            <header className="header">
                <Link href='/' passHref>
                    <a>
                        
                    </a>
                </Link>
            </header>
        </div>
    )
}