const Button = ({text, color, children}) => {
    const onClickButton = (e) => {
        console.log(e);
    }

    return (
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>);
}

Button.defaultProps={
    color:"dark",

}

export default Button;