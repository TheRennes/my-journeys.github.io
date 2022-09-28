if(localStorage.getItem('skillNames') == ''){
    let backupArray = ['dummy'];
    localStorage.setItem('skillNames', backupArray);
}
let skillNames = localStorage.getItem('skillNames').split(',');

$('#moving-title').removeClass("moving-title-class");
for(i = 0; i < skillNames.length; i++){
    $('.' + skillNames[i]).removeClass(skillNames[i] + '-loading');
}

//WINDOW ONLOAD EVENTS:
const loadingScreen = document.getElementById('loading-screen');
const front_end_list = document.getElementById('front-end-list');
const media_design_list = document.getElementById('editing-design-list');
const data_analytics_list = document.getElementById('data-analytics-list');
const languages_list = document.getElementById('languages-list');
window.addEventListener('load', () =>{
    loadingScreen.style.display='none';

    languages_list.innerHTML=localStorage.getItem('languages_list_HTML');
    data_analytics_list.innerHTML=localStorage.getItem('data_analytics_list_HTML');
    media_design_list.innerHTML=localStorage.getItem('media_design_list_HTML');
    front_end_list.innerHTML=localStorage.getItem('front_end_list_HTML');
    
    let skillNames = localStorage.getItem('skillNames').split(',');
    console.log(localStorage);
    console.log(skillNames);
    for(i = 0; i < skillNames.length; i++){
        $('#' + skillNames[i] + '-percent')
        .text(localStorage
        .getItem('percent_' + skillNames[i]) + '%');

        $('#' + skillNames[i] + '-percent')
        .css('left', 'calc(' + localStorage
        .getItem('percent_' + skillNames[i]) + '% - 3rem)');

        $('.' + skillNames[i]).css('width', localStorage.getItem('percent_' + skillNames[i]) + '%');
    }
});

//TAB MENU (CHECKED):
const navTabs = document.getElementsByClassName('nav-item');
for(tab of navTabs){
    tab.addEventListener('mouseover', (e)=>{
        if(!e.target.classList.contains('active-tab')){
            e.target.classList.add('hover-tab');
        }
    });
    tab.addEventListener('mouseout', (e)=>{
        e.target.classList.remove('hover-tab');
    });

    tab.addEventListener('click', (e)=>{
        $('#tab-1, #tab-2, #tab-3, #tab-4').removeClass('active-tab');
        e.target.classList.add('active-tab');

        if(e.target.id == 'tab-1'){
            $('#front-end-list').css('display', 'flex');
            $('#editing-design-list').css('display', 'none');
            $('#data-analytics-list').css('display', 'none');
            $('#languages-list').css('display', 'none');
            $('#moving-title').text('My Coding Journey')
            let skillNames = localStorage.getItem('skillNames').split(',');
            for(i = 0; i < skillNames.length; i++){
                $('#' + skillNames[i] + '-percent')
                .text(localStorage
                .getItem('percent_' + skillNames[i]) + '%');
        
                $('#' + skillNames[i] + '-percent')
                .css('left', 'calc(' + localStorage
                .getItem('percent_' + skillNames[i]) + '% - 3rem)');
        
                $('.' + skillNames[i]).css('width', localStorage.getItem('percent_' + skillNames[i]) + '%');
            }
        }
        if(e.target.id == 'tab-2'){
            $('#front-end-list').css('display', 'none');
            $('#editing-design-list').css('display', 'flex');
            $('#data-analytics-list').css('display', 'none');
            $('#languages-list').css('display', 'none');
            $('#moving-title').text('My Design Journey')
            let skillNames = localStorage.getItem('skillNames').split(',');
            for(i = 0; i < skillNames.length; i++){
                $('#' + skillNames[i] + '-percent')
                .text(localStorage
                .getItem('percent_' + skillNames[i]) + '%');
        
                $('#' + skillNames[i] + '-percent')
                .css('left', 'calc(' + localStorage
                .getItem('percent_' + skillNames[i]) + '% - 3rem)');
        
                $('.' + skillNames[i]).css('width', localStorage.getItem('percent_' + skillNames[i]) + '%');
            }
        }
        if(e.target.id == 'tab-3'){
            $('#front-end-list').css('display', 'none');
            $('#editing-design-list').css('display', 'none');
            $('#data-analytics-list').css('display', 'flex');
            $('#languages-list').css('display', 'none');
            $('#moving-title').text('My Analytics Journey')
            let skillNames = localStorage.getItem('skillNames').split(',');
            for(i = 0; i < skillNames.length; i++){
                $('#' + skillNames[i] + '-percent')
                .text(localStorage
                .getItem('percent_' + skillNames[i]) + '%');
        
                $('#' + skillNames[i] + '-percent')
                .css('left', 'calc(' + localStorage
                .getItem('percent_' + skillNames[i]) + '% - 3rem)');
        
                $('.' + skillNames[i]).css('width', localStorage.getItem('percent_' + skillNames[i]) + '%');
            }

        }
        if(e.target.id == 'tab-4'){
            $('#front-end-list').css('display', 'none');
            $('#editing-design-list').css('display', 'none');
            $('#data-analytics-list').css('display', 'none');
            $('#languages-list').css('display', 'flex');
            $('#moving-title').text('My Languages Journey')
            let skillNames = localStorage.getItem('skillNames').split(',');
            for(i = 0; i < skillNames.length; i++){
                $('#' + skillNames[i] + '-percent')
                .text(localStorage
                .getItem('percent_' + skillNames[i]) + '%');
        
                $('#' + skillNames[i] + '-percent')
                .css('left', 'calc(' + localStorage
                .getItem('percent_' + skillNames[i]) + '% - 3rem)');
        
                $('.' + skillNames[i])
                .css('width', localStorage
                .getItem('percent_' + skillNames[i]) + '%');
            }
        }
    });
}

