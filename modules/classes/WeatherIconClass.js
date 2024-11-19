export default class WeatherIcon {
    constructor({fileName, desc, isAnimated = true, alt, title, ariaLabel}) {
        this.fileName = fileName;
        this.alt = alt ?? desc;
        this.title = title ?? desc; 
        this.ariaLabel = ariaLabel ?? 'Icon: ' + desc;
        this.isAnimated = isAnimated;
        this.src = `icons/animated/${this.fileName}`;
        this.dataKeyTextContentTranslate = title ?? desc;
    }

    getIconElement() {
        const img = document.createElement('img');
        img.src = this.src;
        img.alt = this.alt;
        img.title = this.title;
        img.ariaLabel = this.ariaLabel;
        img.setAttribute('data-key-textContent-translate', this.dataKeyTextContentTranslate)
        return img
    }
}