import { Album, AlbumCollection } from '../types/Types';

/**
 * Function that when called gives a list of
 * example albums and information for mock
 * @returns A list of mock album information
 */
export function MockAlbums() : Album[] {
    return [
        {
            id: 0,
            title: "loveless",
            artist: "My Bloody Valentine",
            genres: ["Shoegaze"],
            rating: 9.31,
            image_url: "https://upload.wikimedia.org/wikipedia/en/4/4b/My_Bloody_Valentine_-_Loveless.png",
        }, {
            id: 1,
            title: "Rumours",
            artist: "Fleetwood Mac",
            genres: ["Folk", "Rock"],
            rating: 9.87,
            image_url: "https://media.npr.org/assets/img/2013/01/29/highres-fleetwood-mac-rumours_sq-bd15e71f50b6fbd94288a16014a69c8092ad9ff5.jpg",
        },
        {
            id: 2,
            title: "Random Access Memories",
            artist: "Daft Punk",
            genres: ["Disco", "Electronic"],
            rating: 8.88,
            image_url: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg",
        },
        {
            id: 3,
            title: "Revolver",
            artist: "The Beatles",
            genres: ["Pop", "Rock"],
            rating: 7.56,
            image_url: "https://upload.wikimedia.org/wikipedia/en/e/ec/Revolver_%28album_cover%29.jpg",
        },
        {
            id: 4,
            title: "1000 gecs",
            artist: "100 gecs",
            genres: ["Hyperpop"],
            rating: 8.21,
            image_url: "https://upload.wikimedia.org/wikipedia/en/f/f3/1000_gec_album.jpg",
        },
        {
            id: 5,
            title: "Depression Cherry",
            artist: "Beach House",
            genres: ["Dreampop"],
            rating: 8.52,
            image_url: "https://upload.wikimedia.org/wikipedia/en/0/00/Beach_House_-_Depression_Cherry.png",
        },
        {
            id: 6,
            title: "Channel Orange",
            artist: "Frank Ocean",
            genres: ["R&B", "Soul"],
            rating: 8.6,
            image_url: "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
        },
        {
            id: 7,
            title: "Nevermind",
            artist: "Nirvana",
            genres: ["Grunge"],
            rating: 7.99,
            image_url: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
        },
        {
            id: 8,
            title: "Unknown Pleasures",
            artist: "Joy Division",
            genres: ["Punk"],
            rating: 7.42,
            image_url: "https://upload.wikimedia.org/wikipedia/en/7/70/Unknown_Pleasures_Joy_Division_LP_sleeve.jpg",
        },
        {
            id: 9,
            title: "Glitterbug",
            artist: "The Wombats",
            genres: ["Indie", "New Wave"],
            rating: 7.10,
            image_url: "https://i.scdn.co/image/ab67616d0000b273beab78eeaffb9c274493d343",
        },
    ];
}

export function MockAlbumCollections(): AlbumCollection[] {
    return [
        {
            id: 0,
            title: "Smash Hits",
            albumIds: [1, 2, 3, 7],
            release: new Date("2022-05-23"),
        },
        {
            id: 1,
            title: "Essential Shoegaze/Dreampop",
            albumIds: [0, 5],
            release: new Date("2022-5-30"),
        },
        {
            id: 2,
            title: "Welcome to Alternative",
            albumIds: [0, 4, 6, 8],
            release: new Date("2022-06-5"),
        },
    ];
};
