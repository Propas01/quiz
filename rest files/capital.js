let quiz_field = document.querySelector('.quiz')
let title=document.querySelector('h1')

const random = range => Math.floor(Math.random() * range.length)

let europe = { 'Albanija': 'Tirana', 'Andora': 'Andora la Velja', 'Austrija': 'Beč', 'Belorusija': 'Minsk', 'Belgija': 'Brisel', 'Bosna i Hercegovina': 'Sarajevo', 'Bugarska': 'Sofija', 'Hrvatska': 'Zagreb', 'Češka': 'Prag', 'Kipar': 'Nikozija', 'Danska': 'Kopenhagen', 'Estonija': 'Talin', 'Finska': 'Helsinki', 'Francuska': 'Pariz', 'Nemačka': 'Berlin', 'Grčka': 'Atina', 'Mađarska': 'Budimpešta', 'Island': 'Rejkjavik', 'Irska': 'Dablin', 'Italija': 'Rim', 'Letonija': 'Riga', 'Lihtenštajn': 'Vaduz', 'Litvanija': 'Vilinjus', 'Luksemburg': 'Luksemburg', 'Makedonija': 'Skoplje', 'Malta': 'La Valeta', 'Moldavija': 'Kišinjev', 'Monako': 'Monako', 'Crna Gora': 'Podgorica', 'Holandija': 'Amsterdam', 'Norveška': 'Oslo', 'Poljska': 'Varšava', 'Portugalija': 'Lisabon', 'Rumunija': 'Bukurešt', 'Rusija': 'Moskva', 'San Marino': 'San Marino', 'Slovačka': 'Bratislava', 'Slovenija': 'Ljubljana', 'Španija': 'Madrid', 'Švedska': 'Stokholm', 'Švajcarska': 'Bern', 'Ukrajina': 'Kijev', 'Ujedjnjeno <br> Kraljevstvo': 'London', 'Vatikan': 'Vatikan', 'Srbija': 'Beograd', 'Jermenija': 'Jerevan', 'Azerbejdžan': 'Baku', 'Gruzija': 'Tbilisi' },
    asia = {'Tajvan':'Tajpej','Šri Lanka':'Kolombo' , 'Avganistan': 'Kabul', 'Azerbejdžan': 'Baku', 'Bruneji':'Bandar Seri Begavan','Bangladeš': 'Daka', 'Bahrein': 'Manama', 'Butan': 'Timbu', 'Vijetnam': 'Hanoj', 'Gruzija': 'Tbilisi', 'Izreal': 'Jerusalim', 'Indija': 'Nju Delhi', 'Indonezija': 'Džakarta', 'Irak': 'Bagdad', 'Iran': 'Teheran', 'Istočni Timor': 'Dili', 'Japan': 'Tokio', 'Jemen': 'Sana', 'Jermenija': 'Jerevan', 'Jordan': 'Aman', 'Južna Koreja': 'Seul', 'Kazahstan': 'Astana', 'Kambodža': 'Pnom Pen', 'Katar': 'Doha', 'Kina': 'Peking', 'Kipar': 'Nikozija', 'Kirgistan': 'Biškek', 'Kuvajt': 'Kuvajt', 'Laos': 'Vijentijan', 'Liban': 'Bejrut', 'Maldivi': 'Male', 'Melezija': 'Kuala Lumpur', 'Mjanmar': 'Nejpjido', 'Mongolija': 'Ulan Bator', 'Nepal': 'Katmandu', 'Pakistan': 'Islamabad', 'Oman': 'Muskat', 'Rusija': 'Moskva', 'Saudijska Arabija': 'Rijad', 'Severna Koreja': 'Pjongjang', 'Singapur': 'Singapur', 'Sirija': 'Damask', 'Tajland': 'Bangkok', 'Tadžikistan': 'Dušanbe', 'Turkmenistan': 'Ashabad', 'Turska': 'Ankara', 'Uzbekistan': 'Taškent', 'Filipini': 'Manila', 'Ujedinjeni <br> Arapski Emirati': 'Abu Dabi' },
    africa = {'Sao Tome i Prinsipe':'Sao Tome' , 'Alžir': 'Alžir', 'Angola': 'Luanda', 'Benin': 'Porto Novo', 'Bocvana': 'Gaborone', 'Burkina Faso': 'Uagadugu', 'Borundi': 'Budžumbura', 'Gabon': 'Librvil', 'Gambija': 'Bandzul', 'Gana': 'Akra', 'Gvineja': 'Konakri', 'Gvineja Bisao': 'Bisau', 'Egipat': 'Kairo', 'Ekvatorijalna <br> Gvineja': 'Malabo', 'Eritreja': 'Asmara', 'Etiopija': 'Adis Abeba', 'Zambija': 'Lusaka', 'Zelenortska Ostrva': 'Praja', 'Zimbabve': 'Harare', 'Južnoafrička <br> Republika': 'Pretorija', 'Južni Sudan': 'Džuba', 'Kamerun': 'Jaunde', 'Kenija': 'Najrobi', 'Kongo': 'Brazavil', 'DR Kongo': 'Kinšasa', 'Komori': 'Moroni', 'Lesoto': 'Maseru', 'Liberija': 'Monrovija', 'Libija': 'Tripoli', 'Madagaskar': 'Antananarivo', 'Malavi': 'Lilongve', 'Mali': 'Bamako', 'Maroko': 'Rabat', 'Mauritanija': 'Nuakšot', 'Mauricijus': 'Port Luis', 'Mozambik': 'Maputo', 'Namibija': 'Vindhuk', 'Nigerija': 'Abudža', 'Niger': 'Nijamej', 'Obala Slonovače': 'Jamasukro', 'Ruanda': 'Kigali', 'Sijera Leone': 'Fritaun', 'Senegal': 'Dakar', 'Somalija': 'Mogadišu', 'Sudan': 'Kartun', 'Svazilend': 'Mbabane', 'Tanzanija': 'Dodoma', 'Togo': 'Lome', 'Tunis': 'Tunis', 'Uganda': 'Kampala', 'Centralnoafrička <br> Republika': 'Bangi', 'Čad': 'Ndžamena', 'Džibuti': 'Džibuti', 'Maroko': 'Rabat' },
    north_america = { 'Antigva i Barbuda': 'Sent Džons', 'Barbados': 'Bridžtaun', 'Bahami': 'Nasau', 'Belize': 'Belmopan', 'Gvatemala': 'Gvatemala', 'Grenada': 'Sent Džordžes', 'Dominika': 'Rozo', 'Dominikanska <br> Republika': 'Santo Domingo', 'Salvador': 'San Salvador', 'Jamajka': 'Kingston', 'Kanada': 'Otava', 'Kostarika': 'San Hose', 'Kuba': 'Havana', 'Meksiko': 'Meksiko Siti', 'Nikaragva': 'Managva', 'Panama': 'Panama', 'Sveta Lucija': 'Kastri', 'Sveti Vinsent i <br> Grenadini': 'Kingstaun', 'Sveti Kristofer i <br> Nevis': 'Baster', 'Sjedinjene <br> Američke Države': 'Vašington', 'Trinidad i Tobago': 'Port of Spejn', 'Haiti': 'Port o Prens', 'Honduras': 'Tegusigalpa' },
    south_america = { 'Argentina': 'Buenos Ajres', 'Bolivija': 'Sukre', 'Brazil': 'Brazilija', 'Čile': 'Santijago', 'Kolumbija': 'Bogota', 'Ekvador': 'Kito', 'Gvajana': 'Džordžtaun', 'Paragvaj': 'Asunsion', 'Peru': 'Lima', 'Surinam': 'Paramaribo', 'Urugvaj': 'Montevideo', 'Venecuela': 'Karakas' },
    australia_and_oceania = { 'Australija': 'Kanbera', 'Fidži': 'Suva', 'Kiribati': 'Bairiki', 'Maršalska Ostrva': 'Madžuro', 'Mikronezija': 'Palikir', 'Nauru': 'Jaren', 'Novi Zeland': 'Velington', 'Palau': 'Ngerulmud', 'Papua Nova Gvineja': 'Port Morsbi', 'Samoa': 'Apija', 'Solomonova Ostrva': 'Honijara', 'Tonga': "Nukualofa", 'Tuvalu': 'Funafuti', 'Vanuatu': 'Port Vila' },
    world = [europe, asia, africa, north_america, south_america, australia_and_oceania],
    all_capitals = []

