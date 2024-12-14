export class WeatherIcon {
    constructor({fileName, desc, alt, title, ariaLabel}) {
        this.fileName = fileName;
        this.alt = alt ?? desc;
        this.title = title ?? desc; 
        this.ariaLabel = ariaLabel ?? 'Icon: ' + desc;
        this.src = `src/icons/animated/${this.fileName}`;
        this.dataKeyTextContentTranslate = title ?? desc;
    }

    getIconElement() {
        const img = document.createElement('img');
        img.src = this.src;
        img.alt = this.alt;
        img.title = this.title;
        img.ariaLabel = this.ariaLabel;
        img.setAttribute('data-key-alt-translate', this.dataKeyTextContentTranslate);
        img.setAttribute('data-key-arialabel-translate', this.dataKeyTextContentTranslate);
        img.setAttribute('data-key-title-translate', this.dataKeyTextContentTranslate);

        return img
    }
}