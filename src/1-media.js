// Problem 1: Inheritance and Polymorphism - Media Player
// Implement your MediaItem, Song, Podcast, and Audiobook classes below
class MediaItem {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }

    play() {
        return `Playing: ${this.title}`;
    }

    getFormattedDuration() {
        return `${Math.trunc(this.duration / 60)}:${(this.duration % 60).toString().padStart(2, '0')}`;
    }
}

class Song extends MediaItem {
    constructor(title, duration, artist) {
        super(title, duration);
        this.artist = artist;
    }

    play() {
        return `${super.play()} by ${this.artist}`
    }
}

class Podcast extends MediaItem {
    constructor(title, duration, host, episodeNumber) {
        super(title, duration);
        this.host = host;
        this.episodeNumber = episodeNumber;
    }

    play() {
        return `${super.play()} with host ${this.host}, Episode ${this.episodeNumber}`
    }
}

class Audiobook extends MediaItem {
    constructor(title, duration, author, narrator) {
        super(title, duration);
        this.author = author;
        this.narrator = narrator;
    }

    play() {
        return `${super.play()} by ${this.author}, narrated by ${this.narrator}`
    }
}

const test = () => {

}

module.exports = { MediaItem, Song, Podcast, Audiobook };

