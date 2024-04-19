/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
/* scroll_request.js */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function () {
    this.requestAnimationFrame(scrollCheck);
})
function scrollCheck() {
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browerScrollY > 0) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
}
/* end scroll_request.js */

/* scroll.js */
/* 애니메이션 스크롤 이동 */
const animationMove = function (selector) {
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
};
// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveEl.length; i++) {
    scollMoveEl[i].addEventListener('click', function (e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}
/* End scroll.js */

// ---------페이지 이동 이세원 추가---------

main = 'index.html';


function gomain() {
    location.href = main;
}


kms = 'teamintroKMS.html';

function gokms() {
    location.href = kms;
}


khj = 'teamintroKHJ.html';

function gokhj() {
    location.href = khj;
}


pkh = 'teamintroPKH.html';

function gopkh() {
    location.href = pkh;
}


lsw = 'teamintroLSW.html';

function golsw() {
    location.href = lsw;
}


chj = 'teamintroCHJ.html';

function gochj() {
    location.href = chj;
}




blog1 = "https://leesw1945.tistory.com/";

function goblog1() {
    location.href = blog1;
}

blog2 = "https://www.devkobe24.com/";

function goblog2() {
    location.href = blog2;
}

blog3 = "https://heimish962.tistory.com/";

function goblog3() {
    location.href = blog3;
}

blog4 = "https://velog.io/@poisson/posts";

function goblog4() {
    location.href = blog4;
}

blog5 = "https://velog.io/@pk_hyun/posts";

function goblog5() {
    location.href = blog5;
}


//날씨, 기온 추가
$(document).ready(function () {
    let url = "http://spartacodingclub.shop/sparta_api/weather/seoul";
    fetch(url).then(res => res.json()).then(data => {
        let temp = data['temp'];
        let icon = data['icon'];
        $('#temp').text(temp);
        $('#icon').attr('src', icon);
    })
})