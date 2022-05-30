import { GenreTagTextColor, GenreTagBackgroundColor } from '../types/Types';

/**
 * @param genre A string that has to match a member of the GenreColor enum
 * @returns The hex color matching the given genre string
 */
 export function GenreTagTextColorer(genre: string): string {
    const color = GenreTagTextColor[genre as keyof typeof GenreTagTextColor];
    return color;
}

export function GenreTagBackgroundColorer(genre: string): string {
    const color = GenreTagBackgroundColor[genre as keyof typeof GenreTagBackgroundColor];
    return color;
}
