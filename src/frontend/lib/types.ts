import { Icon, Icons } from './interfaces';

export type HeroProps = {
    title: string;
    content?: string;
    nextItemLabel?: string;
    socials?: Icons;
};

export type ProjectsType = {
    portfolioContent: {
        id: string;
        title: string;
        created: string;
        definition: string;
        taster: string;
        description: string;
        tags: string[];
        role: string;
        isDownload: boolean;
        download: string;
        portfolio: {
            buttons: {
                id: string;
                url: string;
                icon: Icon;
                label: string;
                newTab: boolean;
            }[];
            thumbnail: string;
        };
        showcase: {
            hasDesign: boolean;
            design: {
                colors: {
                    isThemed: boolean;
                    color_palette: {
                        darkTheme: {
                            color: string;
                            name: string;
                        }[];
                        lightTheme: {
                            color: string;
                            name: string;
                        }[];
                        default: {
                            color: string;
                            name: string;
                        }[];
                    };
                };
                typography: {
                    fonts: { name: string; link: string }[];
                };
            };
            hasFeatures: boolean;
            features: {
                title: string;
                content: string;
                hasMedia: boolean;
                media: any;
            }[];
        };
    }[];
};
