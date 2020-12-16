const Router = ReactRouterDOM.BrowserRouter;
const Route =  ReactRouterDOM.Route;
const Link =  ReactRouterDOM.Link;
const Prompt =  ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;
const useParams = ReactRouterDOM.useParams;
const useHistory = ReactRouterDOM.useHistory;
// same as the above but using destructing syntax 
// const { useHistory, useParams, Redirect, Switch, Prompt, Link, Route } = ReactRouterDOM;

function Manifesto(props) {

    return (
            <p className="manifesto-text">"{props.manifesto}"</p>
    );
}

function NavBar() {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-md nav-transparent w-100">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">Transparent Nav</a>
                <div id="navbar" class="navbar-collapse collapse navbar-expand-lg">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Another One</a>
                    </li>
                    </ul>
                </div>
                <p class="my-auto">
                    Show off your background image with a transparent navbar.
                </p>
                </div>
            </nav>
        </React.Fragment>
    );
}

function Home() {
    return (
        <React.Fragment>
            <div className="home container-fluid">
                <NavBar />
                <section className="section-1 container-fluid d-flex justify-content-start align-items-start">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <h1 className="home-title display-4 mx-5">
                                    Avocado Toast Manifesto
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-2 container-fluid d-flex justify-content-center align-items-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 justify-content-center">
                            <Manifesto manifesto="Nobody should ever put goat cheese, or really any cheese, on avocado toast. There's already so much fat content with the avocado; the flavors would get lost in each other. And avocado toast should always employ generous use of salt. No exceptions."/>
                            <button className="btn btn-primary btn-lg" id="manifesto">Generate a Manifesto <i class="fas fa-bread-slice"></i></button>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}



function App() {
    return (
        <Router>
            <div>
                <switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                </switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))