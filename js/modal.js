/* const modalWrapper = document.querySelector('.modal-wrapper')
const modalMesssage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close') */



export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal .close'),

    
    open: function () {
        alert("O IMC são apenas números que não determinam a beleza de ninguem!")
        Modal.wrapper.classList.add('open')

    },
    close: function () {
        Modal.wrapper.classList.remove('open')
    },

    
}

Modal.buttonClose.onclick = function () {
    Modal.close()
    window.location.reload()
}


window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}
