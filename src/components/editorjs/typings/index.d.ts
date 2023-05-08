export interface IEditor<T> {
    data: T;
    api: IAPI;
    readOnly: boolean;
}

export interface IYoutube {
    url: string;
}

interface IAPI {
    listeners: IListeners;
    styles: {
        block: string;
        button: string;
        input: string;
    };
}

interface IListeners {
    on: (element: Element, event: keyof HTMLElementEventMap, func: () => void) => void
}