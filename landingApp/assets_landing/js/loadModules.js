function loadModule(path, block) {  // фукнция подгрузки модуля (путь до модуля, блок в который вставляем модуль)
    let xhr = new XMLHttpRequest();
    xhr.open("GET", path, false);
    try {
        xhr.send();
        if (xhr.status != 200) {
            alert("Ошибка: модуль "+ path + ` не был загружен. ${xhr.status} - ${xhr.statusText}`);
        } else {
            let response = xhr.responseText;
            if (path.includes('header')) {
                block.insertAdjacentHTML('afterbegin', response);
            } else {
                block.insertAdjacentHTML('beforeend', response);
            }
        }
    } catch(err) {
        alert("Ошибка: модуль "+ path + ` не был загружен. ${err}`);
    }
    
}
const allWrapper = document.querySelector('.main-wrapper');
const allSectionsWrapper = document.querySelector('.main-wrapper main.main');

loadModule('./modules_landing/header/index.html', allWrapper); // header
loadModule('./modules_landing/main_block/index.html', allSectionsWrapper); // main_block
loadModule('./modules_landing/video_lessons/index.html', allSectionsWrapper); // video_lessons
loadModule('./modules_landing/inter_search/index.html', allSectionsWrapper); // inter_seacrh
loadModule('./modules_landing/ht_p1/index.html', allSectionsWrapper); // ht_p1
loadModule('./modules_landing/ht_p2/index.html', allSectionsWrapper); // ht_p2
loadModule('./modules_landing/roadmap/index.html', allSectionsWrapper); // roadmap
loadModule('./modules_landing/zachets/index.html', allSectionsWrapper); // zachets
loadModule('./modules_landing/train_p1/index.html', allSectionsWrapper); // train_p1
loadModule('./modules_landing/game/index.html', allSectionsWrapper); // game
loadModule('./modules_landing/rating/index.html', allSectionsWrapper); // rating
loadModule('./modules_landing/footer/index.html', allWrapper); // footer

const scriptsToLoad = document.querySelectorAll('.app script');
scriptsToLoad.forEach(SCRIPT => {
    let script = document.createElement('script');
    script.src = `${SCRIPT.src}${module_version}`;
    document.querySelector('.scripts').append(script);
    SCRIPT.remove();
})

// Ставлю версию картинкам
const imagesSetVersion = document.querySelectorAll('img');
imagesSetVersion.forEach(img => {
    img.src = `${img.src}${module_version}`;
})