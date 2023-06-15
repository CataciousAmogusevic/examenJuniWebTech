document.addEventListener('DOMContentLoaded', function () {
    const vaderschapButton = document.getElementById('vaderschap-knop');
    const nieuwSamengesteldeGezinnenButton = document.getElementById('nieuw-samengestelde-gezinnen-knop');
    const scheidingenButton = document.getElementById('scheidingen-knop');
    const myList = document.getElementById('lijst');

    vaderschapButton.addEventListener('click', function () {
        myList.insertAdjacentHTML('beforeend', '<li>In Reykjavik valt het op hoeveel vaders je ziet die voor de kinderen zorgen. Het is hier een alledaags beeld. Vaders krijgen hier dan ook evenveel ouderschapsverlof als moeders. Zo zijn er heel wat gezinnen waar de vader het huishouden runt en de moeder gaat werken.</li>');
    });

    nieuwSamengesteldeGezinnenButton.addEventListener('click', function () {
        myList.insertAdjacentHTML('beforeend', '<li>Nieuw-samengestelde gezinnen zijn in IJsland heel gewoon. Er rust geen enkel stigma op.</li>');
    });

    scheidingenButton.addEventListener('click', function () {
        myList.insertAdjacentHTML('beforeend', '<li>Scheidingen worden in IJsland niet als een mislukking beschouwd. Het is nu eenmaal heel natuurlijk dat het in een relatie kan misgaan en elk dan zijn eigen richting uitgaat. Maar als je samen kinderen hebt, is het uiteraard belangrijk dat je er beiden samen je verantwoordelijkheid voor draagt.</li>');
    });
});