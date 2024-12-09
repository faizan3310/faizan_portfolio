function ShowPopup() {
    return (
        <b>Popup about to show</b>
    )
}

function HandleEvents() {
    var isPopupTobeShown = false;
    function handleClickEvent(event){
        console.log("I am from sample method");
        console.log(event);
        isPopupTobeShown = true;
        console.log(isPopupTobeShown);
    }
    return(
        <div>
            Handling Events - 
            <b>isPopupTobeShown - {String(isPopupTobeShown)}</b>
            <button onClick={handleClickEvent}>Click Me</button>
            
            <b>isPopupTobeShown - {String(isPopupTobeShown)}</b>
            {
                isPopupTobeShown &&
                    <ShowPopup></ShowPopup>
            }
        </div>
    )
}
export default HandleEvents;