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

function NavBar() {
    return (
        <React.Fragment>
            <nav id="navbarspecial" className="navbar navbar-expand-md nav-transparent w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img className="logo navbar-brand" src='https://www.freelogodesign.org/file/app/client/thumb/13ac783b-60c3-4149-8837-df59c19139a4_200x200.png?1608095327655'></img>Avocado Toast Manifesto</a>
                    <div id="navbar" className="navbar-collapse collapse navbar-expand-lg">
                        <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item">
                                <a href="#manifesto" className="nav-link">Generate</a>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

function Manifesto() {

    const [manifestoText, setManifestoText] = React.useState("Nobody should ever put goat cheese, or really any cheese, on avocado toast. There's already so much fat content with the avocado; the flavors would get lost in each other. And avocado toast should always employ generous use of salt. No exceptions.")
    
    function generateManifesto() {
        alert('You just handled an event!');
        const newText = manifestoText + 'THIS IS DIFFERENT TEXT!';
        setManifestoText(newText);
    }

    return (
        <React.Fragment>
            <p className="manifesto-text">"{manifestoText}"</p>
            <button onClick={generateManifesto} className="btn btn-primary btn-lg" id="manifesto">
                Generate a Manifesto  <i className="fas fa-bread-slice"></i>
            </button>
        </React.Fragment>
    );
}

function SectionManifesto() {
    return (
        <React.Fragment>
                <section id="manifesto" className="section-2 container-fluid d-flex justify-content-center align-items-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 justify-content-center">
                            <Manifesto manifesto="Nobody should ever put goat cheese, or really any cheese, on avocado toast. There's already so much fat content with the avocado; the flavors would get lost in each other. And avocado toast should always employ generous use of salt. No exceptions."/>
                        </div>
                    </div>
                </section>
        </React.Fragment>
    );
}

function AboutGPT2() {
    return (
        <React.Fragment>
            <div className="row d-flex justify-content-around align-items-center">
                <div className="about-subcontent col-4 align-self-start">
                    <h1 className="about-header text-center">Why This Exists</h1>
                    <p className="about-text">
                        My roommate once offered to make me some avocado toast.
                        This seemed like a great idea at first, but things quickly took a turn.
                        The well-meaning friend pulled goat cheese out of the fridge, and to my horror, started sprinkling the stuff on my toast.
                        <br />I love goat cheese.<br />I love avocado toast.<br />I do not love them together.<br />
                        In response to my complaints, my roommate asked with equal parts contempt and amusement:
                        "What, is this your avocado toast manifesto?"<br />
                        Apparently. It was.
                    </p>
                </div>
                <div className="about-subcontent col-4 align-self-end">
                    <h1 className="about-header text-center">Using GPT2</h1>
                    <p className="about-text">
                        I think machine learning is really cool, and I jumped on the opportunity to find a silly use for language models.
                        Language models can help guess what word you might want to type next in your email, or maybe it can automatically write realistic-sounding tweets, or maybe,
                        just maybe, they can be used to bring new manifestos to the world about my favorite breakfast meal.<br /><br />
                        GPT2 is a freely-available, very powerful language model originally developed by <a className="line-wipe" href="https://github.com/openai/gpt-2">OpenAI</a>. I query the [TBD] GPT2 API with some seed text copied from various
                        avocado toast recipe sites, and voila, manifestos appear!
                    </p>
                </div>
            </div>  
        </React.Fragment>
    );
}

function About() {
    return (
        <React.Fragment>
            <div className="about container-fluid">
                <NavBar />
                <section className="about container-fluid d-flex justify-content-center align-items-center">
                    <AboutGPT2 />
                </section>
            </div>
        </React.Fragment>
    );
}

function Home() {
    return (
        <React.Fragment>
            <div className="home container-fluid">
                <section className="section-1 container-fluid d-flex justify-content-start align-items-start">
                    <NavBar />
                </section>
                <SectionManifesto />
            </div>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
