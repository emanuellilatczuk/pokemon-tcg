const COLLECTION_KEY = "pokedeck_collection";
const DEFAULT_OWNED_CARDS = ["Charizard", "Blastoise", "Machamp"];

const FAVORITES_KEY = "pokedeck_favorites";
const DEFAULT_FAVORITE_CARDS = ["Blastoise"];

const CARD_DETAILS = {
    Pikachu: {
        hp: 60,
        type: "electric",
        typeName: "Elétrico",
        rarity: "Rare",
        number: "#025",
        attacks: [
            {
                name: "Thunder Shock",
                damage: "30",
                desc: "Flip a coin. If tails, Pikachu does 10 damage to itself."
            }
        ],
        weakness: "Fighting ×2",
        resistance: "Nenhuma",
        setName: "Base Set",
        setSeries: "Original",
        artist: "Ken Sugimori"
    },
    Charizard: {
        hp: 120,
        type: "fire",
        typeName: "Fogo",
        rarity: "Rare Holo",
        number: "#006",
        attacks: [
            {
                name: "Fire Spin",
                damage: "100",
                desc: "Descarte 2 cartas de Energia ligadas ao Charizard para poder usar este ataque."
            }
        ],
        weakness: "Água ×2",
        resistance: "Lutador -30",
        setName: "Base Set",
        setSeries: "Original",
        artist: "Ken Sugimori"
    },
    Blastoise: {
        hp: 100,
        type: "water",
        typeName: "Água",
        rarity: "Rare Holo",
        number: "#009",
        attacks: [
            {
                name: "Hydro Pump",
                damage: "40+",
                desc: "Causa 40 de dano mais 10 de dano adicional para cada Energia de Água ligada ao Blastoise."
            }
        ],
        weakness: "Elétrico ×2",
        resistance: "Nenhuma",
        setName: "Base Set",
        setSeries: "Original",
        artist: "Ken Sugimori"
    },
    Venusaur: {
        hp: 100,
        type: "grass",
        typeName: "Planta",
        rarity: "Rare Holo",
        number: "#003",
        attacks: [
            {
                name: "Solarbeam",
                damage: "67",
                desc: "Um feixe de energia solar super concentrado é disparado contra o oponente."
            }
        ],
        weakness: "Fogo ×2",
        resistance: "Nenhuma",
        setName: "Base Set",
        setSeries: "Original",
        artist: "Ken Sugimori"
    },
    Mewtwo: {
        hp: 70,
        type: "psychic",
        typeName: "Psíquico",
        rarity: "Rare Secret",
        number: "#150",
        attacks: [
            {
                name: "Psychic",
                damage: "10+",
                desc: "Causa 10 de dano mais 10 de dano adicional para cada carta de Energia ligada ao Pokémon Defensor."
            }
        ],
        weakness: "Psíquico ×2",
        resistance: "Nenhuma",
        setName: "Base Set",
        setSeries: "Original",
        artist: "Ken Sugimori"
    },
    Dragonite: {
        hp: 100,
        type: "dragon",
        typeName: "Dragão",
        rarity: "Rare Ultra",
        number: "#149",
        attacks: [
            {
                name: "Slam",
                damage: "90",
                desc: "Jogue 2 moedas. Este ataque causa 90 de dano vezes o número de caras."
            }
        ],
        weakness: "Gelo ×2",
        resistance: "Nenhuma",
        setName: "Fossil",
        setSeries: "Original",
        artist: "Mitsuhiro Arita"
    },
    Eevee: {
        hp: 30,
        type: "normal",
        typeName: "Normal",
        rarity: "Common",
        number: "#133",
        attacks: [
            {
                name: "Tail Wag",
                damage: "0",
                desc: "Jogue uma moeda. Se der cara, o Pokémon Defensor não poderá atacar o Eevee no próximo turno."
            }
        ],
        weakness: "Lutador ×2",
        resistance: "Nenhuma",
        setName: "Jungle",
        setSeries: "Original",
        artist: "Keiji Kinebuchi"
    },
    Machamp: {
        hp: 100,
        type: "fighting",
        typeName: "Lutador",
        rarity: "Rare Holo",
        number: "#068",
        attacks: [
            {
                name: "Seismic Toss",
                damage: "60",
                desc: "Um arremesso violento que causa dano fixo e ignora resistências."
            }
        ],
        weakness: "Psíquico ×2",
        resistance: "Nenhuma",
        setName: "Base Set",
        setSeries: "Original",
        artist: "Ken Sugimori"
    }
};

function getCollection() {
    const data = localStorage.getItem(COLLECTION_KEY);
    if (!data) {
        saveCollection(DEFAULT_OWNED_CARDS);
        return DEFAULT_OWNED_CARDS;
    }
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Erro ao parsear a coleção:", e);
        return DEFAULT_OWNED_CARDS;
    }
}

function saveCollection(collection) {
    localStorage.setItem(COLLECTION_KEY, JSON.stringify(collection));
}

function isCardOwned(cardName) {
    const collection = getCollection();
    return collection.some((name) => name.toLowerCase() === cardName.toLowerCase());
}

function toggleCardOwnership(cardName) {
    let collection = getCollection();
    const normalizedName = cardName.trim();
    const index = collection.findIndex((name) => name.toLowerCase() === normalizedName.toLowerCase());

    let added = false;
    if (index >= 0) {
        collection.splice(index, 1);
    } else {
        collection.push(normalizedName);
        added = true;
    }
    saveCollection(collection);
    return added;
}

function getFavorites() {
    const data = localStorage.getItem(FAVORITES_KEY);
    if (!data) {
        saveFavorites(DEFAULT_FAVORITE_CARDS);
        return DEFAULT_FAVORITE_CARDS;
    }
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Erro ao parsear favoritos:", e);
        return DEFAULT_FAVORITE_CARDS;
    }
}

function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function isCardFavorited(cardName) {
    const favorites = getFavorites();
    return favorites.some((name) => name.toLowerCase() === cardName.toLowerCase());
}

function toggleCardFavorite(cardName) {
    let favorites = getFavorites();
    const normalizedName = cardName.trim();
    const index = favorites.findIndex((name) => name.toLowerCase() === normalizedName.toLowerCase());

    let added = false;
    if (index >= 0) {
        favorites.splice(index, 1);
    } else {
        favorites.push(normalizedName);
        added = true;
    }
    saveFavorites(favorites);
    return added;
}

function getCollectionStats() {
    const totalDemoCards = 8;
    const demoCardNames = ["Pikachu", "Charizard", "Blastoise", "Venusaur", "Mewtwo", "Dragonite", "Eevee", "Machamp"];
    const ownedDemoCount = demoCardNames.filter((name) => isCardOwned(name)).length;

    const percentage = Math.round((ownedDemoCount / totalDemoCards) * 100);

    return {
        ownedCount: ownedDemoCount,
        totalCount: totalDemoCards,
        percentage: percentage
    };
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("✓ pokeDeck Studio inicializado com sucesso!");

    if (typeof bootstrap !== "undefined" && bootstrap.Tooltip) {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    }

    const logoutBtn = document.querySelector(".btn-logout-trigger");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("pokedeck_user_logged_in");
        });
    }
});
