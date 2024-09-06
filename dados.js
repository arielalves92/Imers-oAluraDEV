let dados = [
    {
        titulo: "Johann Sebastian Bach",
        descricao: "Johann Sebastian Bach é considerado um dos maiores compositores de todos os tempos. Sua música, marcada por uma complexidade e beleza incomparáveis, influenciou profundamente a história da música ocidental. Nascido em uma família de músicos, Bach dominava diversos instrumentos e compôs uma vasta obra que abrange desde peças para órgão e cravo até cantatas e oratórios. Sua maestria na contraponto e sua habilidade em construir estruturas musicais complexas e harmoniosas o tornaram uma figura central da música barroca. Obras como O Cravo Bem Temperado e a Paixão Segundo São Mateus são consideradas marcos da história da música.",
        link: "https://pt.wikipedia.org/wiki/Johann_Sebastian_Bach"
    },
    {
        titulo: "Wolfgang Amadeus Mozart",
        descricao: "Wolfgang Amadeus Mozart foi um prolífico compositor austríaco do período clássico. Considerado um dos maiores gênios musicais de todos os tempos, Mozart demonstrou um talento excepcional desde a infância, compondo obras em diversos gêneros, incluindo sinfonias, concertos, óperas e música de câmara. Sua música é marcada por uma elegância e melodias inesquecíveis.",
        link: "https://pt.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart"
    },
    {
        titulo: "Ludwig van Beethoven",
        descricao: "Ludwig van Beethoven foi um compositor alemão, considerado um dos mais influentes da história da música. Sua obra transcende os limites do classicismo e abre caminho para o romantismo. Beethoven era um virtuoso pianista e suas composições, como as nove sinfonias e as 32 sonatas para piano, são consideradas marcos da música clássica.",
        link: "https://pt.wikipedia.org/wiki/Ludwig_van_Beethoven"
    },
    {
        titulo: "Antonio Vivaldi",
        descricao: "Antonio Vivaldi foi um compositor italiano do período barroco, conhecido por seus concertos para violino, especialmente as Quatro Estações. Sua música é caracterizada por melodias vibrantes e ritmos energéticos, refletindo a vida musical da Veneza do século XVIII.",
        link: "https://pt.wikipedia.org/wiki/Antonio_Vivaldi"
    },
    {
        titulo: "George Frideric Handel",
        descricao: "George Frideric Handel foi um compositor anglo-alemão do período barroco, famoso por suas óperas, oratórios e música instrumental. Suas obras mais conhecidas incluem o oratório O Messias e a ópera Rinaldo. Handel exerceu uma grande influência na música inglesa e suas composições são apreciadas até hoje.",
        link: "https://pt.wikipedia.org/wiki/George_Frideric_Handel"
    },
    {
        titulo: "Joseph Haydn",
        descricao: "Joseph Haydn foi um compositor austríaco do período clássico, considerado um dos pais da sinfonia. Suas sinfonias, quartetos de cordas e diversas outras obras tiveram grande influência em compositores posteriores, como Mozart e Beethoven. Haydn é conhecido por sua clareza formal e equilíbrio entre as partes de uma composição.",
        link: "https://pt.wikipedia.org/wiki/Joseph_Haydn"
    },
    {
        titulo: "Frédéric Chopin",
        descricao: "Frédéric Chopin foi um compositor e pianista polonês do período romântico, considerado um dos maiores virtuosos do piano. Suas obras, como os nocturnos, mazurcas e polonesas, são caracterizadas por um lirismo profundo e uma técnica pianística virtuosística. Chopin é uma figura central do romantismo musical.",
        link: "https://pt.wikipedia.org/wiki/Frédéric_Chopin"
    },
    {
        titulo: "Franz Liszt",
        descricao: "Franz Liszt foi um pianista e compositor húngaro do período romântico, conhecido por sua virtuosidade e suas composições sinfônicas e para piano. Liszt foi uma figura central do romantismo musical e influenciou muitos compositores posteriores. Suas obras são caracterizadas por um virtuosismo técnico e um lirismo intenso.",
        link: "https://pt.wikipedia.org/wiki/Franz_Liszt"
    },
    {
        titulo: "Richard Wagner",
        descricao: "Richard Wagner foi um compositor alemão do período romântico, famoso por suas óperas em grande escala e por suas teorias sobre a música e o drama. Suas óperas, como O Anel do Nibelungo e Tristão e Isolda, são caracterizadas por harmonias complexas, orquestrações grandiosas e libretos mitológicos. Wagner revolucionou a ópera e influenciou profundamente a música do século XX.",
        link: "https://pt.wikipedia.org/wiki/Richard_Wagner"
    },
    {
        titulo: "Giuseppe Verdi",
        descricao: "Giuseppe Verdi foi um dos mais importantes compositores italianos do século XIX, conhecido por suas óperas, que abordavam temas históricos e políticos. Suas óperas, como Rigoletto, La Traviata e Aida, são marcadas por melodias poderosas e arias memoráveis, e exerceram uma grande influência na história da ópera.",
        link: "https://pt.wikipedia.org/wiki/Giuseppe_Verdi"
    },
    {
        titulo: "Claude Debussy",
        descricao: "Claude Debussy foi um compositor francês, considerado um dos principais representantes do impressionismo musical. Sua música é caracterizada por harmonias ricas, escalas não convencionais e um uso inovador da orquestra. Obras como Clair de Lune e Prélude à l'après-midi d'un faune são exemplos de sua estética impressionista.",
        link: "https://pt.wikipedia.org/wiki/Claude_Debussy"
    },
    {
        titulo: "Igor Stravinsky",
        descricao: "Igor Stravinsky foi um compositor russo, um dos mais influentes do século XX. Suas obras, como A Sagração da Primavera, revolucionaram a música clássica com sua harmonia dissonante e ritmos complexos. Stravinsky é considerado um dos principais compositores do modernismo musical.",
        link: "https://pt.wikipedia.org/wiki/Igor_Stravinsky"
    },
    {
        titulo: "Béla Bartók",
        descricao: "Béla Bartók foi um compositor húngaro, conhecido por suas obras que combinam elementos da música folclórica húngara com técnicas modernas. Suas composições, como o Concerto para Orquestra, são caracterizadas por uma sonoridade rica e complexa. Bartók é considerado um dos principais compositores do século XX.",
        link: "https://pt.wikipedia.org/wiki/Béla_Bartók"
    },
    {
        titulo: "Arnold Schoenberg",
        descricao: "Arnold Schoenberg foi um compositor austríaco, considerado um dos principais expoentes do expressionismo musical e fundador da escola vienense do dodecafonismo. Suas obras, como Pierrot Lunaire, desafiaram as convenções harmônicas e tonais da música tradicional, abrindo caminho para a música do século XX.",
        link: "https://pt.wikipedia.org/wiki/Arnold_Schoenberg"
    },
    {
        titulo: "Dmitri Shostakovich",
        descricao: "Dmitri Shostakovich foi um compositor russo, um dos mais importantes do século XX. Suas sinfonias e outras obras refletem a turbulenta história da Rússia soviética, combinando elementos do classicismo com a linguagem musical moderna. Shostakovich é conhecido por sua expressividade emocional e sua capacidade de criar música tanto grandiosa quanto íntima.",
        link: "https://pt.wikipedia.org/wiki/Dmitri_Shostakovich"
    }
];
