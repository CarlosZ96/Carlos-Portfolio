const Mworks = document.getElementById("mwks");
const workse = [
    {
        project_tittle: 'Tonic',
        screen_shot: 'img/Snapshoot1.png',
        screen_shotdks: '/img/tonic.png',
        frame: ['Canopy', 'Back End Dev', '2015'],
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups',
        tags: ['html', 'Ruby on Rails', 'css', 'javaScript'],
    },

    {
        project_tittle: 'Multi-Post Stories',
        screen_shot: 'img/Snapshoot2.png',
        screen_shotdks: 'img/Snapshoot4.png',
        frame: ['Canopy', 'Back End Dev', '2015'],
        framedsk: ['Facebook', 'Back End Dev', '2015'],
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups',
        descriptiondsk: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        tags: ['html', 'Ruby on Rails', 'css', 'javaScript'],
    },

    {
        project_tittle: 'Tonic',
        titledsk: 'Facebook 360',
        screen_shot: 'img/Snapshoot3.png',
        screen_shotdks: 'img/Snapshoot1.png',
        frame: ['Canopy', 'Back End Dev', '2015'],
        framedsk: ['Facebook', 'Back End Dev', '2015'],
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups',
        descriptiondsk: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
        tags: ['html', 'Ruby on Rails', 'css', 'javaScript'],
    },

    {
        project_tittle: 'Multi-Post Stories',
        titledsk: 'Uber Navigation',
        screen_shot: 'img/Snapshoot4.png',
        screen_shotdks: 'img/Snapshoot2.png',
        frame: ['Canopy', 'Back End Dev', '2015'],
        framedsk: ['Uber', 'Back End Dev', '2015'],
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups',
        tags: ['html', 'Ruby on Rails', 'css', 'javaScript'],
    },
];

for (let i = 0; i < workse.length; i++) {
    var section = document.createElement('section');
    Mworks.append(section);
    section.className = 'Works';
    section.innerHTML = `
    <div class="screen-shot">
    <img src= ${workse[i].screen_shot} alt="project-image" class="screenshot-img">
    </div>
    <div class="text-block">
    <header class="header-3">
      <h2 class="project-tittle">${workse[i].project_tittle}</h2>
    </header>
    <div>
      <ul class="frame">
        <li class="txt" id="canopy">${workse[i].frame[0]}</li>
        <li class="img-container"><img src="img/Counter.png" alt="point" id="img-point"></li>
        <li class="txt" id="role">${workse[i].frame[1]}</li>
        <li class="img-container"><img src="img/Counter.png" alt="point" id="img-point-2"></li>
        <li class="txt" id="year">${workse[i].frame[2]}</li>
      </ul>
    </div>
    <div>
      <p id="description-2">${workse[i].description}</p>
    </div>
    <div class="tags">
      <ul id="tags-list">
        <li tabi="54" id="h-tag"><a href="#" class="tag" id="html"></a>${workse[i].tags[0]}</li>
        <li tabi="56" id="c-tag"><a href="#" class="tag" id="css"></a>${workse[i].tags[1]}</li>
        <li tabi="57" id="j-tag"><a href="#" class="tag" id="JavaScript"></a>${workse[i].tags[2]}</li>
      </ul>
    </div>
    <div class="actions">
      <button class="NormalB">
        <p id="sbutton"></p>
      </button>
    </div>
    </div>`
}
var popup = document.createElement('div');
Mworks.append(popup);
popup.className = 'details';
popup.innerHTML = `
<header class="header-4">
<div class="top-p">
<h2 class="project-tittle"></h2>
<button id="btn-close2" alt="close menu"><img src="img/cros.png" class="img-close2"></button>
</div>
<ul class="frame">
  <li class="txt" id="canopy"></li>
  <li class="img-container"><img src="img/Counter.png" alt="point" id="img-point"></li>
  <li class="txt" id="role"></li>
  <li class="img-container"><img src="img/Counter.png" alt="point" id="img-point"></li>
  <li class="txt" id="year"></li>
</ul>
</header>
<div class="screen-shotp"></div>
<div>
<p id="description-2"></p>
</div>
<div class="buttons">
<ul id="tags-list">
  <li  id="h-tag"><a href="#" class="tag" id="html">HTML</a></li>
  <li  id="r-tag"><a href="#" class="tag" id="ruby">Ruby on rails</a></li>
  <li  id="c-tag"><a href="#" class="tag" id="css">CSS</a></li>
  <li  id="j-tag"><a href="#" class="tag" id="JavaScript">JavaScript</a></li>
  <li  id="b-tag"><a href="#" class="tag" id="JavaScript">Bootstrap</a></li>
</ul>
<div class="sbtn">
<button class="NormalB">
<img src="img/live.png" alt="live-icon" class="live-img">
<p id="sbutton"></p>
</button>
<button  class="NormalB" id="NormalB2">
<img src="img/git.png" alt="live-icon" class="live-img">
<p id="sbutton"></p>
</button>
</div>
</div>`