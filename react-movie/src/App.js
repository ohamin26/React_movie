import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Genre from './routes/Genre';
import Header from './components/Header';
import { useState } from 'react';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Routes>
                <Route path="/:genre" element={<Genre />}></Route>
            </Routes>
            <Routes>
                <Route path="/movie/:id" element={<Detail />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
