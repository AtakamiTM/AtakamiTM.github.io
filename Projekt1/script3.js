// Definiujemy 25 skinów w tablicy `skins`
let skins = [
    { id: 1, img: 'https://liquipedia.net/commons/images/thumb/e/e5/Vandal_dot_exe_VALORANT.png/241px-Vandal_dot_exe_VALORANT.png', nazwa: "Dot Exe"},
    { id: 2, img: 'https://liquipedia.net/commons/images/thumb/2/20/Vandal_hivemind_VALORANT.png/241px-Vandal_hivemind_VALORANT.png', nazwa: "Hivemind"},
    { id: 3, img: 'https://liquipedia.net/commons/images/thumb/6/6b/Vandal_horizon_VALORANT.png/241px-Vandal_horizon_VALORANT.png', nazwa: "Horizon"},
    { id: 4, img: 'https://liquipedia.net/commons/images/thumb/8/89/Vandal_lycans_bane_VALORANT.png/241px-Vandal_lycans_bane_VALORANT.png', nazwa: "Lycans Bane"},
    { id: 5, img: 'https://liquipedia.net/commons/images/thumb/6/61/Vandal_ktac_VALORANT.png/241px-Vandal_ktac_VALORANT.png', nazwa: "KTAC"},
    { id: 6, img: 'https://liquipedia.net/commons/images/thumb/7/70/Vandal_titanmail_VALORANT.png/241px-Vandal_titanmail_VALORANT.png', nazwa: "Titanmail"},
    { id: 7, img: 'https://liquipedia.net/commons/images/thumb/4/42/Vandal_araxys_black_VALORANT.png/241px-Vandal_araxys_black_VALORANT.png', nazwa: "Araxys Black"},
    { id: 8, img: 'https://liquipedia.net/commons/images/thumb/b/b9/Vandal_prime_blue_VALORANT.png/241px-Vandal_prime_blue_VALORANT.png', nazwa: "Prime Blue"},
    { id: 9, img: 'https://liquipedia.net/commons/images/thumb/6/63/Vandal_elderflame_gold_VALORANT.png/241px-Vandal_elderflame_gold_VALORANT.png', nazwa: "Elderflame Gold"},
    { id: 10, img: 'https://liquipedia.net/commons/images/thumb/8/8b/Vandal_sentinels_of_light_red_green_VALORANT.png/241px-Vandal_sentinels_of_light_red_green_VALORANT.png', nazwa: "Sentinels of Light Red Green"},
    { id: 11, img: 'https://liquipedia.net/commons/images/thumb/7/74/Vandal_oni_VALORANT.png/241px-Vandal_oni_VALORANT.png', nazwa: "Oni"},
    { id: 12, img: 'https://liquipedia.net/commons/images/thumb/d/dc/Vandal_magepunk_VALORANT.png/241px-Vandal_magepunk_VALORANT.png', nazwa: "Magepunk"},
    { id: 13, img: 'https://liquipedia.net/commons/images/thumb/2/2a/Vandal_gaias_vengeance_orange_VALORANT.png/241px-Vandal_gaias_vengeance_orange_VALORANT.png', nazwa: "Gaias Vengeance Orange"},
    { id: 14, img: 'https://liquipedia.net/commons/images/thumb/8/8e/Vandal_araxys_purple_VALORANT.png/241px-Vandal_araxys_purple_VALORANT.png', nazwa: "Araxys Purple"},
    { id: 15, img: 'https://liquipedia.net/commons/images/thumb/0/02/Vandal_prelude_to_chaos_VALORANT.png/241px-Vandal_prelude_to_chaos_VALORANT.png', nazwa: "Prelude to Chaos"},
    { id: 16, img: 'https://liquipedia.net/commons/images/thumb/e/e5/Vandal_reaver_white_VALORANT.png/241px-Vandal_reaver_white_VALORANT.png', nazwa: "Reaver White"},
    { id: 17, img: 'https://liquipedia.net/commons/images/thumb/4/4c/Vandal_reaver_VALORANT.png/241px-Vandal_reaver_VALORANT.png', nazwa: "Reaver"},
    { id: 18, img: 'https://liquipedia.net/commons/images/thumb/1/10/Vandal_immortalized_green_VALORANT.png/241px-Vandal_immortalized_green_VALORANT.png', nazwa: "Immortalized Green"},
    { id: 19, img: 'https://liquipedia.net/commons/images/thumb/9/9c/Vandal_chronovoid_black_VALORANT.png/241px-Vandal_chronovoid_black_VALORANT.png', nazwa: "ChronoVoid Black"},
    { id: 20, img: 'https://liquipedia.net/commons/images/thumb/8/81/Vandal_rgx_11z_pro_VALORANT.png/241px-Vandal_rgx_11z_pro_VALORANT.png', nazwa: "RGX 11z Pro"},
    { id: 21, img: 'https://liquipedia.net/commons/images/thumb/d/d8/Vandal_valiant_hero_VALORANT.png/241px-Vandal_valiant_hero_VALORANT.png', nazwa: "Valiant Hero"},
    { id: 22, img: 'https://liquipedia.net/commons/images/thumb/4/42/Vandal_sentinels_of_light_VALORANT.png/241px-Vandal_sentinels_of_light_VALORANT.png', nazwa: "Sentinels of Light"},
    { id: 23, img: 'https://liquipedia.net/commons/images/thumb/3/33/Vandal_neptune_VALORANT.png/241px-Vandal_neptune_VALORANT.png', nazwa: "Neptune"},
    { id: 24, img: 'https://liquipedia.net/commons/images/thumb/5/54/Vandal_glitchpop_2.0_red_VALORANT.png/241px-Vandal_glitchpop_2.0_red_VALORANT.png', nazwa: "Glitchpop 2.0 Red"},
    { id: 25, img: 'https://liquipedia.net/commons/images/thumb/d/d5/Vandal_gaias_vengeance_blue_VALORANT.png/241px-Vandal_gaias_vengeance_blue_VALORANT.png', nazwa: "Gaias Vengeance Blue"}
];

