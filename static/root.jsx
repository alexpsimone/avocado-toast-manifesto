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
    return <div>Welcome to Avocado Toast Manifesto.</div>
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