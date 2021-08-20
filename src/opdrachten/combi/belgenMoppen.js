const grappenData = [
    {
        id: "1",
        question: "Waarom heeft een Belg een lepel mee in de auto?",
        punchLine: "Om hem in de soep te kunnen rijden!"
    },
    {
        id: "2",
        question: "Waarom deed de Belgische luchtmacht niet mee aan de Tweede Wereldoorlog?",
        punchLine: "De piloot was ziek!"
    },
    {
        id: "3",
        punchLine: "Een Belg steekt een lucifer aan en blaast die gelijk weer uit. 'Zo', denkt de Belg, 'die bewaar ik voor later, want die doet het!'"
    },
    {
        id: "4",
        question: "Waarom zet een dronken Belg zijn bril af bij een alcohol-controle?",
        punchLine: "Dat is alvast twee glazen minder!"
    },
    {
        id: "5",
        punchLine: "Een Belg rijdt met zijn fiets op de snelweg en wordt aangehouden door een motoragent. Zegt de agent 'Awel, wede gij niet waar het fietspad is?' Zegt de Belg: 'Jawel, U gaat rechtdoor en dan eerste afslag naar rechts, maar ik geloof niet dat gij daar met uw motorfiets mag rijden!'"
    },
    {
        id: "6",
        question: "Heb je het gehoord van die Belg die verdronken is... Nee?",
        punchLine: "Hij gooide zijn sigaret in het water en ging hem toen uittrappen!"
    },
    {
        id: "7",
        question: "Waarom loopt een Belgische autodief naast de snelweg als hij is ontsnapt?",
        punchLine: "Dat is de vluchtstrook!"
    },
    {
        id: "8",
        question: "Waarom neemt een Belg altijd een liniaal mee naar bed?",
        punchLine: "Dan kan hij 's morgens opmeten hoe lang hij geslapen heeft!"
    },
    {
        id: "9",
        punchLine: "Belgische wetenschappers zijn erachter gekomen dat alle weduwen langer leven dan hun echtgenoot!"
    },
    {
        id: "10",
        question: "Waarom hebben ze in België ondergrondse scholen?",
        punchLine: "Dan kunnen ze dieper nadenken!"
    },
    {
        id: "11",
        punchLine: "Twee Belgen lopen langs de Nederlandse grens en zijn op weg naar Antwerpen. Ze moeten nog een heel eind lopen. Als ze bij een busremise aankomen, zegt de ene Belg: ‘Als we nou een bus jatten, kunnen we naar Antwerp rijden.’ ‘Ja,’ zegt de andere Belg, ‘maar durf jij zo’n bus te jatten?’ ‘Ikke wel,’ zegt de ene Belg weer, ‘Als jij hier op de uitkijk blijft staan, dan ga ik die loods in.’ De Belg die buiten staat, hoort binnen een hoop gestommel en kabaal. En het duurt maar, en het duurt maar. Eindelijk, na anderhalf uur, komt die Belg met een bus naar buiten rijden. ‘Waar bleef je nou zo lang?’ vraagt zijn maat. ‘Nondeju,’ zegt de Belg, ‘de bus naar Antwerp stond helemaal achterin!’"
    },
    {
        id: "12",
        question: "Waarom staat het leger paraat bij het slopen van een gebouw in België?",
        punchLine: "Omdat er gewapend beton in kan zitten!"
    },
    {
        id: "13",
        question: "waarom neemt een Belg fruit mee naar bed?",
        punchLine: "Om zijn vrouw te bevruchten!"
    },
    {
        id: "14",
        punchLine: "Twee Belgen lopen over een treinrails. Zegt die ene: 'Wat een lange trap hè?' Zegt die andere: 'Dat valt nog wel mee, alleen de leuning zit zo laag!'"
    },
    {
        id: "15",
        punchLine: "Laatst zijn er 15 Belgen verdronken in de haven van Antwerpen... Ze waren een onderzeeër aan het aanduwen!"
    },
    {
        id: "16",
        question: "Hoe herken je een Belgische piraat?",
        punchLine: "Die heeft voor beide ogen een lapje!"
    },
    {
        id: "17",
        question: "Hoe isoleert een Belg zijn kippenhok?",
        punchLine: "Met dubbel gaas!"
    },
    {
        id: "18",
        punchLine: "Twee Belgische politiemannen vinden in het park twee bommen. Die willen ze naar de commissaris brengen. Als ze in de auto zitten zegt de ene tegen de andere: 'Wat doen we als er één ontploft?' Waarop de ander zegt: 'Dan doen we of we er maar één gevonden hebben!'"
    },
    {
        id: "19",
        question: "Hoe vangt een Belg een konijn?",
        punchLine: "Hij gaat achter een boom zitten en doet het geluid na van een wortel!"
    },
    {
        id: "20",
        punchLine: "Er loopt een Belg over straat met een stokbrood in zijn kont. Dus ik vraag hem waarom hij dat doet. Zegt hij: 'Ik ben vanmorgen bij de tandarts geweest, en ik moet voorlopig met de andere kant eten!'"
    },
    {
        id: "21",
        question: "Wat is zwart en ligt in de sneeuw?",
        punchLine: "Een gecamoufleerde Belg!"
    },
    {
        id: "22",
        punchLine: "Een Nederlander, een Duitser en een Belg gaan ontwikkelingswerk doen. Bij de voorbereiding komen ze elkaar tegen en hebben ze het over de gevaren van aids in die landen. Daarom besluiten ze ook condooms mee te nemen. In het vliegtuig komen ze elkaar weer tegen, en bespreken dan hoeveel condooms ze mee hebben. De Nederlander zegt: 'Ik heb er 100 meegenomen, dat moet wel genoeg zijn.' De Duitser zegt: 'Ik heb er 75 mee, dat moet voldoende zijn.' Ze kijken de Belg aan en die zegt: 'Ik heb er 11 mee, meer kon ik er niet omheen krijgen!'"
    },
    {
        id: "23",
        punchLine: "De Belgen lanceren hun eerste raket vanaf Cape Ukkel. Aan boord bevinden zich twee varkens en Sjefke. De raket geraakt buiten de dampkring en stoot de eerste trap af. Het station op Aarde neemt contact op met de raket: 'Hier de Aarde, hier Cape Ukkel, Varken Eén, Varken Eén, come in please!' 'Knor knor, hier Varken Eén, Varken Eén, ik kan u luid en duidelijk verstaan!' 'Hallo Varken Eén, kent u uw instructies nog?' 'Jawel', zegt Varken Eén, 'Als we bij de Maan aankomen druk ik op de rode knop en gaan we landen.' 'Uitstekend! Over en uit.' De raket vliegt verder door de ruimte en stoot de tweede trap af. Het station op Aarde neemt weer contact op met de raket: 'Hier de Aarde, hier Cape Ukkel, Varken Twee, Varken Twee, come in please!' 'Knor knor, hier Varken Twee, hier Varken Twee, ik kan u luid en duidelijk verstaan!' 'Hallo Varken Twee, kent u uw instructies nog?' 'Jawel', zegt Varken Twee, 'Als we op de maan zijn, en willen vertrekken, druk ik op de groene knop en stijgen we op.' 'Uitstekend! Over en uit.' De raket vliegt almaar verder en stoot de derde trap af. Het station op Aarde neemt nogmaals contact op: 'Hier de Aarde, hier Cape Ukkel, Sjefke, Sjefke, come in please!' 'Hier Sjefke, hier Sjefke, ik kan u luid en duidelijk verstaan!' 'Hallo Sjefke, ken je je instructies nog?' 'Jawel', zegt Sjefke, 'Ik geef de varkens te vreten en blijf van alle knoppen af!' "
    },
    {
        id: "24",
        question: "Hoe peutert een Belg in zijn neus?",
        punchLine: "Hij maakt met zijn vingers een rondje om zijn neus en zegt: 'Kom er uit, je bent omsingeld!'"
    },
    {
        id: "25",
        question: "Hoeveel belgenmoppen zijn er?",
        punchLine: "Geen, ze zijn allemaal waar!"
    },
]

export default grappenData