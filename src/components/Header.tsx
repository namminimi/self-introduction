import React, {useState, useEffect} from 'react';
import "./Header.scss"

const Header = () => {
    const txt = "안녕하세요.\n\n프론트엔드 개발자 \n남민섭입니다."
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setText(text + txt[count])
            setCount(count + 1)
        }, 150);
        if(count === txt.length) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    })
    return (
        <header>
            <h2>{text}</h2>
        </header>
    );
};

export default Header;