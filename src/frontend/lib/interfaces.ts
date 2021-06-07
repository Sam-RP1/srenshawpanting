export interface Icon {
    id: string;
    url?: string;
    icon: JSX.Element;
    tooltip?: string;
    extension?: string;
}
export interface Icons extends Array<Icon> {}

export interface Link {
    id: string;
    url: JSX.Element;
    tooltip?: string;
}
export interface Links extends Array<Link> {}
