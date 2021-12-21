import React, { useState } from 'react';
import Header from './Header';
import ListItems from './ListItems';

const Home = () => {

    // Initial todos
    const initialTodos = [{
        title: 'Get some snacks',
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "1"
    },
    {
        title: 'Get some groceries',
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "2"
    },
    {
        title: 'Prepare your react native fundamentals',
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "3"
    }]

    const [todos, setTodos] = useState(initialTodos);
    return (
        <>
            <Header />
            <ListItems
                todos={todos}
                setTodos={setTodos}
            />
        </>
    );
};

export default Home;