export function initPlaceHover() {
    console.log('initPlaceHover')
    document.querySelectorAll('.place-full').forEach(item => {
        item.style.display = 'initial';
        item.nextElementSibling.style.height = item.getBoundingClientRect().height + 50 + 'px';
        item.style.display = '';
    })
}