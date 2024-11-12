const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

const dinosaurDescriptions = {
    compy: {
        deskripsi: "Compy, atau Compsognathus, dalam ARK: Survival Evolved adalah dinosaurus kecil yang sering bergerombol. Meskipun ukurannya kecil, Compy sangat gesit dan lincah. Mereka biasanya tidak agresif ketika sendirian, namun dalam kelompok, mereka dapat menjadi ancaman karena menyerang bersama-sama. <br><br> Ciri khas Compy adalah tubuhnya yang ramping, dengan panjang sekitar 60 cm, mirip dengan kadal besar. Kulitnya berwarna hijau kecoklatan, memungkinkan mereka berkamuflase dengan baik di hutan. Meskipun serangan individu Compy tidak terlalu kuat, kekuatan mereka terletak pada serangan berkelompok, terutama saat jumlah mereka banyak. <br><br> Di dalam game, Compy adalah dinosaurus yang penasaran dan tidak langsung menyerang pemain. Namun, jika mereka menemukan kesempatan, terutama jika ada banyak Compy di sekitar, mereka akan langsung menyerang. Untuk menjinakkan Compy, pemain harus memberikan Prime Meat atau daging berkualitas tinggi, karena mereka cukup pilih-pilih soal makanan. <br><br>Secara keseluruhan, Compy adalah makhluk kecil yang menarik, namun berbahaya jika tidak diwaspadai, terutama dalam kelompok besar.",
        foto: "fotoContent/compyContent.webp",
        suara: "sounds/Compy_chortle.OGG_1.mp3"
    },
    Dilophosaurus: {
        deskripsi: "Dilophosaurus, atau sering disebut Dilo, adalah salah satu dinosaurus pertama yang sering dihadapi pemain dalam ARK: Survival Evolved. Dilo berukuran sedang dengan gerakan yang cukup lincah. Mereka dikenal dengan serangan semprotan racunnya yang dapat membutakan dan memperlambat pemain serta dinosaurus lain.<br><br> Dilo memiliki ciri khas dua jambul di atas kepalanya dan suara mendesis yang sering kali menjadi tanda peringatan sebelum menyerang. Meskipun ukurannya tidak besar, Dilo dapat menjadi ancaman terutama bagi pemain baru yang belum memiliki perlengkapan memadai. Biasanya, mereka menyerang dalam kelompok kecil, yang membuat mereka lebih sulit dihadapi.<br><br> Untuk menjinakkan Dilo, pemain hanya perlu memberikan daging mentah biasa atau daging mentah prima. Proses penjinakan Dilo cukup mudah dan cepat, sehingga mereka sering digunakan sebagai peliharaan awal yang berguna untuk melindungi pemain dari ancaman kecil.<br><br> Selain itu, Dilo juga dapat digunakan sebagai penjaga dasar karena serangannya yang mampu memperlambat musuh, memberikan waktu tambahan untuk bertahan atau menyerang balik. Namun, kelemahan utamanya adalah ketahanan tubuhnya yang relatif rendah, membuatnya mudah dikalahkan oleh predator yang lebih besar.<br><br> Secara keseluruhan, Dilophosaurus adalah makhluk yang bermanfaat bagi pemain di awal permainan, tetapi harus digunakan dengan hati-hati saat menghadapi ancaman yang lebih besar di dunia ARK.",
        foto: "fotoContent/DilophosaurContent.webp",
        suara: "sounds/Dilosound.mp3"
    },
    Diplodocus: {
        deskripsi: "<br><br> Diplodocus adalah dinosaurus herbivora besar dalam ARK: Survival Evolved, yang dikenal karena ukurannya yang panjang dan tubuhnya yang ramping. Meskipun terlihat seperti dinosaurus raksasa yang berbahaya, Diplodocus sebenarnya adalah makhluk yang damai dan tidak agresif, bahkan terhadap pemain. Mereka sering dijumpai berjalan santai di dataran luas.<br><br> Diplodocus memiliki kemampuan unik untuk membawa banyak pemain sekaligus di punggungnya. Ini membuatnya sangat berguna sebagai dinosaurus transportasi dalam permainan, terutama untuk perjalanan jauh atau ekspedisi kelompok. Meskipun ukurannya besar, kecepatannya cukup lumayan untuk dinosaurus sekelasnya, namun kekuatannya dalam bertarung terbatas.<br><br> Untuk menjinakkan Diplodocus, pemain bisa menggunakan metode penjinakan pasif dengan memberi makan buah-buahan (mejoberry) atau menggunakan cara tradisional dengan melumpuhkannya terlebih dahulu. Setelah dijinakkan, Diplodocus menjadi salah satu dinosaurus yang paling berguna untuk mengangkut banyak barang sekaligus, meskipun tidak terlalu kuat dalam pertempuran.<br><br> Salah satu hal yang menarik dari Diplodocus adalah sifatnya yang tidak agresif dan suka mendorong pemain atau dinosaurus lain dengan ekornya, meskipun serangannya tidak berbahaya. Ini sering kali membuat interaksi dengan Diplodocus menjadi lucu dan tidak menakutkan seperti beberapa dinosaurus besar lainnya.<br><br> Diplodocus mungkin bukan dinosaurus tempur, tetapi perannya sebagai alat transportasi besar dan damai membuatnya menjadi tambahan berharga bagi pemain yang membutuhkan kendaraan untuk perjalanan jauh di dunia ARK.",
        foto: "fotoContent/DiplodocusContent.webp",
        suara: "sounds/Diplodocussound.mp3"
    },
    Giganotosaurus: {
        deskripsi: "Giganotosaurus adalah salah satu predator terbesar dan paling menakutkan di ARK: Survival Evolved. Makhluk raksasa ini memiliki kekuatan luar biasa dan mampu menjatuhkan hampir semua dinosaurus lain dalam permainan. Dikenal dengan ukurannya yang sangat besar dan kekuatan serangannya yang mematikan, Giganotosaurus adalah ancaman serius yang tidak bisa dianggap remeh.<br><br> Dengan tubuhnya yang masif dan gerakan yang relatif cepat untuk ukurannya, Giganotosaurus dapat dengan mudah mengejar dan membunuh mangsanya. Saat marah, Giganotosaurus juga dapat memasuki mode Rage, di mana kekuatan serangannya meningkat drastis, tetapi dia bisa menjadi tidak terkendali bahkan oleh pemiliknya sendiri. Hal ini membuatnya berisiko tinggi saat menjinakkannya.<br><br> Menjinakkan Giganotosaurus adalah salah satu tantangan terbesar dalam ARK. Pemain harus menggunakan strategi cerdas, seperti mempersiapkan banyak anak panah narkotika atau senjata bius, serta memanfaatkan perangkap besar. Setelah dijinakkan, Giganotosaurus menjadi senjata yang sangat mematikan, meskipun butuh waktu lama dan sumber daya yang besar untuk proses penjinakannya.<br><br> Giganotosaurus sangat kuat dalam pertempuran, dengan serangan gigitan yang dapat menghancurkan struktur dan makhluk besar dalam hitungan detik. Namun, kelemahan utamanya adalah stamina yang cepat habis dan risiko masuk ke mode Rage, yang bisa berbahaya bagi sekutunya. Pemain harus berhati-hati dalam menggunakan Giganotosaurus dalam situasi pertempuran intens.<br><br> Secara keseluruhan, Giganotosaurus adalah dinosaurus yang sangat kuat dan menakutkan, menjadikannya makhluk legendaris dalam ARK. Meskipun sulit dijinakkan, setelah berhasil, ia dapat menjadi kekuatan besar yang mendominasi medan pertempuran.",
        foto: "fotoContent/GiganotosaurusContent.webp",
        suara: "sounds/Gigasound.mp3"
    },
    Iguanodon: {
        deskripsi: "Iguanodon adalah dinosaurus herbivora yang serbaguna dan efisien dalam ARK: Survival Evolved. Dikenal dengan kemampuannya untuk beralih antara berjalan dengan dua kaki atau empat kaki, Iguanodon menjadi salah satu dinosaurus yang sangat fleksibel dalam hal mobilitas. Saat berjalan dengan dua kaki, Iguanodon memiliki kecepatan yang cukup tinggi, sementara saat berjalan dengan empat kaki, ia dapat bergerak lebih stabil tanpa menghabiskan stamina.<br><br> Salah satu kemampuan unik Iguanodon adalah kemampuannya untuk mengubah buah-buahan (berry) menjadi biji, yang sangat berguna dalam bertani. Selain itu, Iguanodon memiliki stamina yang hampir tak terbatas saat berlari dengan empat kaki, menjadikannya hewan transportasi yang ideal untuk jarak jauh tanpa perlu sering berhenti untuk beristirahat.<br><br> Menjinakkan Iguanodon cukup mudah bagi pemain baru maupun berpengalaman. Proses penjinakan melibatkan melumpuhkannya dengan senjata bius atau menggunakan buah-buahan seperti Mejoberry untuk memberi makan. Setelah dijinakkan, Iguanodon menjadi dinosaurus yang sangat praktis untuk digunakan dalam mengumpulkan sumber daya dan juga sebagai transportasi.<br><br> Iguanodon juga memiliki kemampuan menyerang yang cukup baik untuk dinosaurus herbivora seukuran dirinya. Serangannya menggunakan cakar di depan, yang bisa memberikan kerusakan yang layak terhadap predator berukuran kecil hingga sedang. Meskipun tidak sekuat dinosaurus tempur lainnya, Iguanodon mampu bertahan dalam pertempuran jika diperlukan.<br><br> Dengan kemampuan mobilitas tinggi, efisiensi dalam bertani, dan stamina luar biasa, Iguanodon menjadi salah satu dinosaurus yang paling serbaguna dan bermanfaat bagi pemain yang menginginkan makhluk yang dapat melakukan berbagai tugas dalam dunia ARK.",
        foto: "fotoContent/IguanodonContent.webp",
        suara: "sounds/Iguanodon_sound_1.mp3"
    },
    spinosaurus: {
        deskripsi: "Spinosaurus adalah salah satu predator terbesar dan paling serbaguna dalam ARK: Survival Evolved. Dinosaurus karnivora ini dikenal dengan ciri khas sirip besar di punggungnya dan kemampuannya yang luar biasa di darat maupun di air. Spinosaurus memiliki kecepatan, kekuatan, dan fleksibilitas, menjadikannya salah satu dinosaurus paling ditakuti di dunia ARK.<br><br> Keunikan utama Spinosaurus adalah kemampuannya untuk bertarung baik di darat maupun di air. Saat berada di dekat air, Spinosaurus mendapat peningkatan kecepatan dan kekuatan, membuatnya lebih mematikan dalam situasi tempur. Ini membuat Spinosaurus sangat cocok untuk digunakan di area sungai atau pantai, di mana ia dapat memanfaatkan lingkungannya dengan baik.<br><br> Menjinakkan Spinosaurus membutuhkan strategi yang hati-hati karena ia sangat agresif dan kuat. Pemain perlu menggunakan senjata bius jarak jauh, seperti panah narkotika atau senapan bius, sambil tetap bergerak untuk menghindari serangan cepatnya. Setelah dijinakkan, Spinosaurus menjadi dinosaurus tempur yang sangat tangguh, dengan kemampuan luar biasa dalam menyerang musuh besar maupun kecil.<br><br> Spinosaurus memiliki dua mode berdiri: saat berjalan dengan dua kaki, ia mendapatkan lebih banyak kekuatan serangan dan dapat menyerang dengan cakarnya, sedangkan dengan empat kaki, ia lebih cepat dan lebih stabil, terutama saat mengejar mangsa atau menjelajahi area luas. Fleksibilitas ini membuatnya sangat efektif dalam berbagai situasi.<br><br> Secara keseluruhan, Spinosaurus adalah predator yang mematikan dan sangat serbaguna. Kemampuannya untuk bertarung di air dan di darat, serta kekuatan serangannya yang dahsyat, menjadikannya salah satu makhluk terkuat yang dapat dijinakkan oleh pemain di ARK, cocok untuk pemain yang mencari kekuatan dan fleksibilitas dalam pertempuran dan eksplorasi.",
        foto: "fotoContent/spinosaurContent.webp",
        suara: "sounds/Spinosound_1.mp3"
    },
    Yutyrannus: {
        deskripsi: "Yutyrannus adalah predator besar yang memerintah wilayah dengan suara menggelegar dan kekuatan mengintimidasi. Dikenal karena bulunya yang tebal dan kemampuan untuk mempengaruhi dinosaurus lain, Yutyrannus merupakan salah satu makhluk paling ditakuti di dunia Ark. Kemampuannya untuk memberikan efek ketakutan pada musuh dan efek pemberani pada sekutunya menjadikannya aset tak ternilai dalam pertempuran.<br><br>Salah satu kelebihan utama Yutyrannus adalah raungan khasnya yang dapat membuat musuh panik dan melarikan diri. Ini sangat berguna dalam situasi pertempuran skala besar, di mana pemain dapat memanfaatkan momen tersebut untuk mengalahkan musuh yang terpecah atau kabur. Sebaliknya, Yutyrannus juga dapat mengeluarkan raungan pemberani yang meningkatkan moral dan kekuatan sekutu di sekitarnya, menjadikan pasukan lebih kuat dan tangguh.<br><br>Yutyrannus sering ditangkap oleh pemain yang mencari keunggulan dalam pertempuran PvE dan PvP. Meskipun taming Yutyrannus bisa menjadi tantangan, terutama karena kemampuannya untuk memanggil pasukan Carnotaurus, manfaatnya dalam pertempuran sangat sepadan dengan usaha. Setelah dijinakkan, Yutyrannus sering digunakan sebagai komandan di barisan depan, memberikan dukungan psikologis kepada tim dan mendestabilisasi formasi musuh.<br><br>Kombinasi antara kekuatan fisik dan pengaruh psikologis menjadikan Yutyrannus makhluk yang sangat diandalkan dalam strategi perang. Pemain yang mampu memanfaatkan kemampuan raungannya dengan bijak akan memiliki keunggulan besar di medan tempur, baik saat menyerang maupun bertahan.",
        foto: "fotoContent/yutyrannusContent.webp",
        suara: "sounds/Yutyrannussound.mp3"
    },
    Kentrosaurus: {
        deskripsi: "Kentrosaurus adalah dinosaurus herbivora yang dikenal karena tubuhnya yang dipenuhi oleh deretan duri tajam. Hewan ini biasanya ditemukan di wilayah pegunungan dan hutan lebat di dalam permainan. Meskipun ukurannya tidak sebesar Stegosaurus, Kentrosaurus mampu memberikan ancaman serius bagi predator yang mendekat.<br><br>Duri besar yang menonjol dari punggung dan ekornya menjadikan Kentrosaurus sebagai hewan yang sulit didekati. Ketika terpojok atau merasa terancam, Kentrosaurus akan menyerang dengan kekuatan brutal, menggunakan ekornya yang tajam untuk menusuk musuh. Ini menjadikannya sebagai makhluk defensif yang sangat berbahaya.<br><br>Pemain sering menggunakan Kentrosaurus sebagai taming option yang berguna untuk pertahanan basis. Kecepatan dan manuvernya mungkin terbatas, tetapi kemampuannya untuk memantul balik serangan musuh dan menyebabkan luka dalam membuatnya pilihan yang solid untuk pertahanan.<br><br>Meskipun taming Kentrosaurus bisa menjadi tantangan tersendiri karena sifat agresifnya, mereka adalah hewan yang sangat setia setelah ditaklukkan. Pemain dapat menggunakannya dalam formasi tempur atau sebagai penjaga garis depan, memastikan keselamatan dari serangan dinosaurus lain atau pemain musuh.",
        foto: "fotoContent/kentrosaurusContent.webp",
        suara: "sounds/kentrosound.mp3"
    }
};

let currentAudio = null;

function showPopup(boxElement) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");

    const dinosaurId = boxElement.id;
    const { deskripsi, foto, suara } = dinosaurDescriptions[dinosaurId];

    popupContent.innerHTML = `
        <div class="inner-box">
            <h2>${boxElement.innerText}</h2>
            <img src="${foto}">
            <p>${deskripsi}</p>
            <button id="sound-button">
                <img src="offSound.png">
            </button>
        </div>
    `;

    const audio = new Audio(suara);
    let isPlaying = false;

    const soundButton = document.getElementById("sound-button");
    soundButton.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            soundButton.querySelector('img').src = "logoSounds.png";
        } else {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
            soundButton.querySelector('img').src = "offSound.png";
        }
    });

    currentAudio = audio;

    popup.classList.add('show');
    popup.style.display = "block";
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        popup.style.opacity = '1';
        popupContent.style.opacity = '1';
        popupContent.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
}

function hidePopup() {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    popup.style.opacity = '0';
    popupContent.style.opacity = '0';
    popupContent.style.transform = 'translate(-50%, -50%) scale(0.8)';

    setTimeout(() => {
        popup.classList.remove('show');
        popup.style.display = "none";
        document.body.style.overflow = '';
    }, 400);
}
