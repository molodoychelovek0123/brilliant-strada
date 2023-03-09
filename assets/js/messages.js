const enumValue = (name) => Object.freeze({toString: () => name});

const Types = Object.freeze({
    SUCCESS: enumValue("SUCCESS"),
    ERROR: enumValue("ERROR"),
    INFO: enumValue("INFO")
});

function initMessageContainer() {
    document.querySelector('.screen .message-container').addEventListener("click",function(e){
        if(e.target.classList.contains('message')) {
            e.target.parentNode.removeChild(e.target);
            playSound('info');
        }
    });
    document.querySelector('.message-container.out-of-screen').addEventListener("click",function(e){
        if(e.target.classList.contains('message')) {
            e.target.parentNode.removeChild(e.target);
            playSound('info');
        }
    });

    // $('.message-container').on('click', function (event) {
    //     console.log(event);
    //     $(event.target).remove();
    // })
}

function showMessage(type, message, code, inScreen = true) {
    code = code === 0 ? "" : code + ": ";
    let container = inScreen ? $('.screen .message-container') : $('.message-container.out-of-screen');
    let html = `<div class="message ${type.toString()}"> \
                            <div class="close"> \ 
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> \
                                    <path d="M9.375 8.4375H10.3125V9.375H11.25V11.25H9.375V10.3125H8.4375V9.375H6.5625V10.3125H5.625V11.25H3.75V9.375H4.6875V8.4375H5.625V6.5625H4.6875V5.625H3.75V3.75H5.625V4.6875H6.5625V5.625H8.4375V4.6875H9.375V3.75H11.25V5.625H10.3125V6.5625H9.375V8.4375ZM14.0625 15H0.9375V14.0625H0V0.9375H0.9375V0H14.0625V0.9375H15V14.0625H14.0625V15ZM1.875 1.875V13.125H13.125V1.875H1.875Z" fill="white"/> \
                                </svg> \
                            </div> \
                            <div class="text h3"> \
                                ${code}${message} \
                            </div> \
                        </div>`;
    container.append(html);
}