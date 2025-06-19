const images = [
  { src: '20221026_164822.jpg', caption: 'First pic after I entered IIT Bombay' },
  { src: '20221026_164857.jpg', caption: 'First pic infront of the hostel' },
  { src: '20221110_112039.jpg', caption: 'First professor, Madhubabu sir' },
  { src: '20221124_182141.jpg', caption: 'Hostel 16 - All wings' },
  { src: '20221126_132630.jpg', caption: 'New laptop' },
  { src: '20221128_133648.jpg', caption: 'First ISMP Treat' },
  { src: '20221129_024615.jpg', caption: 'Exploring the campus at night' },
  { src: '20221204_071413.jpg', caption: 'First time at Sameer Hill' },
  { src: '20221207_202337.jpg', caption: "Friend's birthday treat looted lol" },
  { src: '20230213_153329.jpg', caption: "Wingie's birthday party" },
  { src: '20230309_193123.jpg', caption: 'Fire caught in the forest' },
  { src: '20230319_195710.jpg', caption: 'Friends emptying my pockets after my birthday' },
  { src: '20230320_205544.jpg', caption: 'Late night group studies' },
  { src: '20230329_194157.jpg', caption: 'First Department Trad day' },
  { src: '20230520_183930.jpg', caption: 'Tea party at H-16' },
  { src: '20230805_214401.jpg', caption: 'Going to BKC and checking out Apple Store' },
  { src: '20230814_190149.jpg', caption: 'Getting busy with techfest stuff' },
  { src: '20230907_194413.jpg', caption: "Roomie's birthday" },
  { src: '20230911_114337.jpg', caption: 'Shiru Cafe' },
  { src: '20231008_171033.jpg', caption: 'Techfest 2023' },
  { src: '20231021_005942.jpg', caption: 'Late night study' },
  { src: '_DSC5430.JPG', caption: 'GMRT' },
  { src: 'IMG-20250504-WA0016.jpg', caption: 'Getting regular to Gym'},
  { src: 'IMG-20250619-WA0005.jpg', caption: 'Internship' },
  { src: 'IMG-20250619-WA0006.jpg', caption: 'IMAX Experience and that too Interstellar'},
  { src: 'IMG-20250619-WA0007.jpg', caption: 'Going to Dmart for chepaer groceries'},
  { src: 'IMG-20250619-WA0008.jpg', caption: 'First day at NSE' },
  { src: 'IMG-20250619-WA0009.jpg', caption: 'R City IMAX'  },
  { src: 'IMG-20250619-WA0010.jpg', caption: 'End of 6th Semester' },

];

let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById('sliderImage');
  const caption = document.getElementById('sliderCaption');
  img.src = images[index].src;
  caption.textContent = images[index].caption;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Initialize first image
document.addEventListener("DOMContentLoaded", () => showImage(currentIndex));
