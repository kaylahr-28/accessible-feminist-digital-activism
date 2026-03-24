
const init = () => {
   // setupUI();

}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const setupUI = () => {
    const btnBegin = document.querySelector("#btn-begin");
    const btnDig = document.querySelector("#btn-dig");
    const spanMetoo = document.querySelector("#span-metoo");
    const btnMetoo = document.querySelector("#btn-metoo");
    const btnAccess = document.querySelector("#btn-access");
    const btnAccess1 = document.querySelector("#btn-access1");
    const btnAccess2 = document.querySelector("#btn-access2");
    const btnAccess3 = document.querySelector("#btn-access3");
    const btnPresent = document.querySelector("#btn-present");
    const btnHome = document.querySelector("#btn-home");
    const navCite = document.querySelector("#nav-cite");
    const navHome = document.querySelector("#nav-home");
    const navAbout = document.querySelector("#nav-about");

    const sctnStart = document.querySelector("#sctn-start");
    const sctnDigital = document.querySelector("#sctn-digital");
    const sctnFeminist = document.querySelector("#sctn-feminist");
    const sctnMetoo = document.querySelector("#sctn-metoo");
    const sctnAccess = document.querySelector("#sctn-access");
    const sctnAccess1 = document.querySelector("#sctn-access1");
    const sctnAccess2 = document.querySelector("#sctn-access2");
    const sctnAccess3 = document.querySelector("#sctn-access3");
    const sctnPresent = document.querySelector("#sctn-present");
    const sctnConclusion = document.querySelector("#sctn-conclusion");
    const sctnCite = document.querySelector(".sctn-cite");
    const sctnAbout = document.querySelector(".sctn-about");

    const h3cred = document.querySelector("#h3-cred");
    const h3bias = document.querySelector("#h3-bias");
    const pCred = document.querySelector("#p-cred");
    const pBias = document.querySelector("#p-bias");
    const infoCred = document.querySelector("#info-cred");
    const infoBias = document.querySelector("#info-bias");


    btnBegin.onclick = () => {
        switchSection(sctnStart, sctnDigital);
    }

    btnDig.onclick = () => {
        switchSection(sctnDigital, sctnFeminist);
    }

    spanMetoo.onclick = () => {
        switchSection(sctnFeminist, sctnMetoo);
    }

    btnMetoo.onclick = () => {
        switchSection(sctnMetoo, sctnAccess);
    }

    btnAccess.onclick = () => {
        switchSection(sctnAccess, sctnAccess1);
    }

    btnAccess.onclick = () => {
        switchSection(sctnAccess, sctnAccess1);
    }

    btnAccess1.onclick = () => {
        switchSection(sctnAccess1, sctnAccess2);
    }

    btnAccess2.onclick = () => {
        switchSection(sctnAccess2, sctnAccess3);
    }

    btnAccess3.onclick = () => {
        switchSection(sctnAccess3, sctnPresent);
    }

    btnPresent.onclick = () => {
        switchSection(sctnPresent, sctnConclusion);
    }

    btnHome.onclick = () => {
        switchSection(sctnConclusion, sctnStart);
    }

    navCite.onclick = () => {
        switchSection(document.querySelector(".is-visible"), sctnCite);
    }

    navHome.onclick = () => {
        switchSection(document.querySelector(".is-visible"), document.querySelector(".current-section"));
    }

    navAbout.onclick = () => {
        switchSection(document.querySelector(".is-visible"), sctnAbout);
    }

    infoCred.onclick = () => {
        revealText(pCred, infoCred, "17em", "500px", "750px");
    }

    infoBias.onclick = () => {
        revealText(pBias, infoBias, "15em", "1125px", "850px");
    }
}

const switchSection = async (prevSctn, newSctn) => {
    prevSctn.style.opacity = 0;
    prevSctn.classList.add('fade-out');
    if (!newSctn.classList.contains("sctn-about") &&
        !newSctn.classList.contains("sctn-cite")) {
        prevSctn.classList.remove("current-section");
        newSctn.classList.add('current-section');
    }
    await delay(1000);
    window.scrollTo(0, 0);
    prevSctn.classList.remove('is-visible');
    newSctn.classList.add('is-visible');
    newSctn.style.opacity = 1;
}

const revealText = (para, info, em, height, width) => {
    para.style.display = "block";
    para.style.visibility = "visible";
    para.style.opacity = "1";
    if (em == "17em") {
        info.style.marginRight = em;
    } else {
        info.style.marginLeft = em;
    }

    info.style.height = height;
    info.style.width = width;
}




init();
