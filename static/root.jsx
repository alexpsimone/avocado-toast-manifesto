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
            <nav className="navbar navbar-expand-md nav-transparent w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img className="logo navbar-brand" src='https://www.freelogodesign.org/file/app/client/thumb/13ac783b-60c3-4149-8837-df59c19139a4_200x200.png?1608095327655'></img>Avocado Toast Manifesto</a>
                    <div id="navbar" className="navbar-collapse collapse navbar-expand-lg">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/manifesto">Generate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

function SectionManifesto() {
    return (
        <React.Fragment>
                <section className="section-2 container-fluid d-flex justify-content-center align-items-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 justify-content-center">
                            <Manifesto manifesto="Nobody should ever put goat cheese, or really any cheese, on avocado toast. There's already so much fat content with the avocado; the flavors would get lost in each other. And avocado toast should always employ generous use of salt. No exceptions."/>
                            <button className="btn btn-primary btn-lg" id="manifesto">Generate a Manifesto <i className="fas fa-bread-slice"></i></button>
                        </div>
                    </div>
                </section>
        </React.Fragment>
    );
}

function SectionLandingPhoto() {
    return (
        <React.Fragment>
                <section className="section-1 container-fluid d-flex justify-content-start align-items-start"></section>
        </React.Fragment>
    );
}

function Home() {
    return (
        <React.Fragment>
            <div className="home container-fluid">
                <NavBar />
                <SectionLandingPhoto />
                <SectionManifesto />
            </div>
        </React.Fragment>
    );
}

function About() {
    return (
        <React.Fragment>
            <div>
                <NavBar />
            </div>
        </React.Fragment>
    );
}



function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))