let notes = JSON.parse(localStorage.getItem('notes')) || [];
let tagColors = JSON.parse(localStorage.getItem('tagColors')) || {};

const colorPalette = ['#e6194b', '#3cb44b', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c'];

function getColorForTag(tag) {
  if (!tagColors[tag]) {
    const usedCount = Object.keys(tagColors).length;
    tagColors[tag] = colorPalette[usedCount % colorPalette.length];
    localStorage.setItem('tagColors', JSON.stringify(tagColors));
  }
  return tagColors[tag];
}

function saveNote() {
  const title = document.getElementById('titleInput').value;
  const body = document.getElementById('bodyInput').value;
  const tagsRaw = document.getElementById('tagsInput').value;
  const tags = tagsRaw.split(',').map(function(tag) {
    return tag.trim();
  }).filter(function(tag) {
    return tag !== '';
  });

  const dateWritten = new Date().toLocaleDateString();
  notes.push({ title: title, body: body, tags: tags, date: dateWritten });
  localStorage.setItem('notes', JSON.stringify(notes));
}