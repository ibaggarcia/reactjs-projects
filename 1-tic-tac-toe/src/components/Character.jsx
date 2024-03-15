export function Character({ children, updateCharacter }) {

    const handleClick = () => {
        updateCharacter(children)
    }

    return(
        <div className="character-item" onClick={handleClick}>
            {children}
        </div>
    )
}