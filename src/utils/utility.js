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

export const scrollShowHideVideo = (parentDivId, childDivId) => {
    window.addEventListener('scroll', function() {
        var element = document.querySelector(`#${parentDivId}`);
        var video = document.querySelector(`#${childDivId}`);
        if(video.duration) {
            const distanceFromTop = window.scrollY + element.getBoundingClientRect().top;
            const rawPercentScrolled = (window.scrollY - distanceFromTop) / (element.scrollHeight - window.innerHeight);
            const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
            video.currentTime = video.duration * percentScrolled;
        }
    });
}

// export default scrollShowHide();
