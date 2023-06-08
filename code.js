document.addEventListener("DOMContentLoaded", function() {
  var masonryContainer = document.getElementById("masonry-container");
  var masonry = new Masonry(masonryContainer, {
    itemSelector: ".pic",
    columnWidth: ".pic",
    gutter: 20
  });
});

function playSound(soundFile, title) {
  var audio = document.getElementById("audioPlayer");
  var playPauseButton = document.getElementById("playPauseButton");
  var isPlaying = false;
  audio.src = 'media/+sound/' + soundFile;
  audio.play();

  // Update audio title
  document.getElementById("audioTitle").innerHTML = title;

  // Update total time
  audio.addEventListener("loadedmetadata", function() {
    var totalTime = formatTime(audio.duration);
    document.getElementById("totalTime").innerHTML = totalTime;
  });

  // Update remaining time
  audio.addEventListener("timeupdate", function() {
    var currentTime = formatTime(audio.currentTime);
    document.getElementById("currentTime").innerHTML = currentTime;

    var remainingTime = formatTime(audio.duration - audio.currentTime);
    document.getElementById("remainingTime").innerHTML = remainingTime;
  });
}

// Function to format time in MM:SS format
function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    togglePlayPause();
  } else if (event.code === "ArrowLeft") {
    skipBackward();
  } else if (event.code === "ArrowRight") {
    skipForward();
  }
});

// Add event listeners to each image
document.getElementById("amelie").addEventListener("click", function() {
  playSound("smalltownboy.mp3", "Amélie BUJAT");
  audio.play();
  playPauseButton.textContent = "Pause";
});

document.getElementById("anaelle").addEventListener("click", function() {
  playSound("anaelleguillou.mp3", "Anaëlle GUILLOU");
  audio.play();
  playPauseButton.textContent = "Pause";
});

document.getElementById("bruno").addEventListener("click", function() {
  playSound("brunochevillon.mp3", "Bruno CHEVILLON");
  audio.play();
  playPauseButton.textContent = "Pause";
});