//TOGGLE ANIMATIONS:
let animBtnCheck = true;
const animBtn = document.getElementById('anim-btn');
function disableAnimation(){
    if(animBtnCheck){
        animBtn.innerHTML="TURN ON ANIMATIONS";
        $('#moving-title').removeClass("moving-title-class");

        let skillNames = localStorage.getItem('skillNames').split(',');
        for(i = 0; i < skillNames.length; i++){
        $('.' + skillNames[i]).removeClass(skillNames[i] + '-loading');
        }

        animBtnCheck = false;
        return;
    }
    if(!animBtnCheck){
        animBtn.innerHTML="TURN OFF ANIMATIONS";
        $('#moving-title').addClass("moving-title-class");

        let skillNames = localStorage.getItem('skillNames').split(',');
        for(i = 0; i < skillNames.length; i++){
            $('.' + skillNames[i]).addClass(skillNames[i] + '-loading');
            }

        animBtnCheck = true;
        return;
    }
}

//SHOW ACTION MENUS:
const actionMenus = document.getElementsByClassName('action-menu');
container.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('fa-chevron-down')
    && !e.target.classList.contains('incr')
    && !e.target.classList.contains('decr')){
        for(let actionMenu of actionMenus){
            actionMenu.style.display='none';
        }
    }
    if(e.target.classList.contains('fa-chevron-down')){
        let targetEl = e.target;
        let actionMenu = targetEl.closest('section').nextElementSibling;
        let targetEl_X = Math.round(targetEl.getBoundingClientRect().left);
        let targetEl_Y = Math.round(targetEl.getBoundingClientRect().top);

        if(actionMenu.style.display == 'none'){
            for(i = 0; i < skillNames.length; i++){
                $('#' + skillNames[i] + '-menu').css('display', 'none');
            }
            actionMenu.style.display = 'flex';
            actionMenu.style.left= targetEl_X + 'px';
            actionMenu.style.top= targetEl_Y + 50 + 'px';
            return;
        }
        if(actionMenu.style.display == 'flex'){
            for(i = 0; i < skillNames.length; i++){
                $('#' + skillNames[i] + '-menu').css('display', 'none');
            }
            actionMenu.style.display = 'none';
            return;
        }
    }
});


