import "./MenuButton.css"
export const MenuButton = (props) =>  {
    
    const contentHandler = () => {
        return props.action(props.content)
    }
    
    return (
        <>
            <button className="menuButton" onClick={contentHandler}>{props.children}</button>
            {/* <Divider light={true} sx={{paddingBottom: "10px", borderRadius: "10px", color:"white", zIndex:1000}}></Divider> */}
        </>

    )
}