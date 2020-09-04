function setСarrousel(id, images = [], interval = 8000) {
    if (!id) {
        return;
    }

    let parent = document.querySelector(`#${id}`);
    parent.style.backgroundSize = '100%';

    let currentIndex = 0;

    change(0);

    setInterval(() => {
        change(-1)
    }, interval);

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
