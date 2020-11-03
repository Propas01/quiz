const random = range => Math.floor(Math.random() * range.length)
let europe = { 'Albanija': 'Tirana', 'Andora': 'Andora la Velja', 'Austrija': 'Beč', 'Belorusija': 'Minsk', 'Belgija': 'Brisel', 'Bosna i Hercegovina': 'Sarajevo', 'Bugarska': 'Sofija', 'Hrvatska': 'Zagreb', 'Češka': 'Prag', 'Kipar': 'Nikozija', 'Danska': 'Kopenhagen', 'Estonija': 'Talin', 'Finska': 'Helsinki', 'Francuska': 'Pariz', 'Nemačka': 'Berlin', 'Grčka': 'Atina', 'Mađarska': 'Budimpešta', 'Island': 'Rejkjavik', 'Irska': 'Dablin', 'Italija': 'Rim', 'Letonija': 'Riga', 'Lihtenštajn': 'Vaduz', 'Litvanija': 'Vilinjus', 'Luksemburg': 'Luksemburg', 'Makedonija': 'Skoplje', 'Malta': 'La Valeta', 'Moldavija': 'Kišinjev', 'Monako': 'Monako', 'Crna Gora': 'Podgorica', 'Holandija': 'Amsterdam', 'Norveška': 'Oslo', 'Poljska': 'Varšava', 'Portugalija': 'Lisabon', 'Rumunija': 'Bukurešt', 'Rusija': 'Moskva', 'San Marino': 'San Marino', 'Slovačka': 'Bratislava', 'Slovenija': 'Ljubljana', 'Španija': 'Madrid', 'Švedska': 'Stokholm', 'Švajcarska': 'Bern', 'Ukrajina': 'Kijev', 'Ujedinjeno  <br> Kraljevstvo':'London','Vatikan': 'Vatikan', 'Srbija': 'Beograd', 'Jermenija': 'Jerevan', 'Azerbejdžan': 'Baku', 'Gruzija': 'Tbilisi' },
    asia = { 'Avganistan': 'Kabul', 'Azerbejdžan': 'Baku','Bruneji':'Bandar Seri Begavan', 'Bangladeš': 'Daka', 'Bahrein': 'Manama', 'Butan': 'Timbu', 'Vijetnam': 'Hanoj', 'Gruzija': 'Tbilisi', 'Izrael': 'Jerusalim', 'Indija': 'Nju Delhi', 'Indonezija': 'Džakarta', 'Irak': 'Bagdad', 'Iran': 'Teheran', 'Istočni Timor': 'Dili', 'Japan': 'Tokio', 'Jemen': 'Sana', 'Jermenija': 'Jerevan', 'Jordan': 'Aman', 'Južna Koreja': 'Seul', 'Kazahstan': 'Astana', 'Kambodža': 'Pnom Pen', 'Katar': 'Doha', 'Kina': 'Peking', 'Kipar': 'Nikozija', 'Kirgistan': 'Biškek', 'Kuvajt': 'Kuvajt', 'Laos': 'Vijentijan', 'Liban': 'Bejrut', 'Maldivi': 'Male', 'Melezija': 'Kuala Lumpur', 'Mjanmar': 'Nejpjido', 'Mongolija': 'Ulan Bator', 'Nepal': 'Katmandu', 'Pakistan': 'Islamabad', 'Oman': 'Muskat', 'Rusija': 'Moskva', 'Saudijska Arabija': 'Rijad', 'Severna Koreja': 'Pjongjang', 'Singapur': 'Singapur', 'Sirija': 'Damask', 'Tajland': 'Bangkok', 'Tadžikistan': 'Dušanbe', 'Turkmenistan': 'Ashabad', 'Turska': 'Ankara', 'Uzbekistan': 'Taškent', 'Filipini': 'Manila', 'Ujedinjeni <br>  Arapski Emirati': 'Abu Dabi','Šri Lanka':'Kolombo','Tajvan':'Tajpej'  }, 
    africa = { 'Alžir': 'Alžir', 'Angola': 'Luanda', 'Benin': 'Porto Novo', 'Bocvana': 'Gaborone', 'Burkina Faso': 'Uagadugu', 'Borundi': 'Budžumbura', 'Gabon': 'Librvil', 'Gambija': 'Bandzul', 'Gana': 'Akra', 'Gvineja': 'Konakri', 'Gvineja Bisao': 'Bisau', 'Egipat': 'Kairo', 'Ekvatorijalna <br>  Gvineja': 'Malabo', 'Eritreja': 'Asmara', 'Etiopija': 'Adis Abeba', 'Zambija': 'Lusaka', 'Zelenortska Ostrva': 'Praja', 'Zimbabve': 'Harare', 'Južnoafrička <br>  Republika': 'Pretorija', 'Južni Sudan': 'Džuba', 'Kamerun': 'Jaunde', 'Kenija': 'Najrobi', 'Kongo': 'Brazavil', 'DR Kongo': 'Kinšasa', 'Komori': 'Moroni', 'Lesoto': 'Maseru', 'Liberija': 'Monrovija', 'Libija': 'Tripoli', 'Madagaskar': 'Antananarivo', 'Malavi': 'Lilongve', 'Mali': 'Bamako', 'Maroko': 'Rabat', 'Mauritanija': 'Nuakšot', 'Mauricijus': 'Port Luis', 'Mozambik': 'Maputo', 'Namibija': 'Vindhuk', 'Nigerija': 'Abudža', 'Niger': 'Nijamej', 'Obala Slonovače': 'Jamasukro', 'Ruanda': 'Kigali', 'Sijera Leone': 'Fritaun', 'Senegal': 'Dakar', 'Somalija': 'Mogadišu', 'Sudan': 'Kartun', 'Svazilend': 'Mbabane', 'Tanzanija': 'Dodoma', 'Togo': 'Lome', 'Tunis': 'Tunis', 'Uganda': 'Kampala', 'Centralnoafrička  <br> Republika': 'Bangi', 'Čad': 'Ndžamena', 'Džibuti': 'Džibuti', 'Maroko': 'Rabat','Sao Tome i Prinsipe':'Sao Tome'  },
    north_america = { 'Antigva i Barbuda': 'Sent Džons', 'Barbados': 'Bridžtaun', 'Bahami': 'Nasau', 'Belize': 'Belmopan', 'Gvatemala': 'Gvatemala', 'Grenada': 'Sent Džordžes', 'Dominika': 'Rozo', 'Dominikanska  <br> Republika': 'Santo Domingo', 'Salvador': 'San Salvador', 'Jamajka': 'Kingston', 'Kanada': 'Otava', 'Kostarika': 'San Hose', 'Kuba': 'Havana', 'Meksiko': 'Meksiko Siti', 'Nikaragva': 'Managva', 'Panama': 'Panama', 'Sveta Lucija': 'Kastri', 'Sveti Vinsent i <br>  Grenadini': 'Kingstaun', 'Sveti Kristofer i <br>  Nevis': 'Baster', 'Sjedinjene <br>  Američke Države': 'Vašington', 'Trindad i Tobago': 'Port of Spejn', 'Haiti': 'Port o Prens', 'Honduras': 'Tegusigalpa' },
    south_america = { 'Argentina': 'Buenos Ajres', 'Bolivija': 'Sukre', 'Brazil': 'Brazilija', 'Čile': 'Santijago', 'Kolumbija': 'Bogota', 'Ekvador': 'Kito', 'Gvajana': 'Džordžtaun', 'Paragvaj': 'Asunsion', 'Peru': 'Lima', 'Surinam': 'Paramaribo', 'Urugvaj': 'Montevideo', 'Venecuela': 'Karakas' },
    australia = { 'Australija': 'Kanbera', 'Fidži': 'Suva', 'Kiribati': 'Bairiki', 'Maršalska Ostrva': 'Madžuro', 'Mikronezija': 'Palikir', 'Nauru': 'Jaren', 'Novi Zeland': 'Velington', 'Palau': 'Ngerulmud', 'Papua Nova Gvineja': 'Port Morsbi', 'Samoa': 'Apija', 'Solomonova Ostrva': 'Honijara', 'Tonga': "Nukualofa", 'Tuvalu': 'Funafuti', 'Vanuatu': 'Port Vila' },
    world = [europe, asia, africa, north_america, south_america, australia],
    all_capitals = [],
    all_countries = [],
    all_countries_copy=[]/*it is array of all countries without <br>!*/

