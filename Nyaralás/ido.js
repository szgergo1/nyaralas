function calculateDaysUntilEasterMonday() {
    const today = new Date();
    const easterMonday = new Date(2025, 3, 21); // 2025. április 21. (a hónap indexelése 0-tól kezdődik, így 3 = április)

    const timeDifference = easterMonday - today;
    const napbucsu = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("ido").innerText = `A következő búcsúig még ${napbucsu} nap van.`;
}

window.onload = calculateDaysUntilEasterMonday;
