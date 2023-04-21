const Mworks = document.getElementById('mwks');
const detailsc = document.getElementById('popup-c');
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

for (let i = 0; i < workse.length; i += 1) {
  const section = document.createElement('section');
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
      <button class="NormalB${(i + 1)}">
      </button>
    </div>
    </div>`;
}
const popup = document.createElement('div');
detailsc.append(popup);
popup.className = 'details';
popup.innerHTML = `
<header class="header-4">
<div class="top-p">
  <h2 class="project-tittlep"></h2>
  <button class="btn-close2" alt="close menu"><img src="img/cros.png" class="img-close2"></button>
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
<div class="body-2">
<div>
<p class="descriptionm">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
    </p>
<p class="descriptiondsk">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  <br>
  <br>
  <br>
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.
    </p>
</div>
<div class="buttons">
  <ul id="tags-list">
    <li id="h-tag"><a href="#" class="tag" id="html">HTML</a></li>
    <li id="c-tag"><a href="#" class="tag" id="css">CSS</a></li>
    <li id="j-tag"><a href="#" class="tag" id="JavaScript">JavaScript</a></li>
  </ul>
  <ul id="tags-list2">
    <li id="r-tag"><a href="#" class="tag" id="ruby">Ruby on rails</a></li>
    <li id="b-tag"><a href="#" class="tag" id="ruby">Bootstrap</a></li>
  </ul>
  <div class="sbtn">
  <a href="#">    
    <button class="LiveB">
    <img src="img/live.png" alt="live-icon" class="live-img">
    <p id="sbutton"></p>
    </button>
  <a/>
  <a href="#"> 
    <button class="gitB">
    <img src="img/git.png" alt="github-icon" class="live-img">
    </button> 
  <a/>
  </div>
</div>
</div>`;
const see = document.querySelector('.NormalB1');
const see2 = document.querySelector('.NormalB2');
const see3 = document.querySelector('.NormalB3');
const see4 = document.querySelector('.NormalB4');
const cls = document.querySelector('.img-close2');
const LiveB = document.querySelector('.LiveB');
const imgc = document.querySelector('.screen-shotp');
const tittlec = document.querySelector('.project-tittlep');

function showi() {
  detailsc.classList.remove('show');
}
function change2() {
  imgc.classList.add('screen-shotp2');
  imgc.classList.remove('screen-shotp');
}
function change3() {
  imgc.classList.add('screen-shotp3');
  imgc.classList.remove('screen-shotp');
}
function change4() {
  imgc.classList.add('screen-shotp4');
  imgc.classList.remove('screen-shotp');
}
function changet() {
  tittlec.classList.add('tittlec');
  tittlec.classList.remove('project-tittlep');
}
cls.addEventListener('click', () => {
  detailsc.classList.add('show');
  imgc.classList.add('screen-shotp');
  imgc.classList.remove('screen-shotp2');
  imgc.classList.remove('screen-shotp3');
  imgc.classList.remove('screen-shotp4');
  tittlec.classList.add('project-tittlep');
  tittlec.classList.remove('tittlec');
});
see.addEventListener('click', showi);
see2.addEventListener('click', showi);
see2.addEventListener('click', change2);
see2.addEventListener('click', changet);
see3.addEventListener('click', showi);
see3.addEventListener('click', change3);
see4.addEventListener('click', showi);
see4.addEventListener('click', change4);
see4.addEventListener('click', changet);
LiveB.addEventListener('click', showi);