
function setСarrousel(id, images, ms) {
    let parent = document.querySelector(`#${id}`);
    parent.style.backgroundSize = '100%';

    let currentIndex = 0;

    change(0);

    setInterval(() => {
        change(-1)
    }, ms);

    function checkIndex() {
        let {length} = images;
        if (length <= currentIndex) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = length - 1;
        }
    }

    function change(step) {
        currentIndex += step;
        checkIndex();
        parent.style.backgroundImage = `url(${images[currentIndex]}`;
    }
}
