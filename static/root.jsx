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

function Home() {
    return (
        <React.Fragment>
            <div class="home container-fluid">
                <section class="section-1 container-fluid d-flex justify-content-center align-items-center">
                    <div class="row">
                        <div class="col">
                            <p class="display-4 mx-5">
                                Avocado Toast Manifesto
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section-2 container-fluid d-flex justify-content-center align-items-center">
                    <div class="row">
                        <div class="col">
                            <p class="display-4 mx-5">
                                I'll put some welcome text here.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section-3 container-fluid d-flex justify-content-center align-items-center">
                    <div class="row">
                        <div class="col">
                            <p class="display-4 mx-5">
                                Thing1
                            </p>
                        </div>
                        <div class="col">
                            <p class="display-4 mx-5">
                                Thing 2
                            </p>
                        </div>
                        <div class="col">
                            <p class="display-4 mx-5">
                                Thing 3
                            </p>
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