export interface Dialog {
    close: Function;
}
export interface DialogOptions {
    url: string,
    width: number,
    height: number,
    title: string,
    buttons: {
        id: string;
        text: string;
        cls: string;
        onclick: (event: any, dialog: Dialog) => {};
    }[];
}