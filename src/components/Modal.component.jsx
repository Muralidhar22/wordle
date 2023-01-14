const Modal = () => {
    return(
        <div className="modal-wordle-info">
            <h1>How To Play</h1>
            <h2>Guess the Wordle in 6 tries</h2>
            <ul>
                <li>
                Each guess must be a valid 5-letter word.
                </li>
                <li>The color of the tiles will change to show how close your guess was to the word.</li>
            </ul>
            <h3>Examples</h3>
            <div className="example-container">
                <div className="example">
                <div className="box box-filled" data-status="correct">W</div>
                <div className="box box-filled">E</div>
                <div className="box box-filled">A</div>
                <div className="box box-filled">R</div>
                <div className="box box-filled">Y</div>
                </div>
                <p className="example-description"><span>W</span> is in the word and in the correct spot.</p>
            </div>
            <div className="example-container">
                <div className="example">
                <div className="box box-filled">P</div>
                <div className="box box-filled" data-status="present">I</div>
                <div className="box box-filled">L</div>
                <div className="box box-filled">L</div>
                <div className="box box-filled">S</div>
                </div>
                <p className="example-description"><span>I</span> is in the word and in the wrong spot.</p>
            </div>
            <div className="example-container">
                <div className="example">
                <div className="box box-filled">V</div>
                <div className="box box-filled">A</div>
                <div className="box box-filled">G</div>
                <div className="box box-filled" data-status="absent">U</div>
                <div className="box box-filled">E</div>
                </div>
                <p className="example-description"><span>U</span> is not in the word and in any spot.</p>
            </div>
        </div>
    )
}

export default Modal;