document.getElementById("camille").addEventListener("click", function() {
  playSound("camillecompte.mp3", "Camille COMPTE");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("amelie").addEventListener("click", function() {
  playSound("ameliebujat.mp3", "Amélie BUJAT");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("celine").addEventListener("click", function() {
  playSound("Céline LOUVAT équithérapie et CAA.mp3", "Céline LOUVAT, équithérapie et CAA");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("christelle").addEventListener("click", function() {
  playSound("Christelle AIT BENALI relaxation.mp3", "Christelle AIT BENALI, relaxation");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("cidji").addEventListener("click", function() {
  playSound("Cidji BROU.mp3", "Cidji BROU");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("clairemaelle").addEventListener("click", function() {
  playSound("Claire-Maëlle DEMEER et sa stagiaire.mp3", "Claire-Maëlle DEMEER et sa stagiaire");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("cyriane").addEventListener("click", function() {
  playSound("Cyriane DREANO la pluridisciplinarité.mp3", "Cyriane DREANO, la pluridisciplinarité");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("cyril").addEventListener("click", function() {
  playSound("Cyril DORNIER et Davy ROSSI.mp3", "Cyril DORNIER et Davy ROSSI");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("dassine").addEventListener("click", function() {
  playSound("Dassine BENSALEM apprenti Kiné.mp3", "Dassine BENSALEM, apprentie Kiné");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("elora").addEventListener("click", function() {
  playSound("Elora BAUGE.mp3", "Elora BAUGE");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("emilie").addEventListener("click", function() {
  playSound("Emilie LABBE.mp3", "Emilie LABBE");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("fatoumata").addEventListener("click", function() {
  playSound("Fatoumata KANTE AudiSens.mp3", "Fatoumata KANTE, AudiSens");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("gladys").addEventListener("click", function() {
  playSound("Gladys MARCIN.mp3", "Gladys MARCIN");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("helene").addEventListener("click", function() {
  playSound("Hélène DENAES les PPA.mp3", "Hélène DENAES, les PPA");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("heloise").addEventListener("click", function() {
  playSound("Les Projets d'Héloïse OHAYOUN.mp3", "Les Projets d'Héloïse OHAYOUN");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("jeanpaul").addEventListener("click", function() {
  playSound("Jean-Paul MOUSSEAU l'arbre à musique.mp3", "Jean-Paul MOUSSEAU, l'arbre à musique");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("julie").addEventListener("click", function() {
  playSound("Julie ROGER 3 vignnettes cliniques.mp3", "Julie ROGER, 3 vignettes cliniques");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("laetitiafoundou").addEventListener("click", function() {
  playSound("Laetitia FOUNDOU MooveArt.mp3", "Laetitia FOUNDOU, MooveArt");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("laura").addEventListener("click", function() {
  playSound("Laura NIZET.mp3", "Laura NIZET");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("loneze").addEventListener("click", function() {
  playSound("Lonèze POULICIEN.mp3", "Lonèze POULICIEN");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("maia").addEventListener("click", function() {
  playSound("Maïa BENTOUSSI.mp3", "Maïa BENTOUSSI");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("maite").addEventListener("click", function() {
  playSound("Maïté JOURNEL.mp3", "Maïté JOURNEL, le projet Balnéo");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("mamasiata").addEventListener("click", function() {
  playSound("Mama Siata DRAME.mp3", "Mama Siata DRAME");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("maria").addEventListener("click", function() {
  playSound("Maria SIERRA Débloquer le petit truc qui coince.mp3", "Maria SIERRA, Débloquer le petit truc qui coince");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("Mariama").addEventListener("click", function() {
  playSound("Mariama ALLAOUI.mp3", "Mariama ALLAOUI, La Fête de la Colline");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("marion").addEventListener("click", function() {
  playSound("Marion DEGREMONT Groupe Escape Day.mp3", "Marion DEGREMONT, Groupe Escape Day");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("olivia").addEventListener("click", function() {
  playSound("Olivia GAUDRY le goûter du vendredi.mp3", "Olivia GAUDRY, le goûter du vendredi");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("severin").addEventListener("click", function() {
  playSound("Séverin FAVETON à la piscine.mp3", "Séverin FAVETON à la piscine");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("sheherazade").addEventListener("click", function() {
  playSound("Shéhérazade BENEYTON le sens de mon travail et l'atelier.mp3", "Shéhérazade BENEYTON, le sens de mon travail");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("stephanie").addEventListener("click", function() {
  playSound("Stéphanie MOUNIER le conte sensoriel.mp3", "Stéphanie MOUNIER, le conte sensoriel");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("sylvie").addEventListener("click", function() {
  playSound("Sylvie MARME l'AS.mp3", "Sylvie MARME, l'AS");
  audio.play();
  playPauseButton.textContent = "Pause";
});
document.getElementById("laetitia").addEventListener("click", function() {
  playSound("Psychologues SESSAD 95 Groupes Fratries.mp3", "Psychologues SESSAD 95, Groupes Fratries");
  audio.play();
  playPauseButton.textContent = "Pause";
});

// ...

// Update progress bar
audio.addEventListener("timeupdate", function() {
  var progress = (audio.currentTime / audio.duration) * 100;
  document.getElementById("progress").style.width = progress + "%";

  // Update current time
  var currentTime = formatTime(audio.currentTime);
  document.getElementById("currentTime").innerHTML = currentTime;

  // Update remaining time
  var remainingTime = formatTime(audio.duration - audio.currentTime);
  document.getElementById("remainingTime").innerHTML = remainingTime;
});

// Handle timeline click events
var timeline = document.getElementById("timeline");
timeline.addEventListener("click", function(event) {
  var clickX = event.clientX - this.offsetLeft;
  var timelineWidth = this.offsetWidth;
  var duration = audio.duration;
  audio.currentTime = (clickX / timelineWidth) * duration;
});

// Handle dragging on the timeline
var isDragging = false;
timeline.addEventListener("mousedown", function(event) {
  isDragging = true;
});

document.addEventListener("mouseup", function(event) {
  if (isDragging) {
    isDragging = false;
    var clickX = event.clientX - timeline.offsetLeft;
    var timelineWidth = timeline.offsetWidth;
    var duration = audio.duration;
    audio.currentTime = (clickX / timelineWidth) * duration;
  }
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    var clickX = event.clientX - timeline.offsetLeft;
    var timelineWidth = timeline.offsetWidth;
    var duration = audio.duration;
    var currentTime = (clickX / timelineWidth) * duration;
    var formattedTime = formatTime(currentTime);
    document.getElementById("currentTime").innerHTML = formattedTime;
  }
});

// ...

