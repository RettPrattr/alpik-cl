import React from 'react';
import Image from 'next/image'

function TinyFooter(props) {

    function currentYear() {
        return new Date().getFullYear();
    }

    if ( props.type === 1 ) {
        return (
            <footer className='tinyFooter container tinyFooter-1 flex flex-row'>
                <div className="cd3 cm4 flex">
                    <p>© {currentYear()}, айти команда капустина</p>
                </div>
                <div className="cd6 cm4 flex justify-center">
                    <a><u>Написать нам</u></a>
                </div>
                <div className="cd3 cm4 flex justify-end">
                    <p>Made with love</p>
                </div>
            </footer>
        )
    }
}

export default TinyFooter