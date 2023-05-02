import React from 'react'

export default function ElementModal({selectedElement, closeModalData}) {
    const closeElementModalData = () => {
        closeModalData();
    }
  return (
    <div className='modal' aria-label={'element modal'}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 id="element-modal-title">{selectedElement.name}</h2>
            <p>
                Symbol: {selectedElement.symbol}
                <br />
                Atomic Number: {selectedElement.number}
                <br />
                Atomic Weight: {selectedElement.weight}
                <br />
                Category: {selectedElement.category}
                <br />
                Boiling Point: {selectedElement.boilingPoint}
                <br />
                Melting Point: {selectedElement.meltingPoint}
            </p>
            <button onClick={closeElementModalData}>Close</button>
        </div>
    </div>
  )
}
