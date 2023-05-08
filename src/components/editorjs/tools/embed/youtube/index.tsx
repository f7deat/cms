import { IAPI, IEditor, IYoutube } from "@/components/editorjs/typings";

class YoutubeVideo<T extends IEditor<IYoutube>> {

    _data: IYoutube;
    _readOnly: boolean;
    _api: IAPI;

    constructor(props: T) {
        this._readOnly = props.readOnly;
        this._data = props.data;
        this._api = props.api;
    }

    static get toolbox() {
        return {
            title: 'Youtube',
            icon: '📹'
        };
    }

    createIframe(url: string) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.width = '100%';
        iframe.height = '400px';
        return iframe;
    }

    render() {
        const wrapper = document.createElement('div');
        if (this._data.url) {
            const iframe = this.createIframe(this._data.url);
            wrapper.appendChild(iframe);
        } else {
            const formGroup = document.createElement('div');
            formGroup.classList.add('flex');
            const input = document.createElement('input');
            input.classList.add(this._api.styles.input);
            input.placeholder = 'Youtube URL'
            formGroup.appendChild(input);
            const button = document.createElement('button');
            button.classList.add(this._api.styles.button);
            button.textContent = 'Ok';
            formGroup.appendChild(button);
            wrapper.appendChild(formGroup);
            this._api.listeners.on(button, 'click', () => {
                if (!input.value) {
                   return; 
                }
                const url = input.value.replace('watch?v=', 'embed/')
                const iframe = this.createIframe(url);
                wrapper.appendChild(iframe);
                wrapper.removeChild(formGroup);
            })
        }
        return wrapper;
    }

    save(e: any) {
        const i = e.querySelector('iframe');
        if (i) {
            return {
                url: i.src
            }
        }
        return {}
    }
}

export default YoutubeVideo