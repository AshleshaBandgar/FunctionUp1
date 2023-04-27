import './button.css';

export default function Button({btnStyle, clickFunction}){
    return <button className={btnStyle}
                onClick={clickFunction}
    >Match Number</button>
}