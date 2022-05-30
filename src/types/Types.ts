/**
 * Definition of what values constitutes
 * an album, #TODO make rating number | undefined
 */
export interface Album {
    id: number;
    title: string;
    artist: string;
    genres: string[];
    rating: number; 
    image_url: string;
}

export interface AlbumCollection {
    id: number;
    title: string;
    albumIds: number[];
    release: Date;
}

/**
 * Definition of what color each genre correlates to
 */
export enum GenreTagTextColor {
    Disco = "#9400D3",
    Dreampop = "#790080",
    Electronic = "#004D80",
    Folk = "#B59609",
    Grunge = "#0f9133",
    Hyperpop = "#0C9C65",
    Indie = "#10B0B5",
    "New Wave" = "#630A25",
    Pop = "#0F6B06", // forest green
    Punk = "#051F33",
    "R&B" = "#4F53DB",
    Rock = "#A3580D", // light brown
    Shoegaze = "#6B0606",
    Soul = "#555555",
};
/**
 * Definition of what color each genre correlates to
 */
 export enum GenreTagBackgroundColor {
    Disco = "#CF9FFF",
    Dreampop = "#D810E3",
    Electronic = "#07B2E6",
    Folk = "#EDDB11", // blood red
    Grunge = "#035129",
    Hyperpop = "#09EB64",
    Indie = "#044B59",
    "New Wave" = "#99284A",
    Pop = "#1ECC0E", // light green
    Punk = "#286899",
    "R&B" = "#0D2891",
    Rock = "#FF8E1C", // orange
    Shoegaze = "#CC310E",
    Soul = "#AAAAAA",
};