const iphonesObjects = document.querySelectorAll('section');
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            const targets = change.target.querySelectorAll('.--anim-class');
            targets.forEach(target => {
                target.classList.remove('--anim-class');
            })
        }
    })
}

let optionsAnim = {
    threshold: [0.1]
}

const animObserver = new IntersectionObserver(onEntry, optionsAnim);
iphonesObjects.forEach(obj => {
    animObserver.observe(obj);
})