for (let continent of world) {
    all_capitals.push(...Object.values(continent))
}
//create entries from each object in world array
world = world.map(continent => Object.entries(continent))

let world_copy = [...world]
let start_time,
    end_time,
    choosen_game,
    landscape_bool,
    back_btn=document.getElementById('back')
    back_btn.onclick=function(){
        window.history.back()
    }
const quiz = () => {
    
    let pre_quiz = document.querySelector('.pre_quiz'),
        continent_options = document.querySelectorAll('input[name="continents"]'),
        random_option = document.getElementById('RANDOM'),
        checkbox_inputs = Array.from(document.querySelectorAll('input[type="checkbox"]')),
        //array that tells us if we switched to continent options before unckecking random option FIRST!
        arr = []
    continent_options.forEach(option => {
        world = []
        option.addEventListener('change', function () {
            if (option.checked) {
                if (arr[0] == 'random') {
                    arr = []
                    world = []
                }
                else {
                    arr = []
                }
                random_option.checked = false
                world.push(eval(`${option.id}`))
            }
            else {
                let index = world.indexOf(eval(`${option.id}`))
                world.splice(index, 1)
            }
        })
    })
    random_option.addEventListener('change', function () {
        if (this.checked) {
            arr = ['random']
            //slice isnt'needed in that case, but if we want to not change world_copy it's better practice to use SLICE!
            world = world_copy.slice()
            continent_options.forEach(option => {
                return option.checked = false
            })
        }
        else {
            arr = []
            world = []
        }
    })
    let write_btn = document.getElementById('write'),
        select_btn = document.getElementById('select')
    //function to choose select or write option
    function choose_opt() {
        if (this.id == 'write') {
            write_btn.style.background = 'rgb(30,144,255)'
            write_btn.style.color = 'white'
            select_btn.style.background = 'white'
            select_btn.style.color = 'black'
            choosen_game = 'write'
        }
        else {
            select_btn.style.background = 'rgb(30,144,255)'
            select_btn.style.color = 'white'
            write_btn.style.background = 'white'
            write_btn.style.color = 'black'
            choosen_game = 'select'
        }
    }
    write_btn.onclick = choose_opt
    select_btn.onclick = choose_opt

    let input_buttons = Array.from(document.querySelectorAll('input[type="radio"]')),
        start_quiz_btn = document.querySelector('.start_quiz_btn')

    const checking_inputs = () => {
        return input_buttons.some(el => el.checked) && checkbox_inputs.some(el => el.checked) && choosen_game
    }
    //function that will return VALUE of input radio that is checked as array
    const pressed_radio_btn = () => {
        return Number(input_buttons.filter(x => x.checked)[0].value)
    }

    start_quiz_btn.onclick = () => {
        if (checking_inputs()) {
            pre_quiz.style.display = 'none'
            quiz_field.append(title,back_btn)
            start_time = new Date()
            let question_number = pressed_radio_btn()

            //prevent to have more answers than number of countries in that continent(australia and south america)
            if (world.length == 1 && (Object.keys(world[0]).length < 15) && (question_number == 20 || question_number == 15)) {
                div_answers(Object.keys(world[0]).length)
            }
            else {
                div_answers(question_number)
            }
        }
        else {
            alert('Moraš izabrati opciju!')
        }
    }
}
quiz()
//function that will create question divs that depends of choosen number and also it will display questions
const div_answers = number_of_question => {
    let questions_div = document.createElement('div')
    questions_div.classList.add('questions_div')
    let question_array = []
    for (let i = 1; i < number_of_question + 1; i++) {
        let question = document.createElement('div')
        question.classList.add('question')
            if (window.innerHeight > window.innerWidth) {
                question.style.height = window.innerHeight*0.85 / number_of_question + 'px'
                question.style.width ='13vw'
                question.style.fontSize='5vw'
                question.style.lineHeight=window.innerHeight*0.85 / number_of_question +'px'
                question.innerHTML = `${number_of_question + 1 - i}`
            }
            else{
                question.style.width = window.innerWidth*0.85 / number_of_question + 'px'
                question.style.height ='8vh'
                question.style.fontSize='5vh'
                question.style.lineHeight='8.5vh'
                question.innerHTML = `${i}`
            }
        question_array.push(question)
        questions_div.append(question)
    }

    quiz_field.append(questions_div)

    //if random option isn't checked, we need to make world that will be array made of object entries
    //but if it is checked we haven't because we have already do that with assign world=world_copy.slice()
    if (!document.getElementById('RANDOM').checked) {
        world = world.map(continent => Object.entries(continent))
    }
    console.log(world)
    //choose random country from random continent and store it's capital
    let continent_index = random(world),
        continent = world[continent_index],
        country_index = random(continent),
        country = continent[country_index][0],
        capital_city = continent[country_index][1]
        //prevents repeating question
        continent.splice(country_index, 1)

    let choosen_option = document.createElement('p')
    choosen_option.innerHTML = window.innerHeight >= window.innerWidth ? 'Izabrani kontinenti:' : 'Izabrani kontinenti:<br>'
    choosen_option.classList.add('choosen_option')
    let checked_options = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(checkbox => checkbox.checked)

    for (let checked_input of checked_options) {
        if (checked_options.length == 6) {
            if(window.innerHeight>=window.innerWidth){
                choosen_option.innerHTML += '<span style="font-weight:bold"><br>Ceo Svet</span>'
            }
            else {
                choosen_option.innerHTML += '<span style="font-weight:bold">Ceo Svet</span>'
            }
            break
        }
        else {
            if (checked_options.indexOf(checked_input) == checked_options.length - 1) {
                if(window.innerHeight>=window.innerWidth){
                    choosen_option.innerHTML += `<span style="font-weight:bold"><br>${checked_input.value}</span>`
                }
                else{
                    choosen_option.innerHTML += `<span style="font-weight:bold">${checked_input.value}</span>`
                }
            }
            else if (checked_options.indexOf(checked_input) == checked_options.length - 2) {
                if(window.innerHeight>=window.innerWidth){
                    choosen_option.innerHTML += `<span style="font-weight:bold"><br> ${checked_input.value} i </span>`
                }
                else{
                    choosen_option.innerHTML += `<span style="font-weight:bold"> ${checked_input.value} i </span>`
                }
            }
            else {
                if(window.innerHeight>=window.innerWidth){
                    choosen_option.innerHTML += `<span style="font-weight:bold"><br> ${checked_input.value}, </span>`
                }
                else{
                    choosen_option.innerHTML += `<span style="font-weight:bold"> ${checked_input.value}, </span>`
                }
            }
        }
    }
    quiz_field.append(choosen_option)

    //sort question array in ascending order!
    question_array=question_array.sort((a,b)=>Number(a.innerHTML)-Number(b.innerHTML))
    //
    let windowWidth=window.innerWidth,
        windowHeight=window.innerHeight

    //different view after changing orientation
    window.addEventListener('orientationchange',()=>{
        //variable that is larger side between window height and width (because in ladnscape mode larger side is width)
        let landscape_width = windowHeight > windowWidth ? windowHeight : windowWidth
        if(window.orientation==0){
            if(!landscape_bool){
                questions_div.style.flexDirection='column-reverse'
                landscape_bool=true
            }
            else {
                questions_div.style.flexDirection='column'
                landscape_bool=false
            }
            for(let i=1;i<=question_array.length;i++){
                question_array[i-1].style.height=landscape_width*0.85 / number_of_question + 'px'
                question_array[i-1].style.width='13vw'
                question_array[i-1].style.fontSize='5vw'
                question_array[i-1].style.lineHeight=landscape_width*0.85 / number_of_question +'px'
            }
            choosen_option.innerHTML = 'Izabrani kontinenti:'
            for (let checked_input of checked_options) {
                if (checked_options.length == 6) {
                    choosen_option.innerHTML += '<span style="font-weight:bold"><br>Ceo Svet</span>'
                    break
                }
                else {
                    if (checked_options.indexOf(checked_input) == checked_options.length - 1) {
                        choosen_option.innerHTML += `<span style="font-weight:bold"><br>${checked_input.value}</span>`
                    }
                    else if (checked_options.indexOf(checked_input) == checked_options.length - 2) {
                        choosen_option.innerHTML += `<span style="font-weight:bold"><br> ${checked_input.value} i </span>`
                    }
                    else {
                        choosen_option.innerHTML += `<span style="font-weight:bold"><br> ${checked_input.value}, </span>`
                    }
                }
            }
        }
        else if(window.orientation==90){
            if(!landscape_bool){
                questions_div.style.flexDirection='row-reverse'
                landscape_bool=true
            }
            else {
                questions_div.style.flexDirection='row'
                landscape_bool=false
            }
            for(let i=1;i<=question_array.length;i++){
                //better view when changing landscape orientation when keyboard is currently open
                //orientation change event is triggered before the rotation is complete and then we should use 450 px (which is not the case for resize event)
                if(window.innerHeight<450){
                    question_array[i-1].style.width=0.85 * landscape_width / number_of_question + 'px'
                    question_array[i-1].style.height=0.05 * landscape_width + 'px'
                    question_array[i-1].style.fontSize=0.025 * landscape_width + 'px'
                    question_array[i-1].style.lineHeight=0.05 * landscape_width + 'px'
                }
                else{
                    question_array[i-1].style.width=landscape_width*0.85 / number_of_question + 'px'
                    question_array[i-1].style.height='10vh'
                    question_array[i-1].style.fontSize='5vh'
                    question_array[i-1].style.lineHeight='10vh'
                }
            }
            choosen_option.innerHTML = 'Izabrani kontinenti:<br>'
            for (let checked_input of checked_options) {
                if (checked_options.length == 6) {
                    choosen_option.innerHTML += '<span style="font-weight:bold"><br>Ceo Svet</span>'
                    break
                }
                else {
                    if (checked_options.indexOf(checked_input) == checked_options.length - 1) {
                        choosen_option.innerHTML += `<span style="font-weight:bold">${checked_input.value}</span>`
                    }
                    else if (checked_options.indexOf(checked_input) == checked_options.length - 2) {
                        choosen_option.innerHTML += `<span style="font-weight:bold"> ${checked_input.value} i </span>`
                    }
                    else {
                        choosen_option.innerHTML += `<span style="font-weight:bold"> ${checked_input.value}, </span>`
                    }
                }
            }
        }
    })
    let new_question = document.createElement('p')
    new_question.classList.add('new_question')
    new_question.innerHTML = `<span style='color:white;'>Glavni grad države <br><span style='font-weight:bold'>${country.fontcolor('white')}</span> ?</span>`
    quiz_field.append(new_question)

    let answer_number = 1,
        score = 0

    question_array[0].classList.add('current_question')

    //if selected option is 'write'
    if (choosen_game == 'write') {
        let your_answer = document.createElement('input')
        your_answer.classList.add('your_answer')
        your_answer.placeholder = 'Upiši odgovor...'

        let checking_answer_btn = document.createElement('div')
        checking_answer_btn.innerHTML = 'Potvrdi'
        checking_answer_btn.classList.add('checking_answer_btn')
         
        //preventing wrong dimensions for questions_div after resizing window when displaying keyboard on mobile
        //and display back when keyboard is closed
        your_answer.onclick = () => {
            questions_div.style.display='none'
            choosen_option.style.display='none'
            document.addEventListener('click',function outclick(event) {
                if(answer_number==number_of_question+1){
                    document.removeEventListener('click',outclick)
                }
                //checks if the same element is clicked
                let isClikedElement=your_answer.contains(event.target)
                //need to set prevent.target.value!=='Potvrdi' because we don't wanttoshow questions div when last questions is finished
                if(!isClikedElement && event.target.value!=='Potvrdi'){
                    questions_div.style.display='flex'
                    choosen_option.style.display='block'
                }
            })          
        }

        your_answer.addEventListener('keyup',event=>{
            let alphaRegExp = /^[a-zA-ZšŠđĐžŽćĆčČ\s]*$/
            if(!your_answer.value.match(alphaRegExp)){
                your_answer.value=your_answer.value.slice(0,your_answer.value.search(/[^a-zA-ZšŠđĐžŽćĆčČ\s]/))
                alert("Please enter only alphabets");
            }
        })
        
        quiz_field.append(your_answer,checking_answer_btn)

        //better view in ladnscape mode when typing answer
        window.addEventListener('resize',() => {
            checking_answer_btn.style.display = window.innerHeight < 100 ? 'none' : 'block'
        })

        checking_answer_btn.onclick =  () => {
            if (answer_number == number_of_question) {
                if (your_answer.value.toLowerCase() == capital_city.toLowerCase()) {
                    alert(`Tačno si odogovrio na ${answer_number}. pitanje`)
                    score++
                    question_array[answer_number - 1].classList.add('correct_question')
                }
                else {
                    alert(`Pogrešno si odogovrio na ${answer_number}. pitanje`)
                    question_array[answer_number - 1].classList.add('incorrect_question')
                }
                end_time = new Date()

                //increment it one more time to remove listener when box_score function is executed
                answer_number++
                new_question.innerHTML = ''
                checking_answer_btn.style.display = 'none'
                choosen_option.style.display = 'none'
                questions_div.style.display='none'
                title.style.display='none'
                your_answer.style.display='none'
                return box_score(score, number_of_question)
            }
            else if (answer_number < number_of_question) {
                question_array[answer_number].classList.add('current_question')
                if (your_answer.value.toLowerCase() == capital_city.toLowerCase()) {
                    alert(`Tačno si odogovrio na ${answer_number}. pitanje`)
                    score++
                    question_array[answer_number - 1].classList.add('correct_question')
                }
                else {
                    alert(`Pogrešno si odogovrio na ${answer_number}. pitanje`)
                    question_array[answer_number - 1].classList.add('incorrect_question')
                }
                //these two must be displayed because of onclick function for inpit on line 355
                choosen_option.style.display = 'block'
                questions_div.style.display='flex'

                your_answer.value = ''
                answer_number++
            }
            //choose random country after each question
            continent_index = random(world)
            continent = world[continent_index]
            country_index = random(continent)
            country = continent[country_index][0]
            capital_city = continent[country_index][1]

            continent.splice(country_index, 1)

            new_question.innerHTML = `<span style='color:white;'>Glavni grad države <br><span style='font-weight:bold'>${country.fontcolor('white')}</span> ?</span>`
        }
    }
    //select option
    else {
        let option_container = document.createElement('div')
        option_container.classList.add('option_container')
        let array_option = []

        for (let i = 0; i < 5; i++) {
            let option = document.createElement('div')
            option.classList.add('option')

            option.onclick = checking
            option_container.append(option)
            array_option.push(option)
        }
        quiz_field.append(option_container)

        let copy_array_option = array_option.slice()
        let copy_of_copy = copy_array_option.slice()

        //create random index which will be index for CORRECT option
        let correct_index = random(array_option),
            correct_option = capital_city
        array_option[correct_index].innerHTML = capital_city

        //splice correct option to set random values for other options
        array_option.splice(correct_index, 1)

        //array that stores all previous values of previous capitals
        let previous_capitals = [capital_city]

        //sets incorrect options
        const set_incorrect_options = array => {
            while (array.length) {
                //prevent error when we use all countries from one continent
                for (let i = 0; i < world.length; i++) {
                    if (!world[i].length) {
                        world.splice(i, 1)
                    }
                }
                let all_capitals_index = random(all_capitals)
                capital_city = all_capitals[all_capitals_index]
                previous_capitals.push(capital_city)

                //checking doubles in previous optional answers
                const checking_doubles = (el, _ , arr) => {
                    return arr.indexOf(el) == arr.lastIndexOf(el)
                }
                if (!previous_capitals.every(checking_doubles)) {
                    previous_capitals.splice(previous_capitals.length - 1, 1)
                    return set_incorrect_options(array)
                }
                //prevents to have same answers as correct answer
                if (correct_option == capital_city) {
                    return set_incorrect_options(array)
                }
                else {
                    let incorrect_option = capital_city
                    array[0].innerHTML = incorrect_option
                    array.splice(0, 1)
                }
            }
        }
        set_incorrect_options(array_option)

        //create function that checks for right answers
        function checking() {
            if (answer_number == number_of_question) {
                if (this.innerHTML == correct_option) {
                    alert(`Tačno si odogovrio na ${answer_number}. pitanje`)
                    score++
                    question_array[answer_number - 1].classList.add('correct_question')
                }
                else {
                    alert(`Pogrešno si odogovrio na ${answer_number}. pitanje`)
                    question_array[answer_number - 1].classList.add('incorrect_question')
                }
                end_time = new Date()

                option_container.style.display = 'none'
                new_question.innerHTML = ''
                choosen_option.style.display = 'none'
                questions_div.style.display='none'
                title.style.display='none'

                return box_score(score, number_of_question)
            }
            else if (answer_number < number_of_question) {
                question_array[answer_number].classList.add('current_question')

                if (this.innerHTML == correct_option) {
                    alert(`Tačno si odogovrio na ${answer_number}. pitanje`)
                    score++
                    question_array[answer_number - 1].classList.add('correct_question')
                }
                else {
                    alert(`Pogrešno si odogovrio na ${answer_number}. pitanje`)
                    question_array[answer_number - 1].classList.add('incorrect_question')
                }
                answer_number++
            }
            //prevent error when we use all countries from one continent
            for (let i = 0; i < world.length; i++) {
                if (!world[i].length) {
                    world.splice(i, 1)
                }
            }
            continent_index = random(world)
            continent = world[continent_index]
            country_index = random(continent)
            country = continent[country_index][0]
            capital_city = continent[country_index][1]

            continent.splice(country_index, 1)

            //reset previous capitals
            previous_capitals = [capital_city]

            new_question.innerHTML = `<span style='color:white;'>Glavni grad države <br><span style='font-weight:bold'>${country.fontcolor('white')}</span> ?</span>`

            correct_index = random(copy_array_option)
            correct_option = capital_city
            copy_array_option[correct_index].innerHTML = capital_city

            copy_array_option.splice(correct_index, 1)

            //set incorrect options after each question
            set_incorrect_options(copy_array_option)

            //after set incorrect function copy_array_option will be empty array, and we need to make copy one more time BUT WITH SLICE METHOD!
            copy_array_option = copy_of_copy.slice()
        }
    }
}
//function which will create box that shows score
const box_score = (score, number_of_question) => {
    let box = document.createElement('div')
    box.classList.add('box')

    let score_word
    score_word = score == 1 ? 'pitanje':'pitanja'

    let time_diff = Math.round((end_time - start_time) / 1000),
        message
    if (time_diff >= 60) {
        let minutes_word,
            seconds_word,
            minutes = Math.floor(time_diff / 60),
            seconds = Math.round(time_diff % 60)

        if (minutes == 1 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51) {
            minutes_word = ' minut i '
        }
        else {
            minutes_word = ' minuta i '
        }
        seconds_word = seconds == 1 ? ' sekund ':' sekunde '
        message = minutes + minutes_word + seconds + seconds_word
    }
    else {
        message = time_diff + ' sekunde'
    }
    box.innerHTML =`
        <p class='paragraph_box'>Tačno si odgovorio na ${String(score).fontcolor('black')} ${score_word} od ${number_of_question.toString().fontcolor('black')}</p>
        <p class='paragraph_box'>Tvoj procenat uspešnosti je ${String(Math.ceil(score / number_of_question * 100) + '%').fontcolor('black')}</p>
        <p class='paragraph_box'>Za vreme od ${message.fontcolor('black')}</p>
        <p class='paragraph_box'>Vrati me na početnu stranu</p>
        <button class='reload_btn' type='button' onclick='function reload(){location.reload()};reload()'>Vrati</button>`
    quiz_field.append(box)
}
