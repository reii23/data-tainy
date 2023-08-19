document.addEventListener("DOMContentLoaded", function () {
    const tracklist = [
      { title: "Obstáculo (feat Myke Towers)", file: "01-obstaculo.mp3", producer: "Tainy · Tomoko Ida · Carlos Lopez", duration: "2:15" },
      { title: "Pasiempre (feat Arcángel, Jhayco, Myke Towers, Omar Courtz y Arca)", file: "02-pasiempre.mp3", producer: "Tainy · Albert Hype · Arca", duration: "5:55" },
      { title: "Todavía (feat Wisin & Yandel)", file: "03-todavia.mp3", producer: "Tainy · Jota Rosa", duration: "3:23" },
      { title: "Fantasma | AVC (feat Jhayco)", file: "04-fantasma.mp3", producer: "", duration: "4:45" },
      { title: "Mojabi Ghost (feat Bad Bunny)", file: "05-mojabighost.mp3", producer: "Tainy · Bad Bunny", duration: "3:52" },
      { title: "11 y once (feat Sech y E.VAX)", file: "06-11yonce.mp3", producer: "Tainy · Mike Stroud & E.VAX", duration: "3:16" },
      { title: "desde las 10 (Kany's Interlude) (feat Kany García)", file: "07-desdelas10.mp3", producer: "Tainy · Richi López · Peter Marshall", duration: "1:00" },
      { title: "Mañana (feat Young Miko y The Marías)", file: "08-mañana.mp3", producer: "Tainy · Josh Conway · Peter Marshall", duration: "2:55" },
      { title: "Buenos Aires (feat Mora y Zion)", file: "09-buenosaires.mp3", producer: "Tainy", duration: "1:58" },
      { title: "La baby (feat Daddy Yankee y Feid con Sech)", file: "10-lababy.mp3", producer: "Tainy", duration: "3:02" },
      { title: "Me jodí... (feat Arcángel)", file: "11-mejodi.mp3", producer: "Tainy", duration: "3:21" },
      { title: "Volver (feat Rauw Alejandro y Skrillex con Four Tet)", file: "12-volver.mp3", producer: "Tainy · Skrillex · Four Tet", duration: "3:05" },
      { title: "En visto (feat Ozuna)", file: "13-envisto.mp3", producer: "Tainy · Richi López", duration: "2:33" },
      { title: "Lo siento BB:/ (feat Bad Bunny y Julieta Venegas)", file: "14-losientobb.mp3", producer: "Tainy", duration: "3:26" },
      { title: "Si preguntas por mí (feat Kris Floyd y Judeline)", file: "15-sipreguntaspormi.mp3", producer: "Tainy · Mvsis · MDLC", duration: "3:35" },
      { title: "Sci-Fi (feat Rauw Alejandro)", file: "16-scifi.mp3", producer: "Tainy", duration: "3:17" },
      { title: "Corleone Interlude (feat Chencho Corleone)", file: "17-corleone.mp3", producer: "Tainy", duration: "1:30" },
      { title: "Paranormal (feat Álvaro Díaz)", file: "18-paranormal.mp3", producer: "Tainy", duration: "3:17" },
      { title: "Sacrificio (feat Xantos)", file: "19-sacrificio.mp3", producer: "Tainy · Richi López", duration: "2:29" }
    ];
  
    const audioList = document.querySelector(".audio-list");
  
    tracklist.forEach((track, index) => {
      const audioItem = document.createElement("div");
      audioItem.classList.add("audio-item");
  
      const audioTitle = document.createElement("p");
      audioTitle.innerText = `${index + 1}. ${track.title}`;
  
      const audioProducer = document.createElement("p");
      audioProducer.innerText = `Productor(es): ${track.producer}`;
  
      const audioDuration = document.createElement("p");
      audioDuration.innerText = `Duración: ${track.duration}`;
  
      const audioControls = document.createElement("div");
      audioControls.classList.add("audio-controls");
  
      const audioPlayer = document.createElement("audio");
      audioPlayer.controls = true;
      const audioSource = document.createElement("source");
      audioSource.src = track.file;
      audioSource.type = "audio/mpeg";
      audioPlayer.appendChild(audioSource);
  
      audioItem.appendChild(audioTitle);
      audioItem.appendChild(audioProducer);
      audioItem.appendChild(audioDuration);
      audioItem.appendChild(audioControls);
      audioControls.appendChild(audioPlayer);
  
      audioList.appendChild(audioItem);
    });
  });
  