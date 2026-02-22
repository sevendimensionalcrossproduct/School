class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

const selectElement = document.getElementById('album-select');
[album1, album2, album3].forEach(album => {
  const option = document.createElement('option');
  option.value = album.title;
  option.textContent = `${album.artist} - ${album.title}`;
  selectElement.appendChild(option);
});

document.getElementById('play-button').addEventListener('click', () => {
  const selectedTitle = selectElement.value;
  const selectedAlbum = jbox.albums.find(album => album.title === selectedTitle);
  if (selectedAlbum) {
    selectedAlbum.play();
  }
});

document.getElementById('favorite-button').addEventListener('click', () => {
  const favoriteAlbumText = jbox.favoriteAlbum();
  document.getElementById('favoriteAlbum').textContent = `Your favorite album is: ${favoriteAlbumText}`;
});
