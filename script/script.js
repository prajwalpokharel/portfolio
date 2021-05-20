class GithubStats {
    #statsUrl="https://github-readme-stats.vercel.app/api?show_icons=true&cache_seconds=5&include_all_commits=true&theme=tokyonight&count_private=true&username=";
    #langsUrl="https://github-readme-stats.vercel.app/api/top-langs/?layout=compact&langs_count=15&theme=tokyonight&count_private=true&username=";
    #username;

    constructor(username) {
        this.#username = username;
    }
    loadStats(selector) {
        let element = document.querySelector(selector);
        if (element != undefined){
            element.style = `background-image: url("${this.#statsUrl + this.#username}"); background-repeat: no-repeat; background-position: center; background-size: contain;`;
        }
    }
    loadLangs(selector) {
        let element = document.querySelector(selector);
        if (element != undefined){
            element.style = `background-image: url("${this.#langsUrl + this.#username}"); background-repeat: no-repeat; background-position: center; background-size: contain;`;
        }
    }
}

var stats=new GithubStats("soulr344");
stats.loadStats(".github-stats-commits");
stats.loadLangs(".github-stats-lang");

class AnimatedNavBar {
    constructor(burgerSelector, panelSelector){
        var burger = document.querySelector(burgerSelector),
            panel = document.querySelector(panelSelector);

        if (burger==undefined || panel==undefined){
            console.log("Error: No element found with given parameters!")
            return;
        }
        burger.addEventListener("click", ()=>{
            burger.classList.toggle("clicked");
            panel.classList.toggle("visible");
        });
    }
}

new AnimatedNavBar(".hamburger", ".nav-list");