for(let continent of world){
    all_countries.push(...Object.keys(continent))
    all_capitals.push(...Object.values(continent))
}

//add states without <br> element!
for(let state of all_countries){
    if(state.indexOf(' <br> ')>-1){
        let index=state.indexOf(' <br> ')
        state=state.slice(0,index)+state.slice(index+6)
    }
    all_countries_copy.push(state)
}
let back_btn = document.getElementById('back')
let flag = document.getElementById('flag')
back_btn.onclick=function(){
    window.history.back()
}

let country = document.getElementById('country'),
    capital = document.getElementById('capital');
(function country_and_capital(){
    setInterval(() => {
        let random_number = random(all_countries)
        country.innerHTML = all_countries[random_number]+'<br>↓'.fontcolor('white')
        capital.innerHTML = all_capitals[random_number]
    }, 1500);
})() 


let search_bar=document.getElementById('search_bar'),
    country_btn=document.querySelector('.country_btn'),
    capital_btn=document.querySelector('.capital_btn'),
    search_result=document.getElementById('search_result'),
    option='D'

//searching for capitals or coutries
search_bar.addEventListener('input', function () {
    search_bar.style.textTransform='capitalize'
    if(option=='D'){
        if(all_countries_copy.map(el=>el.toLowerCase()).includes(this.value.toLowerCase())){
            let position=all_countries_copy.map(el=>el.toLowerCase()).indexOf(this.value.toLowerCase())
            search_result.innerHTML = all_capitals[position]
            flag.src=`Flags/${all_countries_copy[position]}.jpg`
            flag.style.animation = "flag_start 2.5s";
            flag.style.boxShadow='0px 0px 8px 12px whitesmoke'
        }
        else{
            search_result.innerHTML ='. . .'
            flag.src=''
            flag.style.animation = "flag_end 2.5s";
            flag.style.boxShadow=''
        }
    }
    else {
        if(all_capitals.map(el=>el.toLowerCase()).includes(this.value.toLowerCase())){
            let position=all_capitals.map(el=>el.toLowerCase()).indexOf(this.value.toLowerCase())
            search_result.innerHTML=all_countries_copy[position]
            flag.src=`Flags/${all_countries_copy[position]}.jpg`
            flag.style.animation = "flag_start 2.5s";
            flag.style.boxShadow='0px 0px 8px 12px whitesmoke'
        }
        else{
            search_result.innerHTML='. . .'
            flag.src=''
            flag.style.animation = "flag_end 2.5s";
            flag.style.boxShadow=''
        }
    }
})

