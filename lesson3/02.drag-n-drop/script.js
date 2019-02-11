'use strict';
// Le mode strict permet de choisir une variante restrictive de JS

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
// Seuls les formats renseigné dans le tableau seront acceptés
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
// Seuls les images en dessous de ce format seront acceptés
const dropZone = document.querySelector('#js-drop-to');
// La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur
const filesList = document.querySelector('#js-file-list');
// La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur

dropZone.addEventListener('dragover', (e) => onDragOver(e));
// dropzone est une librairie. La méthode addEventListener() d'EventTarget met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible.
dropZone.addEventListener('drop', (e) => onDrop(e));
dropZone.addEventListener('dragenter', () => changeDropZoneState(true));
dropZone.addEventListener('dragend', () => changeDropZoneState(false));

function onDragOver(event) {
  event.stopPropagation();
  event.preventDefault();
}

function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  filesList.innerHTML = '';
  const filesUploaded = Array.from(e.dataTransfer.files);
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
  changeDropZoneState(false);
}

function changeDropZoneState(isDragging) {
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') :
    dropZone.classList.remove('js-is-dragged-over');
}

function handleUploadedFile(file, index) {
  const error = getUploadError(file);
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) :
    filesList.appendChild(createListEl(file, index));
}

function createListEl(file, index) {
  const el = document.createElement('li');
  el.setAttribute('id', 'file-list-item-'+index);
  el.className = 'list-group-item file-list-item';

  // add image
  const elPreview = document.createElement('img');
  elPreview.classList.add('file-list-item-preview');
  el.appendChild(elPreview);
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');
  elName.classList.add('file-list-item-name');
  elName.innerText = file.name;
  el.appendChild(elName);

  return el;
}

function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) {
    return 'Your image is too big';
  } else if (!ACCEPTED_FORMATS.includes(file.type)) {
    return 'Image of this format is not accepted';
  } else {
    return;
  }
}