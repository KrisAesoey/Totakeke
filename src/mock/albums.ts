import { Album, OldAlbum, AlbumCollection, Tracklist } from '../types/Types';
import { MockTracklists } from './tracklists';

/**
 * Function that when called gives a list of
 * example albums and information for mock
 * @returns A list of mock album information
 */
 export function MockAlbums() : Album[] {
    let tl: Tracklist[] = MockTracklists();

    return [
        {
            id: 0,
            title: "loveless",
            artist: "My Bloody Valentine",
            tracklist: tl[0],
            genres: ["Shoegaze"],
            length: "48:31",
            release: new Date("1991-11-4"),
            rating: 9.31,
            image_url: "https://upload.wikimedia.org/wikipedia/en/4/4b/My_Bloody_Valentine_-_Loveless.png",
        }, {
            id: 1,
            title: "Rumours",
            artist: "Fleetwood Mac",
            tracklist: tl[1],
            genres: ["Folk", "Rock"],
            length: "38:55",
            release: new Date("1977-2-4"),
            rating: 9.87,
            image_url: "https://media.npr.org/assets/img/2013/01/29/highres-fleetwood-mac-rumours_sq-bd15e71f50b6fbd94288a16014a69c8092ad9ff5.jpg",
        },
    ]
 };

export function MockOldAlbums() : OldAlbum[] {
    return [
        {
            id: 0,
            title: "loveless",
            artist: "My Bloody Valentine",
            songs: ["Alpha", "Bravo Charlie", "Delta", "Echo Foxtrot", "Golf", "Hotel", "India", "Juliet Kilo"],
            genres: ["Shoegaze"],
            length: "48:31",
            release: new Date("1991-11-4"),
            rating: 9.31,
            image_url: "https://upload.wikimedia.org/wikipedia/en/4/4b/My_Bloody_Valentine_-_Loveless.png",
        }, {
            id: 1,
            title: "Rumours",
            artist: "Fleetwood Mac",
            songs: ["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop", "Go Your Own Way",
                "Songbird", "The Chain", "You Make Loving Fun", "I Don't Want to Know", "Oh Daddy", "Gold Dust Woman"],
            genres: ["Folk", "Rock"],
            length: "38:55",
            release: new Date("1977-2-4"),
            rating: 9.87,
            image_url: "https://media.npr.org/assets/img/2013/01/29/highres-fleetwood-mac-rumours_sq-bd15e71f50b6fbd94288a16014a69c8092ad9ff5.jpg",
        },
        {
            id: 2,
            title: "Random Access Memories",
            artist: "Daft Punk",
            songs: [""],
            genres: ["Disco", "Electronic"],
            length: "74:28",
            release: new Date("2013-5-17"),
            rating: 8.88,
            image_url: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg",
        },
        {
            id: 3,
            title: "Revolver",
            artist: "The Beatles",
            songs: [""],
            genres: ["Pop", "Rock"],
            length: "35:01",
            release: new Date("1966-8-5"),
            rating: 7.56,
            image_url: "https://upload.wikimedia.org/wikipedia/en/e/ec/Revolver_%28album_cover%29.jpg",
        },
        {
            id: 4,
            title: "1000 gecs",
            artist: "100 gecs",
            songs: [""],
            genres: ["Hyperpop"],
            length: "23:07",
            release: new Date("2019-5-31"),
            rating: 8.21,
            image_url: "https://upload.wikimedia.org/wikipedia/en/f/f3/1000_gec_album.jpg",
        },
        {
            id: 5,
            title: "Depression Cherry",
            songs: [""],
            artist: "Beach House",
            genres: ["Dreampop"],
            length: "44:45",
            release: new Date("2015-8-28"),
            rating: 8.52,
            image_url: "https://upload.wikimedia.org/wikipedia/en/0/00/Beach_House_-_Depression_Cherry.png",
        },
        {
            id: 6,
            title: "Channel Orange",
            artist: "Frank Ocean",
            songs: [""],
            genres: ["R&B", "Soul"],
            length: "62:18",
            release: new Date("2012-7-10"),
            rating: 8.6,
            image_url: "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
        },
        {
            id: 7,
            title: "Nevermind",
            artist: "Nirvana",
            songs: [""],
            genres: ["Grunge"],
            length: "49:15",
            release: new Date("1991-9-24"),
            rating: 7.99,
            image_url: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
        },
        {
            id: 8,
            title: "Unknown Pleasures",
            artist: "Joy Division",
            songs: [""],
            genres: ["Punk"],
            length: "39:28",
            release: new Date("1979-6-15"),
            rating: 7.42,
            image_url: "https://upload.wikimedia.org/wikipedia/en/7/70/Unknown_Pleasures_Joy_Division_LP_sleeve.jpg",
        },
        {
            id: 9,
            title: "Glitterbug",
            artist: "The Wombats",
            songs: [""],
            genres: ["Indie", "New Wave"],
            length: "39.31",
            release: new Date("2015-4-13"),
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
