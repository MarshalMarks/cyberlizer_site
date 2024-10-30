function ElementGallery() {
    return (
        <>
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

            <hr></hr>
        </>
    );
}

export default ElementGallery;