//CHANGE PERCENTAGES BTNS:
container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('incr')){
        let percent_el = e.target.parentElement.previousElementSibling.children[1].children[0];
        let progress_el = e.target.parentElement.previousElementSibling.children[1].children[1];
        let int_percent_el = parseInt(percent_el.innerHTML);

        int_percent_el = int_percent_el + 1;
        if(int_percent_el > 100){
            int_percent_el = int_percent_el - 1;
        }
        progress_el.style.width = int_percent_el + '%';
        percent_el.innerHTML = int_percent_el + '%';
        percent_el.style.left = 'calc(' + int_percent_el + '% - 3rem)';


        for(i = 0; i < skillNames.length; i++){
            if(percent_el.id == skillNames[i] + '-percent'){
                localStorage.setItem('percent_' + skillNames[i], int_percent_el)
            }
        }
    }
    if(e.target.classList.contains('decr')){
        let percent_el = e.target.parentElement.previousElementSibling.children[1].children[0];
        let progress_el = e.target.parentElement.previousElementSibling.children[1].children[1];
        let int_percent_el = parseInt(percent_el.innerHTML);

        int_percent_el = int_percent_el - 1;
        if(int_percent_el < 5){
            int_percent_el = int_percent_el + 1;
        }
        progress_el.style.width = int_percent_el + '%';
        percent_el.innerHTML = int_percent_el + '%';
        percent_el.style.left = 'calc(' + int_percent_el + '% - 3rem)';

        for(i = 0; i < skillNames.length; i++){
            if(percent_el.id == skillNames[i] + '-percent'){
                localStorage.setItem('percent_' + skillNames[i], int_percent_el)
            }
        }
    }
});
//DELETE BTN:
const delPopup = document.getElementById('del-popup');
document.body.addEventListener('click', (e)=>{
    if(e.target.classList.contains('del')){
        delPopup.style.display='flex';
        let yesBtnTargetSkill = String(e.target.parentElement.previousElementSibling.id);
        let yesBtnTargetMenu = String(e.target.parentElement.id);
        localStorage.setItem('yesBtnTargetSkill', yesBtnTargetSkill);
        localStorage.setItem('yesBtnTargetMenu', yesBtnTargetMenu);
    }
    if(e.target.id == 'btn-yes'){
        let targetSkill_El = document.getElementById(localStorage.getItem('yesBtnTargetSkill'));
        let targetMenu_El = document.getElementById(localStorage.getItem('yesBtnTargetMenu'));
        targetSkill_El.remove();
        targetMenu_El.remove();
        delPopup.style.display='none';

        let skillNames = localStorage.getItem('skillNames').split(',');
        for(let skillName of skillNames){
            if(targetSkill_El.id.includes(skillName)){
                let IndexAbbr = skillNames.findIndex((abbr)=>{return abbr == skillName});
                skillNames.splice(IndexAbbr, 1);
                localStorage.removeItem('percent_' + skillName);
            }
        }
        console.log(skillNames);
        localStorage.setItem('skillNames', skillNames);
    }
    if(e.target.id == 'btn-no'){
        delPopup.style.display='none';
    } 
});

