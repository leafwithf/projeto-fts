
<!-- Salvando  -->

<!-- document.addEventListener("DOMContentLoaded", function () {
    // Carousel 1 (com classe "carousel-slide")
    let slideIndexCarousel = 0;
    let slideIntervalCarousel = setInterval(nextSlideCarousel, 5000);

    function showSlideCarousel(index) {
        const slides = document.getElementsByClassName("carousel-slide");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndexCarousel = index;
        if (slideIndexCarousel >= slides.length) slideIndexCarousel = 0;
        else if (slideIndexCarousel < 0) slideIndexCarousel = slides.length - 1;

        slides[slideIndexCarousel].style.display = "block";
    }

    function nextSlideCarousel() {
        slideIndexCarousel++;
        const slides = document.getElementsByClassName("carousel-slide");
        if (slideIndexCarousel >= slides.length) {
            slideIndexCarousel = 0;
        }
        showSlideCarousel(slideIndexCarousel);
    }

    function changeSlideCarousel(direction) {
        clearInterval(slideIntervalCarousel);
        slideIndexCarousel += direction;
        const slides = document.getElementsByClassName("carousel-slide");
        if (slideIndexCarousel < 0) slideIndexCarousel = slides.length - 1;
        else if (slideIndexCarousel >= slides.length) slideIndexCarousel = 0;

        showSlideCarousel(slideIndexCarousel);
        slideIntervalCarousel = setInterval(nextSlideCarousel, 5000);
    }

    // Carousel 2 (com classe "fineart")
    const fineartSlides = document.querySelectorAll(".fineart");
    let currentIndex = 0;

    function showFineartSlide(index) {
        fineartSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextFineartSlide() {
        currentIndex = (currentIndex + 1) % fineartSlides.length;
        showFineartSlide(currentIndex);
    }

    // Mostrar a primeira imagem do fineart ao iniciar
    showFineartSlide(currentIndex);

    // Mudar de imagem do fineart a cada 3 segundos
    setInterval(nextFineartSlide, 3000);
}); -->


  <!-- Acessibilidade e usabilidade
  <meta name="theme-color" content="#000000" />
  <meta name="color-scheme" content="dark light" /> -->


 <!-- <img src="../../public/assets/images/galeria/Horizontal/image020.webp" class="horizontal"
                alt="Não se pode libertar um escravo que ama suas correntes - Platão" data-category="rostos">

            <img src="../../public/assets/images/galeria/Horizontal/image021.webp" class="horizontal"
                alt="Quanto mais você caminha, mais se perde nas complexidades e possibilidades, até que, no silêncio, encontre algo novo sobre si mesmo."
                data-category="ceu">

            <img src="../../public/assets/images/galeria/Horizontal/image022.webp" class="horizontal"
                alt="Assim como a juventude oferecendo sua alma ao mundo, absorvendo cada nota com a sabedoria de quem já ouviu o silêncio antes."
                data-category="rostos">

            <img src="../../public/assets/images/galeria/Horizontal/image023.webp" class="horizontal"
                alt="Mesmo diante da pressão para se transformar, sua essência permanece única, imutável."
                data-category="rostos">

            <img src="../../public/assets/images/galeria/Horizontal/image024.webp" class="horizontal"
                alt="São como cores distintas em um único quadro, unindo diversidade e harmonia na mesma essência."
                data-category="arte">

            <img src="../../public/assets/images/galeria/Horizontal/image025.webp" class="horizontal"
                alt="Silencioso, misterioso e belo, florescendo lentamente no vasto terreno da mente."
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image026.webp" class="horizontal"
                alt="Seu olhar carrega a tensão da verdade ainda não revelada, a força de quem se conhece, mas permanece à beira do desconhecido."
                data-category="rostos">

            <img src="../../public/assets/images/galeria/Horizontal/image027.webp" class="horizontal"
                alt="Quanto mais você caminha, mais se perde nas complexidades e possibilidades, até que, no silêncio, encontre algo novo sobre si mesmo."
                data-category="natureza">

            <img src="../../public/assets/images/galeria/Horizontal/image028.webp" class="horizontal"
                alt="A flor mais bela é aquela que cresce em meio as pedras - Nietzsche" data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image029.webp" class="horizontal"
                alt="A arte é a expressão de uma liberdade que se liberta da necessidade - Immanuel Kant"
                data-category="arte">

            <img src="../../public/assets/images/galeria/Horizontal/image030.webp" class="horizontal"
                alt="Nada é permanente, exceto a mudança. - Heráclito" data-category="natureza">

            <img src="../../public/assets/images/galeria/Horizontal/image031.webp" class="horizontal"
                alt="A obra de arte só se completa na participação do espectador. - Ligia Clark" data-category="arte">

            <img src="../../public/assets/images/galeria/Horizontal/image032.webp" class="horizontal"
                alt="O artista não inventa nada, ele só descobre. - Ligia Clark" data-category="arte">

            <img src="../../public/assets/images/galeria/Horizontal/image034.webp" class="horizontal"
                alt="Devemos considerar perdido cada dia em que não dançamos pelo menos uma vez. - Nietzsche "
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image035.webp" class="horizontal"
                alt="A virtude está no meio - Aristóteles" data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image036.webp" class="horizontal"
                alt="O que seria da vida, se não tivéssemos a coragem de tentar algo? - Van Gogh" data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image037.webp" class="horizontal"
                alt="Somos todos silhuetas de luz em meio ao desconhecido, visíveis apenas onde a escuridão nos permite ser."
                data-category="urbano">

            <img src="../../public/assets/images/galeria/Horizontal/image038.webp" class="horizontal"
                alt="- Francis Bacon" data-category="arte">

            <img src="../../public/assets/images/galeria/Horizontal/image039.webp" class="horizontal"
                alt="No meio do inverno, descobri que havia dentro de mim um verão invencível. - Albert Camus"
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image040.webp" class="horizontal"
                alt="- Francis Bacon" data-category="arte">

            <img src="../../public/assets/images/galeria/Horizontal/image041.webp" class="horizontal"
                alt="A verdadeira beleza se revela não quando é observada, mas quando escolhe se esconder"
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image042.webp" class="horizontal"
                alt="Somos todos, por dentro, girassóis. Cada um com seu papel, aquele que o guia, o que sustenta e o que avança"
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image043.webp" class="horizontal"
                alt="A luz brilha na escuridão, e a escuridão não a venceu - Albert Einstein" data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image044.webp" class="horizontal"
                alt="Até na decadência a beleza insiste em ser visível, mesmo que por um fio" data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image046.webp" class="horizontal"
                alt="A beleza não precisa ser grande para ser grandiosa; às vezes, ela está em cada minúsculo gesto de vida."
                data-category="natureza">

            <img src="../../public/assets/images/galeria/Horizontal/image047.webp" class="horizontal"
                alt="A harmonia é composta pela união dos opostos. - Heráclito" data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image048.webp" class="horizontal"
                alt="A arte deve perturbar, deve incomodar. Ela deve ser uma transformação - Bacon"
                data-category="arte">

            <img src="../../public/assets/images/galeria/Horizontal/image049.webp" class="horizontal"
                alt="Na vida, a paz é a terra onde nossas paixões e suavidades podem crescer, sem perder sua beleza."
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image050.webp" class="horizontal"
                alt="A beleza reside na harmonia que encontramos quando nos entregamos à suavidade de nossa própria essência."
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image051.webp" class="horizontal"
                alt="Às vezes, as coisas mais simples, como um campo dourado de flores, são as que carregam as maiores lições sobre a vida. - Harper Lee"
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image052.webp" class="horizontal"
                alt="O que não nos mata nos torna mais fortes. - Nietzsche" data-category="arte">

            <img src="../../public/assets/images/galeria/Horizontal/image053.webp" class="horizontal"
                alt="Às vezes, é a luz silenciosa e discreta que revela os segredos mais profundos de um lugar. - Carlos Ruiz Zafón"
                data-category="urbano">

            <img src="../../public/assets/images/galeria/Horizontal/image054.webp" class="horizontal"
                alt="A beleza é a luz que se reflete no mundo das ideias e desce à terra, iluminando o nosso ser. - Platão"
                data-category="urbano">

            <img src="../../public/assets/images/galeria/Horizontal/image055.webp" class="horizontal"
                alt="A sorte não é um acaso, mas um reflexo das coisas belas que escolhemos enxergar."
                data-category="flor">

            <img src="../../public/assets/images/galeria/Horizontal/image055.webp" class="horizontal"
                alt="A sorte não é um acaso, mas um reflexo das coisas belas que escolhemos enxergar."
                data-category="flor">


            <img src="../../public/assets/images/galeria/Horizontal/image045.webp" class="horizontal"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="rostos">

            <img src="../../public/assets/images/galeria/Horizontal/image033.webp" class="horizontal"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="natureza">

            <img src="../../public/assets/images/galeria/Horizontal/image019.webp" class="horizontal"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="ceu">

            <img src="../../public/assets/images/galeria/Horizontal/image017.webp" class="horizontal"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="ceu">

            <img src="../../public/assets/images/galeria/Horizontal/image005.webp" class="horizontal"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="ceu">

            <img src="../../public/assets/images/galeria/Horizontal/image008.webp" class="horizontal"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="rostos">

            <img src="../../public/assets/images/galeria/Vertical/image01.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image02.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="animais">

            <img src="../../public/assets/images/galeria/Vertical/image03.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="natureza">

            <img src="../../public/assets/images/galeria/Vertical/image04.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="natureza">

            <img src="../../public/assets/images/galeria/Vertical/image05.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image06.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="urbano">

            <img src="../../public/assets/images/galeria/Vertical/image07.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image08.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image09.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image10.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image11.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="ceu">

            <img src="../../public/assets/images/galeria/Vertical/image12.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="animais">

            <img src="../../public/assets/images/galeria/Vertical/image13.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="urbano">

            <img src="../../public/assets/images/galeria/Vertical/image14.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image15.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="urbano">

            <img src="../../public/assets/images/galeria/Vertical/image16.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="urbano">

            <img src="../../public/assets/images/galeria/Vertical/image17.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image18.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image19.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image20.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image21.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image22.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="animais">

            <img src="../../public/assets/images/galeria/Vertical/image23.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image24.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <!-- <img src="../../public/assets/images/galeria/Vertical/image25.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image26.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image27.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image28.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image29.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image30.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image31.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="arte">

            <img src="../../public/assets/images/galeria/Vertical/image32.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="ceu">

            <img src="../../public/assets/images/galeria/Vertical/image33.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor">

            <img src="../../public/assets/images/galeria/Vertical/image34.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="natureza">

            <img src="../../public/assets/images/galeria/Vertical/image35.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="por-do-sol">

            <img src="../../public/assets/images/galeria/Vertical/image36.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="por-do-sol">

            <img src="../../public/assets/images/galeria/Vertical/image37.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="urbano">

            <img src="../../public/assets/images/galeria/Vertical/image38.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="urbano">

            <img src="../../public/assets/images/galeria/Vertical/image39.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="natureza">

            <img src="../../public/assets/images/galeria/Vertical/image40.webp" class="vertical"
                alt="Lorem ipsum odor amet, consectetuer adipiscing elit." data-category="flor"> -->