import "./App.css";
import PageListWrap from "./components/pagination/pageList";
import { useState } from "react";
import Loading from "./components/loading/loading";
import { Suspense } from "react";

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1>Pagination</h1>
                        <PageListWrap></PageListWrap>
                    </header>
                </div>
            </div>
        </Suspense>
    );
}

export default App;
