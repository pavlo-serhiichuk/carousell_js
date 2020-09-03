
function setСarrousel(id, images) {
    let parent = document.querySelector(`#${id}`);
    parent.style.backgroundSize = '100%';

    let currentIndex = 0;

    createElement('button', '<', ['left-switcher'], parent, () => change(-1));
    createElement('button', '>', ['right-switcher'], parent, () => change(1));

    change(0);

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

    function createElement(tagName, tagText, classNames, parent, onclick) {
        let div = document.createElement(tagName);
        div.innerHTML = tagText;

        for (let className of classNames) {
            div.classList.add(className);
        }

        if (onclick) div.addEventListener('click', onclick);
        parent.append(div);
        return div;
    }
}