//ADD SKILLS:
let skillCategory; let skillName; let skillAbbr; 
let skillColor; let skillPercent; let skillLink;
const formBox = document.getElementById('form-box');
function openCloseForm(){
    if(formBox.style.display == 'none'){
        $('#form-box').css('display', 'flex');
        return;
    }
    if(formBox.style.display == 'flex'){
        $('#form-box').css('display', 'none');
        return;
    }
}
function addSkill(){
    skillCategory = document.getElementById('skill-category').value;
    skillName = document.getElementById('skill-name').value;
    skillAbbr = document.getElementById('skill-abbr').value;
    skillColor = document.getElementById('skill-color').value;
    skillPercent = document.getElementById('skill-percent').value;
    skillLink = document.getElementById('skill-link').value;

    function hexToHSL(H){
        // Convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
          r = "0x" + H[1] + H[1];
          g = "0x" + H[2] + H[2];
          b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
          r = "0x" + H[1] + H[2];
          g = "0x" + H[3] + H[4];
          b = "0x" + H[5] + H[6];
        }
        // Then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
      
        if (delta == 0)
          h = 0;
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        else if (cmax == g)
          h = (b - r) / delta + 2;
        else
          h = (r - g) / delta + 4;
      
        h = Math.round(h * 60);
      
        if (h < 0)
          h += 360;
      
        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
      
        var new_l = l - 15;
        var hsl_lighter = "hsl(" + h + "," + s + "%," + l + "%)";
        var hsl_darker = "hsl(" + h + "," + s + "%," + new_l + "%)";
        const HSL = [hsl_lighter, hsl_darker];
        return HSL;
    }

    if(skillName != '' && skillAbbr != '' && skillPercent != ''){
        $('#form-box').css('display', 'none');

        let category = document.getElementById(skillCategory);
        let newStyle = document.createElement('style');
        let newSkill = document.createElement('section');
        let newActionMenu = document.createElement('div');
        newStyle.id = skillAbbr + '-style';
        newSkill.id = skillAbbr + '-section';
        newSkill.classList.add('progress-section');
        newActionMenu.id = skillAbbr + '-menu';
        newActionMenu.classList.add('action-menu');
        newActionMenu.style.display='none';

        newStyle.innerHTML=
        `.` + skillAbbr + `-loading::before{
            content: "";
            position: absolute;
            background-color: white;
            height: 50px;
            width: 50px;
            top: 0;
            left: -140px;
            box-shadow: 0 0 30px 60px white;
            opacity: 0.25;
            animation: loading 5s linear infinite 0.3s;
        }
        .` + skillAbbr + `-loading::after{
            content: "";
            position: absolute;
            background-color: white;
            height: 50px;
            width: 50px;
            top: 0;
            left: -140px;
            box-shadow: 0 0 30px 60px white;
            opacity: 0.25;
            animation: loading 5s linear infinite 2.8s;
        }`;

        newSkill.innerHTML=
        `<a class="title">` + skillName + `:</a>
        <div class="progress-bar">
            <p id="` + skillAbbr + `-percent" class="percent"></p>
            <div class="progress ` + skillAbbr + ` ` + skillAbbr +`-loading"></div>
        </div>
        <div class="action-btns">
            <i class="fa-solid fa-chevron-down newSkill" id="` + skillAbbr + `-toggle"></i>
            <a href="` + skillLink + `" target="_blank">
                <i class="fa-solid fa-info"></i>
            </a>
        </div>`;

        newActionMenu.innerHTML=
        `<i class="fa-solid fa-plus incr"></i>
        <i class="fa-solid fa-minus decr"></i>
        <i class="fa-solid fa-trash del"></i>`;

        category.appendChild(newStyle);
        category.appendChild(newSkill);
        category.appendChild(newActionMenu);
        
        let skillNames = localStorage.getItem('skillNames').split(',');
        skillNames.push(skillAbbr);
        console.log(skillNames);
        localStorage.setItem('skillNames', skillNames);
        localStorage.setItem('percent_' + skillAbbr, skillPercent);

        $('#' + skillAbbr + '-percent').text(skillPercent + '%');
        $('#' + skillAbbr + '-percent').css('left', 'calc(' + skillPercent + '% - 3rem)');
        $('.' + skillAbbr).css('width', skillPercent + '%');
        $('.' + skillAbbr).css({'border':'2px solid ' + hexToHSL(skillColor)[1] + '', 
        'background-image':'linear-gradient(to left,' + hexToHSL(skillColor)[0] + ','
        + hexToHSL(skillColor)[1] + ''});
    }
}

//SAVE CATEGORIES (CHECKED):
window.addEventListener('click', ()=>{
    let front_end_list_HTML = front_end_list.innerHTML;
    let media_design_list_HTML = media_design_list.innerHTML;
    let data_analytics_list_HTML = data_analytics_list.innerHTML;
    let languages_list_HTML = languages_list.innerHTML;

    localStorage.setItem('front_end_list_HTML', front_end_list_HTML);
    localStorage.setItem('media_design_list_HTML', media_design_list_HTML);
    localStorage.setItem('data_analytics_list_HTML', data_analytics_list_HTML);
    localStorage.setItem('languages_list_HTML', languages_list_HTML);
});
