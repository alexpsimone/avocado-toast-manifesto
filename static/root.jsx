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
        <p> ~*~*~ {props.manifesto} ~*~*~ </p>
    );
}

function Home() {
    return (
        <React.Fragment>
            <div className="home container-fluid">
                <section className="section-1 container-fluid d-flex justify-content-center align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <h1 className="display-4 mx-5">
                                    Avocado Toast Manifesto
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-2 container-fluid d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary" id="manifesto">Generate a Manifesto.</button>
                            <Manifesto manifesto=" "/>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
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