const title = document.querySelector(".title");
const n_data = document.querySelector(".n_data")
const date = document.querySelector(".date");
const img = document.querySelector(".img img");
const common = document.querySelector(".common");
const be_p1 = document.querySelector(".be_p1")
const be__p1 = document.querySelector(".be__p1")
const be_p2 = document.querySelector(".be_p2")
const be__p2 = document.querySelector(".be__p2")
const _date = document.querySelector("._date");
const __date = document.querySelector(".__date");
const _common = document.querySelector("._common")
const __common = document.querySelector(".__common")
const be_img = document.querySelector(".be_img img")
const be__img = document.querySelector(".be__img img")
const bleimg = document.querySelector(".bleimg img")
const ble_h3 = document.querySelector(".ble_h3")
const bledate = document.querySelector(".bledate")
const blep = document.querySelector(".blep")
const icon = document.querySelector(".fa-magnifying-glass");
const url =
`https://gnews.io/api/v4/search?q=india&lang=en&country=us&max=10&apikey=1a6d4779b1497dd8bccfd14fbd371a84`;
getnews(url); 
getnewsadded(url);
// search inputs
let input;
icon.addEventListener("click",()=>{
    input = document.querySelector("#search").value.trim().toString();
    const url =
`https://gnews.io/api/v4/search?q=${input}&lang=en&country=us&max=10&apikey=1a6d4779b1497dd8bccfd14fbd371a84`;
;
    getnews(url); 
    getnewsadded(url);
})
// category
const sport = document.querySelector("#sport")
const politics = document.querySelector("#politics")
const cricket = document.querySelector("#cricket")
const election = document.querySelector("#election")
const economy = document.querySelector("#economy")
const nature = document.querySelector("#nature")
sport.addEventListener("click",function(event){
    event.preventDefault();
    category("sport")
});
politics.addEventListener("click",function(event){
    event.preventDefault();
    category("politics")
});
cricket.addEventListener("click",function(event){
    event.preventDefault();
    category("cricket")
});
election.addEventListener("click",function(event){
    event.preventDefault();
    category("election")
});
economy.addEventListener("click",function(event){
    event.preventDefault();
    category("economy")
});
nature.addEventListener("click",function(event){
    event.preventDefault();
    category("nature")
});
economy.addEventListener("click",function(event){
    event.preventDefault();
    category("economy")
});
function category(category){
    const url = `https://gnews.io/api/v4/search?q=${category}&lang=en&country=us&max=10&apikey=1a6d4779b1497dd8bccfd14fbd371a84`;
;
    getnews(url); 
    const url_ = `https://gnews.io/api/v4/search?q=${category}&lang=en&country=us&max=10&apikey=1a6d4779b1497dd8bccfd14fbd371a84`;
    getnewsadded(url_);
}

async function getnews(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.articles);
    const first_news = data.articles[0];
    const second_news = data.articles[1];
    const third_news = data.articles[2];
    const T = first_news.title;
    const D = `${first_news.content.slice(0,-13)} Read more`
    const TT = `${first_news.publishedAt.slice(0,10)} At ${first_news.publishedAt.slice(11,19)}`;
    const I = first_news.image;
    const link = first_news.url;
    const T_2 = second_news.title;
    const T_3 = third_news.title;
    const D_2 = `${second_news.content.slice(0,-13)} Read more`
    const D_3 = `${third_news.content.slice(0,-13)} Read more`
    const date_2 =  `${second_news.publishedAt.slice(0,10)} At ${second_news.publishedAt.slice(11,19)}`
    const date_3 =  `${third_news.publishedAt.slice(0,10)} At ${third_news.publishedAt.slice(11,19)}`
    const _link = second_news.url;
    const __link = third_news.url;
    const _I = second_news.image;
    const __I = third_news.image;
    title.innerText = T;
    n_data.innerText = D;
    date.innerText = TT;
    img.src = I;
    common.href=link;
    be_p1.innerText = T_2;
    be__p1.innerText = T_3;
    be_p2.innerText = D_2;
    be__p2.innerText = D_3;
    _date.innerText = date_2;
    __date.innerText = date_3;
    _common.href = _link;
    __common.href = __link;
    be_img.src = _I;
    be__img.src = __I;
    bleimg.src = __I
    ble_h3.innerText = T_3;
    bledate.innerText = date_3;
    blep.innerText = D_3
} 
async function getnewsadded(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.articles);
    const newarray = data.articles;
    const newContainer = document.querySelector("#newsContainer")
    newContainer.innerHTML = '';
    newarray.slice(3).forEach(news => {
        let newcard = document.createElement("div");
        newcard.classList.add("ble");
        newcard.innerHTML = `
                        <div class="bleimg">
                    <img src="${news.image}" alt="">
                </div>
                <a href="${news.url}" target="_blank"><h3 class="ble_h3">${news.title}</h3></a>
                <p class="blep ">${news.content.slice(0,-13)} Read more</p>
                <p class="date bledate" style="padding-left: 5px;">${news.publishedAt.slice(0,10)} At ${news.publishedAt.slice(11,19)}</p>
        `
        newContainer.appendChild(newcard);
    });
}
document.querySelector(".fa-bars").addEventListener("click",()=>{
    document.querySelector(".hamburger").style.left = "0"
    
})
document.querySelector(".about").addEventListener("click",()=>{
    document.querySelector(".hamburger").style.left = "0"
    
})
document.querySelector(".fa-x").addEventListener("click",()=>{
    document.querySelector(".hamburger").style.left = "-100%"
})