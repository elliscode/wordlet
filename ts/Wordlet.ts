export default class Wordlet {
    readonly applyKeyCallbacks = () => {
        for(const key of document.getElementsByClassName('key')) {
            key.addEventListener('click', this.hitKey);
        }
    }
    readonly hitKey = (event: Event) => {
        const text = (event.target as HTMLDivElement).textContent;
        if(text) {
            const letter = text.trim();
            console.log(letter);
        }
    }
}