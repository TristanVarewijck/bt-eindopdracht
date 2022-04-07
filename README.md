# BT-eindopdracht :gear:

## Concept :pencil2:

![overview](https://github.com/TristanVarewijck/browser-technologies/blob/main/BT/opdracht3/public/images/readme/overview.png)

![form](https://github.com/TristanVarewijck/browser-technologies/blob/main/BT/opdracht3/public/images/readme/form.png)

![detail](https://github.com/TristanVarewijck/browser-technologies/blob/main/BT/opdracht3/public/images/readme/detail.png)

## Live Demo :clapper:

See the latest updated demo here:
[Link to DEMO](https://frozen-badlands-78278.herokuapp.com/)

---

## Description :label:

For "Opdracht 3" of BT we had to make a RESTfull api where the focus was the "core" functionality what is uploading images to an overview. The app should be responsive and remain its core functionality on different browsers and devices. The app should also work witout Javascript and CSS.

---

## Table of Contents :arrow_right_hook:

- [Features](#features)
- [Wireflow](#wireflow)
- [Test-Report](#test-report)
- [Usage](#Usage)
- [Meta](#meta)
- [License](#license)

---

## Features

:chains: Features for this app are mainly still under construction.

1. **Overview** <br>
   Image overview page.
2. **Detail** <br>
   Every image has a detail page.
3. **Upload** <br>
   You can upload a unlimited amount of images with a description.
4. **Delete** <br>
   You can delete images if you want them out your overview.

---

## Wireflow

Here you can see the wireflow of this app wich represents the core functionality of this app.
Below you can also see the layers my app is build out off with the core layer as most important.

1. Wireflow <br>
   <img src="https://github.com/TristanVarewijck/bt-eindopdracht/blob/main/public/images/readme/coreFunction.png" alt="wireflow" width="600px"/>

2. Core Layer <br>
   <img src="https://github.com/TristanVarewijck/bt-eindopdracht/blob/main/public/images/readme/layers.png" alt="search-flow" width="600px"/>

---

## Test-Report

In this report i will check my findings when testing in multiple different browsers. In terms of Progressive Enhancement this is a very important step for optimizing the app.

The report is only in dutch for now..
(Dutch)

### Chromium - Google Chrome

De app werkt met alle layers goed op Chrome, hij is ook goed responsive. De app is gemaakt in Chrome dus het is niet zo gek dat het hier goed op werkt.

#### Features

Uploaden: Werkt goed <br>
Overview: Werkt goed <br>
Delete: Werkt goed <br>
Detail: Werkt goed <br>

#### Javascript uit

Op het moment dat Javascript is uitgeschakeld in Chrome werkt het veranderen van de layout niet meer en werkt de “image preview” niet meer, dit is natuurlijk best nadelig, omdat het extra’s aan de app geeft. Maar het is gelukkig geen core functie, waardoor het niet een heel grote ramp is.

#### CSS uit

Op het moment dat CSS uit is, is natuurlijk de styling weg maar de core functies doen het wel nog. De foto’s zijn nu wel onlogisch groot dit zou ik kunnen vervormen met HTML tags.  los daarvan zijn er ook nog buttons die helemaal niks meer doen dat wel een beetje vervelend.

#### CHROME is goed.

---

### Non-Chromium - Firefox

De app werkt net als op Chrome erg goed het ziet er exact hetzelfde uit, ik heb dit eigenlijk automatische zo gekregen, omdat ik tot de helft van dit project Firefox als browser had en ben overgestapt naar Chrome, waardoor de app goed werkt op beide.

#### Features

Uploaden: Werkt goed <br>
Overview: Werkt goed <br>
Delete: Werkt goed <br>
Detail: Werkt goed <br>

#### Javascript uit

Uiteraard werken de functies die niet op Chrome werkten die met Javascript zijn gemaakt ook niet op Firefox voor de rest werkt de app uitstekend.

#### CSS uit

Hetzelfde als op Chrome is de app nu niet gestyled en is de layout veranderd ook nu zijn de foto’s veel te groot.

#### FIREFOX is goed.

---

### Android - EGDE (mobile)

De app werk op het Android apparaat die “EGDE” als browser gebruikt goed, de core functionaliteit is nog steeds goed bruikbaar. Wat niet helemaal in orde is zijn sommige “sizes” van elementen. De form om een nieuwe foto te maken is veel te breed uitgerekt ook zijn de photo’s op de detail pagina ook veel te breed, waardoor je niet alle content meer kan zien.

#### Features

Uploaden: Werkt goed <br>
Overview: Werkt goed <br>
Delete: Werkt goed <br>
Detail: Matig <br>

#### Javascript uit

Op het moment dat de javascript uit staat geld hetzelfde voor bij de andere browsers dan doet de layout knoppen het niet meer maar ook de image preview werkt niet meer, wat opzicht logische is omdat, dat met pure JavaScript is gemaakt. Voor de rest blijft alles hetzelfde.

#### CSS uit

Wanneer de CSS uit staat, werkt alles nog zeker prima, ik ben er zelfs achter gekomen dat de problemen die ik had met de sizes dat, dat komt door de CSS. Als de CSS uit staat dan staan de foto’s eigenlijk beter als wanneer de CSS aan staat. SUPER RAAR!

#### EDGE is prima.

---

### IOS - Safari (mobile)

Over IOS heb ik weinig te zeggen, omdat de app hier echt pefect op werkt, misschien zelfs beter als op Chrome (gek genoeg)
Wat me vooral opviel is dat de sizes echt precies waren zoals was bedoeld en dat het form ook niet vervormd was.

#### Features

Uploaden: Werkt goed <br>
Overview: Werkt goed <br>
Delete: Werkt goed <br>
Detail: Werkt goed <br>

#### Javascript uit

De app werkt perfect zonder alle functionaliteiten en, omdat de javascript voor deze app niet cruciaal is werkt de app ook gewoon nog zoals hij is bedoeld en is de styling ook niks veranderd.

#### CSS uit

Op het moment van het uit doen van de CSS ziet er het eigenlijk predies hetzelfde uit als op Chrome als je de CSS uit doet, waar dus ook het probleem heerst dat de foto's te groot zijn als je de css uitschakeld maar daar wordt aan gewerkt.

## Safari is goed.

### IOS - Safari (mobile)

This was the test report the consclusion of this report is that the app has good progressive enhancement across different browsers.

---

## Usage

For using this app yourself you need to follow the following steps:

### 1. Clone Repo locally

```
git clone https://github.com/TristanVarewijck/browser-technologies.git
```

### 2. Go to correct folder - NPM

Go to the correct folder and run: npm install to install the correct packages

BT/opdracht3

```
npm i
```

### 3. Run on Localhost

For easily running this project on your localhost run: _npm start_ <br>

### Thats it! :smile:

---

## Meta

Tristan Varewijck <br>
:email: [Tristan.varewijck@gmail.com](Tristan.varewijck@gmail.com) ||
:large_blue_diamond: [https://www.linkedin.com/in/tristanvarewijck-1999/](https://www.linkedin.com/in/tristanvarewijck-1999/)

![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

---

## License

Usage is provided under the [MIT License](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) MIT. See [LICENSE](https://github.com/TristanVarewijck/browser-technologies/BT/opdracht3/blob/master/LICENSE) for the full details.

<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- ...you should implement an explanation of client- server rendering choices 🍽 -->

<!-- ...and an activity diagram including the Service Worker 📈 -->

<!-- This would be a good place for a list of enhancements to optimize the critical render path implemented your app  -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->
