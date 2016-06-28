var data = {
  red: {
    title:'Red',
    body:'Red is the color at the longer-wavelengths end of the spectrum of visible light next to orange, at the opposite end from violet.[3] Red color has a predominant light wavelength of roughly 620–740 nanometres. Light with a longer wavelength than red but shorter than terahertz radiation and microwave is called infrared. Red is one of the additive primary colors of visible light, along with green and blue, which in Red Green Blue (RGB) color systems are combined to create all the colors on a computer monitor or television screen. Red is also one of the subtractive primary colors, along with yellow and blue, of the RYB color space and traditional color wheel used by painters and artists. Reds can vary in shade from very light pink to very dark maroon or burgundy; and in hue from the bright orange-red scarlet or vermilion to the bluish-red crimson. In nature, the red color of blood comes from hemoglobin, the iron-containing protein found in the red blood cells of all vertebrates. The red color of the Grand Canyon and other geological features is caused by hematite or red ochre, both forms of iron oxide. It also causes the red color of the planet Mars. The red sky at sunset and sunrise is caused by an optical effect known as Rayleigh scattering, which, when the sun is low or below the horizon, increases the red-wavelength light that reaches the eye. The color of autumn leaves is caused by pigments called anthocyanins, which are produced towards the end of summer, when the green chlorophyll is no longer produced.[4] One to two percent of the human population has red hair; the color is produced by high levels of the reddish pigment pheomelanin (which also accounts for the red color of the lips) and relatively low levels of the dark pigment eumelanin.'
  },
  blue: {
    title:'Blue',
    body:'Blue is the colour between violet and green on the optical spectrum of visible light. Human eyes perceive blue when observing light with a wavelength between 450 and 495 nanometres. Blues with a higher frequency and thus a shorter wavelength gradually look more violet, while those with a lower frequency and a longer wavelength gradually appear more green. Pure blue, in the middle, has a wavelength of 470 nanometres. In painting and traditional colour theory, blue is one of the three primary colours of pigments, along with red and yellow, which can be mixed to form a wide gamut of colours. Red and blue mixed together form violet, blue and yellow together form green. Blue is also a primary colour in the RGB colour model, used to create all the colours on the screen of a television or computer monitor. The modern English word blue comes from Middle English bleu or blewe, from the Old French bleu, a word of Germanic origin related to Old Dutch, Old High German,[2] Old Saxon blāo and Old Frisian blāw, blau.[3][4] The clear sky and the deep sea appear blue because of an optical effect known as Rayleigh scattering. When sunlight passes through the atmosphere, the blue wavelengths are scattered more widely by the oxygen and nitrogen molecules, and more blue comes to our eyes. Rayleigh scattering also explains blue eyes; there is no blue pigment in blue eyes. Distant objects appear more blue because of another optical effect called atmospheric perspective.'
  },
  green: {
    title:'Green',
    body:'Green is the color between blue and yellow on the spectrum of visible light. It is evoked by light with a predominant wavelength of roughly 495–570 nm. In the subtractive color system, used in painting and color printing, it is created by a combination of yellow and blue, or yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors. The modern English word green comes from the Middle English and Anglo-Saxon word grene, from the same Germanic root as the words "grass" and "grow".[1] It is the color of living grass and leaves[2][3] and as a result is the color most associated with springtime, growth and nature.[4] By far the largest contributor to green in nature is chlorophyll, the chemical by which plants photosynthesize and convert sunlight into chemical energy. Many creatures have adapted to their green environments by taking on a green hue themselves as camouflage. Several minerals have a green color, including the emerald, which is colored green by its chromium content.'
  }
};
//stealing code from the work we did together and the experimenting I did solo today during class
function renderIt(content) {
  document.querySelector('.body').textContent = data[content].body;
  document.querySelector('.header').textContent = data[content].title;
}
window.addEventListener('hashchange', function (evt) {
  var dataToRender = location.hash.slice(1);
  renderIt(dataToRender);
});

var buttonFunc = function (evt) {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  evt.target.classList.add('active');
};

var buttons = document.querySelectorAll('input');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonFunc);
}
