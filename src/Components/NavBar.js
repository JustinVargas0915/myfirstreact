const NavBar =() =>{
    return(
        <div>
            <nav class="navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid"/>
                    <a class="navbar-brand" href="/">ICS2608</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            <a class="nav-link" href="/employees">Employees</a>
                            <a class="nav-link" href="#">Add employee</a>
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled>Disabled</a>
                        </div>

                </div>
            </nav>
        </div>
    )
}
export default NavBar