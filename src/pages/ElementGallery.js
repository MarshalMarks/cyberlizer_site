function ElementGallery() {
    return (
        <>
            <h1 className="header">Neumorphic Elements</h1>

            <hr className="spacer"></hr>
            
            <div className="elementContainer">
                <div className="Card softElevated">
                    <h3>Soft Text Card</h3>
                    <p>This is a card with a header and text. It also has soft edges.</p>
                </div>

                <div className="Card hardElevated">
                    <h3>Hard Text Card</h3>
                    <p>This is a card with a header and text. It also has hard edges.</p>
                </div>

                <button className="Card hardElevated" onClick={() => console.log("click!")}>
                    Hard Button
                </button>

                <button className="Card softElevated" onClick={() => console.log("click!")}>
                    Soft Button
                </button>

                <button className="Card hardElevated disabled" onClick={() => console.log("click!")}>
                    Hard Disabled Button
                </button>

                <button className="Card softElevated disabled" onClick={() => console.log("click!")}>
                    Soft Disabled Button
                </button>
            </div>

            <hr className="spacer"></hr>

            <p className="footerText">Clay Marks 2024</p>
        </>
    );
}

export default ElementGallery;