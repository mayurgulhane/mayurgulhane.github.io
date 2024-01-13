import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Cv from "./Cv"
import Project from "./Project"
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos"
import "aos/dist/aos.css"
import "./index.css";
import LoadingBar from 'react-top-loading-bar'
import ClipLoader from "react-spinners/CircleLoader";


const App = () => {
    const [progress, setProgress] = useState(0);
    let [spinner, setSpinner] = useState(true);

    useEffect(() => {
        Aos.init({ duration: 2000 });
        setSpinner(true)
        setTimeout(() => {
            setSpinner(false)
        }, 2000);  //2000

    }, [])

    return (
        <>
            <LoadingBar
                height={3}
                color='#242d52'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                loaderSpeed={1000}
                waitingTime={3000}
            />
            {
                spinner ?
        <div className="aa">
                    <div className="spinner ">
                        <span data-aos="zoom-in">

                            <ClipLoader color={"red"} loading={spinner} size={150} />
                        </span>
                        </div>
                    </div>
                    :
                    <div className="div">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/cv" component={Cv} />
                            <Route path="/work" component={Project} />
                            <Redirect to="/" />
                        </Switch>
                        <Footer />
                    </div>
            }
        </>
    )
}
export default App;