# The Startup - Responsive Interactive Website

## Refactoring en Code Conventions

_Code conventies_ zijn er om code overzichtelijk en goed onderhoudbaar te houden. In Sprint 2 heb je er een aantal van ons gekregen. Tijdens deze workshop kijken we terug naar deze conventies, en hoe je die toegepast hebt op je code van Sprint 6. Mochten er nog verbeterpunten naar boven komen, dan passen we die meteen doe. Dit noemen we _refactoren_.

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler

Tijdens een _refactor_ verandert er geen functionaliteit. Je maakt alleen je code schoner en netter. Een opdrachtgever of eindgebruiker heeft hier niet direct wat aan (tenzij je de code uiteindelijk overdraagt). Waarschijnlijk doe je dit dus helemaal voor jezelf, of je team als je in een team werkt. Als je over een jaar nog eens naar je code kijkt, wil je het meteen kunnen begrijpen.

Tijd vrijmaken voor dit soort “onzichtbare” verbeterslagen is een belangrijk onderdeel van software ontwikkeling, wat frontend development ook is. Als je dit nooit doet, ontstaat er op termijn _technical debt_. Hierdoor wordt het in de toekomst moeilijker om nieuwe functionaliteiten (waar opdrachtgevers en eindgebruikers wél wat aan hebben) toe te voegen. Zorg dus dat je regelmatig je eigen code “onderhoudt”.

Code conventies kun je ook gebruiken voor code reviews door anderen. Als iemand jouw code reviewt, is het handig om te weten welke conventies je aanhoudt. Zorg er dus voor dat je je eigen conventies opneemt in bijvoorbeeld de Readme van je repository, onder een specifieke kop.


### Ademruimte en inspringen

Zoals je inmiddels weet, maakt het voor de browser in HTML over het algemeen niet uit hoe je code er uit ziet. Voor jezelf maakt dat echter wel uit. Controleer en verbeter je HTML aan de hand van de code conventie over [Ademruimte in je HTML](https://github.com/fdnd-task/the-client-website/blob/main/docs/code-conventies.md#geef-je-html-ademruimte).

Welke conventies hou je zelf aan? Gebruik je voor _inspringen_ altijd tabs? Gebruik je altijd 2 spaties, of 4? Hou je regels aan voor inline-level en block-level elementen? Wanneer gebruik je meer _ademruimte_? Probeer je eigen conventies en voorkeuren te herkennen. Schoon inconsequente code meteen op, en commit deze. Zet in je commit message bijvoorbeeld “Refactor HTML”. Zorg er tijdens deze refactorslag voor dat je geen functionaliteit verandert.

Maak in je Readme een kopje aan met “Ademruimte en inspringen” en leg uit hoe je dit in je HTML hebt gedaan. Link naar voorbeelden in je code.


### Volgorde en nesten van CSS selectors

Je hebt in CSS inmiddels gemerkt dat het heel snel een chaos kan worden, als je geen conventies aanhoudt. Browsers bakken er altijd nog wel wat van, maar waarschijnlijk heb je al regelmatig lang moeten scrollen en zoeken naar de juiste selector. Controleer en verbeter je CSS aan de hand van de code conventie over [CSS selectors](https://github.com/fdnd-task/the-client-website/blob/main/docs/code-conventies.md#schrijf-je-css-selectors-in-dezelfde-volgorde-als-de-html).

Hoe consequent nest jij je selectors? Hoe ga je om met inspringen van geneste selectors? Doe je dat altijd hetzelfde? Welke volgorde hou je aan bij je selectors? Is dat ook de volgorde in je HTML? Welke volgorde volg je bij je properties? Groepeer je die op een bepaalde manier? Hoe ga je om met _inheritance_? Hoe zet je de _cascade_ in om zo min mogelijk CSS te schrijven? Het _DRY_ principe is er niet voor niets; _Don't Repeat Yourself_. Zoek naar plekken waar je je CSS kunt refactoren, zodat deze beter onderhoudbaar wordt. Commit deze wijzigingen bijvoorbeeld als “Refactor CSS”. Zorg er ook hier voor dat er geen functionaliteit verandert of breekt hierdoor.

Maak in je Readme een kopje aan met “Volgorde en nesten van CSS selectors” en leg uit hoe je je CSS code hebt gestructureerd. Link naar voorbeelden in je CSS.


### Nesten van media queries

Over _Mobile First_ media queries hoor je ons nou al een tijdje zeuren. In Sprint 6 heb je die hopelijk helemaal onder de knie. Maar je kunt deze nog steeds op verschillende manieren inzetten. Veel online tutorials en ChadGPT zijn nog gebaseerd op verouderde kennis. Sinds een paar jaar kun je namelijk media queries nesten. En dat is de manier die we jullie nu willen aanleren. Het maakt je code namelijk veel makkelijker onderhoudbaar. Controleer en verbeter het nesten van media queries, aan de hand van [de code conventie hierover](https://github.com/fdnd-task/the-client-website/blob/main/docs/code-conventies.md#nest-je-media-queries).

Wat is complexer? De juiste selector schrijven, of de juiste media query schrijven? Hoe kun je je werk makkelijker onderhouden? Als alle styling voor een bepaald onderdeel (_component_) bij elkaar staat, inclusief media queries? Of wanneer de styling voor een bepaald component op totaal verschillende plekken in je stylesheet staat? Hoe werkt de _cascade_ door in geneste media queries? Welke (dubbele) properties kun je weghalen nu je ziet dat je die een paar regels eerder al hebt gedeclareerd? Zoek naar plekken waar je door media queries slimmer in te zetten je CSS kunt refactoren. Commit je wijzigingen bijvoorbeeld als “Refactor media queries”. Hou er ook hier rekening mee dat je geen functionaliteit verandert. Anders is het geen refactor. Als je bijvoorbeeld besluit met Container Queries te gaan werken, verander je daarmee ook de functionaliteit. Dit hoort dus _niet_ bij refactoren.

Maak in je Readme een kopje aan met “Nesten van media queries”, leg uit hoe je in CSS je code hebt opgebouwd voor Responsive Design en leg de media queries uit. Link naar voorbeelden in je CSS.


### Naamgeving

Dingen een naam geven is één van de moeilijkste dingen in ons vakgebied. Bij het bedenken van een `id`, `class`, _custom property_ in CSS of _variabele_ in JS heb je dat al vaker gemerkt. Een goede manier om er achter te komen of je “goede” namen hebt gekozen, is door ze uit te leggen aan iemand anders. En door vragen te stellen over naamgeving aan anderen.

Bespreek met je buur je gekozen naamgeving in HTML, CSS en JS. Stel elkaar kritische vragen. “Waarom noem je dit zo, en niet zo?”, “Waarom gebruik je hier een Engelse variabele, en daar een Nederlandse?”, “Is het niet beter om dit `primary-color` te noemen, in plaats van `color-red`?”, “Waarom kort je deze naam af, maar deze niet?”, “Waarom gebruik je hier kebab-casing, en daar camelCase?” etc. Doel is om je code beter leesbaar, begrijpelijker en beter onderhoudbaar te maken. Refactor je code naar aanleiding van dit overleg, en commit dit als “Refactor naming”. Ook hierbij: verander niet de functionaliteit.

Maak in je Readme een kopje “Naamgeving” en beschrijf de conventies die je hiervoor hebt aangehouden, in je HTML, CSS en JS. Link naar concrete voorbeelden in je code.