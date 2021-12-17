import $ from "jquery";

export const scrollShowHide = (parentDivId, childDivId) => {
    window.addEventListener('scroll', function() {
        var element = document.querySelector(`#${parentDivId}`);
        var position = element.getBoundingClientRect();

        // checking whether fully visible
        if((position.top >= 0 && position.bottom <= window.innerHeight) || (position.top < window.innerHeight && position.bottom >= 0)) {
            console.log('Element is fully visible in screen');
            $(`#${childDivId}`).show(500);
        } else {
            console.log('no');
            $(`#${childDivId}`).hide(100);
        }
    });
}

// export default scrollShowHide();