// Losowanie 16 unikalnych skinów spośród 25
let currentSkins = [];
while (currentSkins.length < 16) {
    let randomIndex = Math.floor(Math.random() * skins.length);
    let selectedSkin = skins[randomIndex];
    if (!currentSkins.includes(selectedSkin)) {
        currentSkins.push(selectedSkin);
    }
}

// Ustawienia początkowe turnieju
let currentRound = 1;
let selectedSkins = [];
let rounds = [16, 8, 4, 2, 1];
let matchCount = 0;

function updateMatch() {
    if (currentSkins.length === 1) {
        document.getElementById('tournament').innerHTML = `<h2>Najlepszy skin to!</h2><img src="${currentSkins[0].img}" alt="Najlepszy skin"><h2><p class="skin-name" id="skin1-name">${currentSkins[0].nazwa}</p></h2>`;
        return;
    }

    let skin1 = currentSkins[0];
    let skin2 = currentSkins[1];
    
    // Ustawiamy obrazki i nazwy dla aktualnych skinów
    document.getElementById('skin1').querySelector('img').src = skin1.img;
    document.getElementById('skin2').querySelector('img').src = skin2.img;
    document.getElementById('skin1-name').innerText = skin1.nazwa;
    document.getElementById('skin2-name').innerText = skin2.nazwa;

    let totalMatches = rounds[currentRound - 1] / 2;
    document.getElementById('roundInfo').innerText = `Runda ${currentRound} z ${rounds[currentRound - 1]}\n(${matchCount + 1}/${totalMatches})`;
}

function selectSkin(choice) {
    // Dodajemy wybrany skin do `selectedSkins` i usuwamy obecnie wyświetlane pary
    selectedSkins.push(currentSkins[choice - 1]);
    currentSkins = currentSkins.slice(2);

    // Zwiększamy licznik starć w tej rundzie
    matchCount++;

    // Sprawdzamy, czy skończyliśmy pary w obecnej rundzie
    if (currentSkins.length === 0) {
        // Jeśli tak, przechodzimy do następnej rundy
        currentSkins = selectedSkins;
        selectedSkins = [];
        currentRound++;
        matchCount = 0;
    }

    // Aktualizujemy wyświetlane skiny
    updateMatch();
}

// Rozpoczynamy turniej po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
    updateMatch();
});