//choose for what searching for
function countries_or_capitals(){
    if(this.innerHTML == 'D'){
        this.style.opacity='1'
        this.style.pointerEvents='none'
        capital_btn.style.pointerEvents='auto'
        capital_btn.style.opacity='0.5'
        flag.src=''
        flag.style.boxShadow=''
        search_result.innerHTML='. . .'
        search_bar.value=''
        search_bar.placeholder='Upiši državu...'
        option='D'
    }
    else{
        this.style.opacity='1'
        this.style.pointerEvents='none'
        country_btn.style.pointerEvents='auto'
        country_btn.style.opacity='0.5'
        flag.src=''
        search_bar.value=''
        flag.style.boxShadow=''
        search_result.innerHTML='. . .'
        search_bar.placeholder='Upiši grad...'
        option='G'
    }
}
country_btn.onclick=countries_or_capitals
capital_btn.onclick=countries_or_capitals

const CONTINENTS = document.querySelectorAll('.continent'),
      COUTRY_LIST=document.querySelector('.country_list')

document.documentElement.addEventListener('click',function(e){
    if(window.innerWidth<850){
        if(e.target.id == 'search_bar'){
            CONTINENTS.forEach(el=>el.style.display='none')
        }
        else{
            CONTINENTS.forEach(el=>el.style.display='')
        }
    }
})
CONTINENTS.forEach(continent=>{
    continent.addEventListener('mouseover', e => {
        const CHOOSEN_CONT = eval(e.target.id),
              COUNTRIES = Object.keys(CHOOSEN_CONT),
              CAPITALS = Object.values(CHOOSEN_CONT)
        for(let index in COUNTRIES){
            COUTRY_LIST.innerHTML+=`${Number(index)+1}. ${COUNTRIES[index]} → ${CAPITALS[index]}<br>`
        }
    })
    continent.addEventListener('mouseout',() => {
        COUTRY_LIST.innerHTML=''
    })
    continent.addEventListener('click',e=>{
        COUTRY_LIST.innerHTML=''
        window.open(`CONTINENTS/${e.target.id}.html`,'_self')
    }) 
})
