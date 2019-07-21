import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <header className="header">App Header</header>
                <section className="body">                    
                    <h1 className="title">Welcome to Total Brain</h1>
                </section>
                <footer className="header">App Footer</footer>
            </React.Fragment>
        )
    }
}
