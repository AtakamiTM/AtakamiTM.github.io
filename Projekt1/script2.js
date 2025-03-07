// Przechowuje indeksy aktywnych obrazów dla każdej mapy
const currentIndices = {
    map1: 0,
    map2: 0,
    // Dodaj kolejne mapy
};

// Lista obrazów dla każdej mapy
const mapImages = {
    map1: ["https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c59a3da3382bf203c6bda22af892834508377ef3-753x424.webp?auto=format&fit=fill&q=80&w=753", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ca3eab735bbde5d7930ec5845eff19becb46a86b-915x515.jpg?auto=format&fit=fill&q=80&w=915", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/91c2a0221d1670d9b8b10ec61130f2c0a76038a3-915x515.png?auto=format&fit=fill&q=80&w=915", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3554ba8c21ea98c6d121cffe5810dc30af72d553-915x515.png?auto=format&fit=fill&q=80&w=915", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c88e8f8d5715c85b3d623bd6935e44dfcd99ff49-915x515.png?auto=format&fit=fill&q=80&w=915", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1fec41a14fbe7442bbe47ede2b20792eed8c89b8-915x515.png?auto=format&fit=fill&q=80&w=915"],
    map2: ["https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/cad0b406c5924614083a8dc9846b0a8746a20bda-703x396.webp?auto=format&fit=fill&q=80&w=703", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/72244f5326bac4cc17cc3e3f6d7c5831ea573abc-703x396.webp?auto=format&fit=fill&q=80&w=703", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/42d4a5aeb56a7ebe5b2a0de331245c2fe65dcd89-915x515.jpg?auto=format&fit=fill&q=80&w=915", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d7d08f63ee2c4e10da770a6f1f828720bfd3313c-915x515.webp?auto=format&fit=fill&q=80&w=915", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3bf87877f0918085296a5390ff8a53a5ea997a9c-915x515.jpg?auto=format&fit=fill&q=80&w=915", "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2aeb69608ecc098c25359d02524ca282e929f039-915x515.jpg?auto=format&fit=fill&q=80&w=915"],
    // Dodaj kolejne mapy
};

// Funkcja zmieniająca obraz na podstawie kliknięcia na miniaturę
function changeImage(mapId, src) {
    const mainImage = document.getElementById(`mainImage${mapId.slice(-1)}`);
    mainImage.src = src;
    currentIndices[mapId] = mapImages[mapId].indexOf(src);
    updateActiveThumbnail(mapId, src);
}

// Funkcja do zmiany obrazu na poprzedni
function prevImage(mapId) {
    currentIndices[mapId] = (currentIndices[mapId] - 1 + mapImages[mapId].length) % mapImages[mapId].length;
    updateMainImage(mapId);
}

// Funkcja do zmiany obrazu na następny
function nextImage(mapId) {
    currentIndices[mapId] = (currentIndices[mapId] + 1) % mapImages[mapId].length;
    updateMainImage(mapId);
}

// Funkcja aktualizująca główny obraz na podstawie aktualnego indeksu
function updateMainImage(mapId) {
    const mainImage = document.getElementById(`mainImage${mapId.slice(-1)}`);
    const src = mapImages[mapId][currentIndices[mapId]];
    mainImage.src = src;
    updateActiveThumbnail(mapId, src);
}

// Funkcja aktualizująca podświetlenie aktywnej miniatury
function updateActiveThumbnail(mapId, src) {
    const thumbnails = document.querySelectorAll(`#${mapId} .thumbnail`);
    thumbnails.forEach(thumb => {
        thumb.classList.toggle("active", thumb.src.includes(src));
    });
}

// Ustaw początkowy obraz i podświetlenie miniatury
Object.keys(mapImages).forEach(mapId => {
    updateMainImage(mapId);
});
