import "./MenuButton.css"
export const MenuButton = (props) =>  {
    
    const contentHandler = () => {
        return props.action(props.content)
    }
    
    return (
            <button className="menuButton" onClick={contentHandler}>{props.children}</button>
    )
}