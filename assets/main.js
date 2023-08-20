var audio = new Audio();
var valor = -24;
var intensidadeSus = 3
document.getElementById("tempoInput").value = "120";

const counterSpan = document.getElementById("counter");

function Tocar(som) {
    audio.src = som;
    audio.play();
}

function PararSom() {
    audio.pause();
    audio.currentTime = 0;
}
function Transpose(v) {

    
    valor = valor + (v);
    counterSpan.textContent = valor + 24;
    if(valor > 0){
        valor = 0
        counterSpan.textContent = valor + 24;
    }
    if(valor < -48){
        valor = -48
        counterSpan.textContent = valor + 24;
    }
    console.log(valor);
    keyMap = [];
    keyMap = [
        { pcKey: "q", pianoKey: 12 + (valor + 24) },
        { pcKey: "2", pianoKey: 13 + (valor + 24) },
        { pcKey: "w", pianoKey: 14 + (valor + 24) },
        { pcKey: "e", pianoKey: 15 + (valor + 24) },
        { pcKey: "é", pianoKey: 15 + (valor + 24) },
        { pcKey: "4", pianoKey: 16 + (valor + 24) },
        { pcKey: "r", pianoKey: 17 + (valor + 24) },
        { pcKey: "5", pianoKey: 18 + (valor + 24) },
        { pcKey: "t", pianoKey: 19 + (valor + 24) },
        { pcKey: "y", pianoKey: 20 + (valor + 24) },
        { pcKey: "ý", pianoKey: 20 + (valor + 24) },
        { pcKey: "7", pianoKey: 21 + (valor + 24) },
        { pcKey: "u", pianoKey: 22 + (valor + 24) },
        { pcKey: "ú", pianoKey: 22 + (valor + 24) },
        { pcKey: "8", pianoKey: 23 + (valor + 24) },
        { pcKey: "i", pianoKey: 24 + (valor + 24) },
        { pcKey: "í", pianoKey: 24 + (valor + 24) },
        { pcKey: "9", pianoKey: 25 + (valor + 24) },
        { pcKey: "o", pianoKey: 26 + (valor + 24) },
        { pcKey: "ó", pianoKey: 26 + (valor + 24) },
        { pcKey: "õ", pianoKey: 26 + (valor + 24) },
        { pcKey: "p", pianoKey: 27 + (valor + 24) },
        { pcKey: "-", pianoKey: 28 + (valor + 24) },
        { pcKey: "BracketLeft", pianoKey: 29 + (valor + 24) }, // ´ 
        { pcKey: "=", pianoKey: 30 + (valor + 24) },
        { pcKey: "[", pianoKey: 31 + (valor + 24) },
        { pcKey: "z", pianoKey: 32 + (valor + 24) },
        { pcKey: "s", pianoKey: 33 + (valor + 24) },
        { pcKey: "x", pianoKey: 34 + (valor + 24) },
        { pcKey: "d", pianoKey: 35 + (valor + 24) },
        { pcKey: "c", pianoKey: 36 + (valor + 24) },
        { pcKey: "f", pianoKey: 37 + (valor + 24) },
        { pcKey: "v", pianoKey: 38 + (valor + 24) },
        { pcKey: "b", pianoKey: 39 + (valor + 24) },
        { pcKey: "h", pianoKey: 40 + (valor + 24) },
        { pcKey: "n", pianoKey: 41 + (valor + 24) },
        { pcKey: "ñ", pianoKey: 41 + (valor + 24) },
        { pcKey: "j", pianoKey: 42 + (valor + 24) },
        { pcKey: "m", pianoKey: 43 + (valor + 24) },
        { pcKey: ",", pianoKey: 44 + (valor + 24) },
        { pcKey: "l", pianoKey: 45 + (valor + 24) },
        { pcKey: ".", pianoKey: 46 + (valor + 24) },
        { pcKey: "ç", pianoKey: 47 + (valor + 24) },
        { pcKey: ";", pianoKey: 48 + (valor + 24) },
        { pcKey: "Quote", pianoKey: 49 + (valor + 24) }, // ^
        { pcKey: "ShiftRight", pianoKey: 50 + (valor + 24) },
        { pcKey: "]", pianoKey: 50 + (valor + 24) },
        { pcKey: "ArrowUp", pianoKey: 51 + (valor + 24) },
        { pcKey: "PageDown", pianoKey: 52 + (valor + 24) },
        { pcKey: "End", pianoKey: 53 + (valor + 24) },
        { pcKey: "\\", pianoKey: 31 + (valor + 24) },
        { pcKey: "Enter", pianoKey: 32 + (valor + 24) }
    ]

}

function showKeys(value) {

    if (value == 1) {
        const spans = document.querySelectorAll("span.key-label");
        spans.forEach(span => {

            if (span.style.visibility == 'hidden') {
                value = 0;
            }
            span.style.visibility = 'hidden';
        });
    }
    if (value == 0) {
        const spans = document.querySelectorAll("span.key-label");
        spans.forEach(span => {
            span.style.visibility = 'visible';
        });
    }
}


//Reset

let path = "./assets/grandpiano/"
document.addEventListener("DOMContentLoaded", function () {
    path = "./assets/grandpiano/"
    for (i = 0; i <= 63; i++) {
        let sound = new Audio(path + (i + (valor)) + ".mp3")
        sound.volume = 0
        pianoSounds.push(sound)
    }
    console.log("Piano")
    suaFuncao();
});
//--------

function suaFuncao() {
    console.log("???");
}
function trocarPath(value) {
    pianoSounds.splice(0, pianoSounds.length)
    switch (value) {
        case 0:
            path = "./assets/piano/"
            for (i = 0; i <= 63; i++) {
                let sound = new Audio(path + (i + (valor)) + ".wav")
                sound.volume = 0
                pianoSounds.push(sound)
            }
            console.log("Piano")
            break;
        case 1:
            path = "./assets/sounds/"
            for (i = 0; i <= 63; i++) {
                let sound = new Audio(path + (i + (valor)) + ".wav")
                sound.volume = 0
                pianoSounds.push(sound)
            }
            console.log("8-bits")
        case 2:
            path = "./assets/grandpiano/"
            for (i = 0; i <= 63; i++) {
                let sound = new Audio(path + (i + (valor)) + ".mp3")
                sound.volume = 0
                pianoSounds.push(sound)
            }
            console.log("Grand Piano")
    }
}



// オーディオファイルのパス 
let keyMap = [
    { pcKey: "q", pianoKey: 12 + (valor + 24) },
    { pcKey: "2", pianoKey: 13 + (valor + 24) },
    { pcKey: "w", pianoKey: 14 + (valor + 24) },
    { pcKey: "e", pianoKey: 15 + (valor + 24) },
    { pcKey: "é", pianoKey: 15 + (valor + 24) },
    { pcKey: "4", pianoKey: 16 + (valor + 24) },
    { pcKey: "r", pianoKey: 17 + (valor + 24) },
    { pcKey: "5", pianoKey: 18 + (valor + 24) },
    { pcKey: "t", pianoKey: 19 + (valor + 24) },
    { pcKey: "y", pianoKey: 20 + (valor + 24) },
    { pcKey: "ý", pianoKey: 20 + (valor + 24) },
    { pcKey: "7", pianoKey: 21 + (valor + 24) },
    { pcKey: "u", pianoKey: 22 + (valor + 24) },
    { pcKey: "ú", pianoKey: 22 + (valor + 24) },
    { pcKey: "8", pianoKey: 23 + (valor + 24) },
    { pcKey: "i", pianoKey: 24 + (valor + 24) },
    { pcKey: "í", pianoKey: 24 + (valor + 24) },
    { pcKey: "9", pianoKey: 25 + (valor + 24) },
    { pcKey: "o", pianoKey: 26 + (valor + 24) },
    { pcKey: "ó", pianoKey: 26 + (valor + 24) },
    { pcKey: "õ", pianoKey: 26 + (valor + 24) },
    { pcKey: "p", pianoKey: 27 + (valor + 24) },
    { pcKey: "-", pianoKey: 28 + (valor + 24) },
    { pcKey: "BracketLeft", pianoKey: 29 + (valor + 24) }, // ´ 
    { pcKey: "=", pianoKey: 30 + (valor + 24) },
    { pcKey: "[", pianoKey: 31 + (valor + 24) },
    { pcKey: "z", pianoKey: 32 + (valor + 24) },
    { pcKey: "s", pianoKey: 33 + (valor + 24) },
    { pcKey: "x", pianoKey: 34 + (valor + 24) },
    { pcKey: "d", pianoKey: 35 + (valor + 24) },
    { pcKey: "c", pianoKey: 36 + (valor + 24) },
    { pcKey: "f", pianoKey: 37 + (valor + 24) },
    { pcKey: "v", pianoKey: 38 + (valor + 24) },
    { pcKey: "b", pianoKey: 39 + (valor + 24) },
    { pcKey: "h", pianoKey: 40 + (valor + 24) },
    { pcKey: "n", pianoKey: 41 + (valor + 24) },
    { pcKey: "ñ", pianoKey: 41 + (valor + 24) },
    { pcKey: "j", pianoKey: 42 + (valor + 24) },
    { pcKey: "m", pianoKey: 43 + (valor + 24) },
    { pcKey: ",", pianoKey: 44 + (valor + 24) },
    { pcKey: "l", pianoKey: 45 + (valor + 24) },
    { pcKey: ".", pianoKey: 46 + (valor + 24) },
    { pcKey: "ç", pianoKey: 47 + (valor + 24) },
    { pcKey: ";", pianoKey: 48 + (valor + 24) },
    { pcKey: "Quote", pianoKey: 49 + (valor + 24) }, // ^
    { pcKey: "ShiftRight", pianoKey: 50 + (valor + 24) },
    { pcKey: "]", pianoKey: 50 + (valor + 24) },
    { pcKey: "ArrowUp", pianoKey: 51 + (valor + 24) },
    { pcKey: "PageDown", pianoKey: 52 + (valor + 24) },
    { pcKey: "End", pianoKey: 53 + (valor + 24) },
    { pcKey: "\\", pianoKey: 31 + (valor + 24) },
    { pcKey: "Enter", pianoKey: 32 + (valor + 24) }
]                                   // PCキーとピアノ鍵盤番号の紐づけ
const pianoSounds = []              // Audioオブジェクト        
const touchKeyNumlist = []          // タッチ中の鍵盤番号リスト
let clickedKeyNum = null            // クリック中の鍵盤番号リスト
const isKeyPressing = new Array(30) // ピアノ鍵盤ごとの押下状態
isKeyPressing.fill(false)           // 初期値 = false            
const intervalIds = new Array(30)   // 各オーディオフェードアウトのインターバルID
intervalIds.fill(null)              // 初期値 = null           
const pianoWrap = document.getElementById("piano-wrap")     // 鍵盤全体
const whiteKeys = document.querySelectorAll(".white-key")   // 白鍵
const blackKeys = document.querySelectorAll(".black-key")   // 黒鍵




// 初期処理
// Audioオブジェクトを作成セット

//#region Arpejos Chords
let isArpejo = false;
let interromper = false;
var Chord = {
    C: [3, 7, 10, 15]
};


function Stride(chord) {
    const strideChord = [...chord]
    _primeiroMembro = strideChord.shift()
    _segundoMembro = strideChord.shift()
    _terceiroMembro = strideChord.shift()
    strideChord.unshift(_segundoMembro)
    strideChord.unshift(_terceiroMembro)
    strideChord.unshift(_primeiroMembro)
    return strideChord
}
function Triade(chord) {
    const TriadeChord = [...chord]
    _primeiroMembro = TriadeChord.shift()
    _segundoMembro = TriadeChord.shift()
    _terceiroMembro = TriadeChord.shift()
    _quartoMembro = TriadeChord.shift()

    TriadeChord.unshift(_segundoMembro)
    TriadeChord.unshift(_terceiroMembro)
    TriadeChord.unshift(_segundoMembro)
    TriadeChord.unshift(_terceiroMembro)
    TriadeChord.unshift(_segundoMembro)
    TriadeChord.unshift(_primeiroMembro)
    return TriadeChord
}
function Quarteto(chord) {
    const QuartetoChord = [...chord]
    _primeiroMembro = QuartetoChord.shift()
    _segundoMembro = QuartetoChord.shift()
    _terceiroMembro = QuartetoChord.shift()
    _quartoMembro = QuartetoChord.shift()
    QuartetoChord.unshift(_segundoMembro)
    QuartetoChord.unshift(_terceiroMembro)
    QuartetoChord.unshift(_segundoMembro)
    QuartetoChord.unshift(_terceiroMembro)
    QuartetoChord.unshift(_segundoMembro)
    QuartetoChord.unshift(_terceiroMembro)
    QuartetoChord.unshift(_segundoMembro)
    QuartetoChord.unshift(_primeiroMembro)
    return QuartetoChord
}
function Dueto(chord) {
    const DuetoChord = [...chord]
    _primeiroMembro = DuetoChord.shift()
    _segundoMembro = DuetoChord.shift()
    _terceiroMembro = DuetoChord.shift()
    _quartoMembro = DuetoChord.shift()
    DuetoChord.unshift(_terceiroMembro)
    DuetoChord.unshift(_quartoMembro)
    DuetoChord.unshift(_terceiroMembro)
    DuetoChord.unshift(_quartoMembro)
    DuetoChord.unshift(_terceiroMembro)
    DuetoChord.unshift(_quartoMembro)
    DuetoChord.unshift(_terceiroMembro)
    DuetoChord.unshift(_primeiroMembro)
    return DuetoChord
}
function AlternadoBaixo(chord) {
    const BaixoChord = [...chord]
    _primeiroMembro = BaixoChord.shift()
    _segundoMembro = BaixoChord.shift()
    _terceiroMembro = BaixoChord.shift()
    _quartoMembro = BaixoChord.shift()

    BaixoChord.unshift(_terceiroMembro)
    BaixoChord.unshift(_quartoMembro)
    BaixoChord.unshift(_terceiroMembro)
    BaixoChord.unshift(_quartoMembro)
    BaixoChord.unshift(_terceiroMembro)
    BaixoChord.unshift(_primeiroMembro)
    return BaixoChord
}
function Invert(chord) {
    const invertedChord = [...chord]
    invertedChord.shift()
    _segundoMembro = invertedChord.shift()
    console.log(_segundoMembro)
    invertedChord.unshift(_segundoMembro)
    invertedChord.push(_segundoMembro + 12)
    console.log(invertedChord)
    return invertedChord
}
function Invert2(chord) {
    const invertedChord = [...chord]

    _primeiroMembro = invertedChord.shift()
    _segundoMembro = invertedChord.shift()
    _terceiroMembro = invertedChord.shift()
    _quartoMembro = invertedChord.shift()

    invertedChord.push(_segundoMembro)
    invertedChord.push(_terceiroMembro)
    invertedChord.push(_quartoMembro)
    invertedChord.push(_primeiroMembro + 12)
    return invertedChord
}
function DeInvert(chord) {
    const invertedChord = [...chord]
    invertedChord.pop()
    _terceiroMembro = invertedChord.pop()
    invertedChord.push(_terceiroMembro)
    invertedChord.unshift(_terceiroMembro - 12)

    return invertedChord
}
function UmTres(chord) {
    const UmDoisChord = [...chord]
    _primeiroMembro = UmDoisChord.shift()
    _segundoMembro = UmDoisChord.shift()
    _terceiroMembro = UmDoisChord.shift()
    _quartoMembro = UmDoisChord.shift()

    UmDoisChord.unshift(_primeiroMembro)
    UmDoisChord.push(100)
    UmDoisChord.push(_terceiroMembro)
    UmDoisChord.push(100)

    console.log(UmDoisChord)
    return UmDoisChord

}
function BPMtoMS(bpm) {
    const beatsPerSecond = bpm / 60;
    const millisecondsPerBeat = 1000 / beatsPerSecond;
    return millisecondsPerBeat;
}
var Chord = {
    C: [3, 7, 10, 15]
}
function playArpejo() {
    try {
        const chord = document.getElementById('chordInput').value;
        chordKeys = []
        _chordsEscolhidos = chord.split(' ')
        console.log(_chordsEscolhidos)
        for (let i = 0; i < _chordsEscolhidos.length; i++) {
            let tem7 = false;
            switch (_chordsEscolhidos[i]) {
                case 'C':
                    chordKeys.push(...Chord.C)
                    break;
                case 'C7':
                    chordKeys.push(3, 7, 10, 13)
                    break;
                case 'Cm':
                case 'c':
                    chordKeys.push(3, 6, 10, 15)
                    break;
                case 'Cm7':
                    chordKeys.push(3, 6, 10, 13)
                    break;
                case 'Cdim':
                case 'C°':
                    chordKeys.push(3, 6, 9, 15)
                    break;
                case 'CMaj7':
                    chordKeys.push(3, 7, 10, 14)
                    break;
                case 'C#':
                case 'Db':
                    chordKeys.push(4, 8, 11, 16)
                    break;
                case 'C#7':
                case 'Db7':
                    chordKeys.push(4, 8, 11, 14)
                    break;
                case 'C#m':
                case 'c#':
                case 'Dbm':
                case 'db':
                    chordKeys.push(4, 7, 11, 16)
                    break;
                case 'C#m7':
                case 'Dbm7':
                    chordKeys.push(4, 7, 11, 14)
                    break;
                case 'C#dim':
                case 'C#°':
                case 'Dbdim':
                case 'Db°':
                    chordKeys.push(4, 7, 10, 16)
                    break;
                case 'C#Maj7':
                case 'DbMaj7':
                    chordKeys.push(4, 8, 11, 15)
                    break;
                case 'D':
                    chordKeys.push(5, 9, 12, 17)
                    break;
                case 'D7':
                    chordKeys.push(5, 9, 12, 15)
                    break;
                case 'Dm':
                case 'd':
                    chordKeys.push(5, 8, 12, 17)
                    break;
                case 'Dm7':
                    chordKeys.push(5, 8, 12, 15)
                    break;
                case 'Ddim':
                    chordKeys.push(5, 8, 11, 17)
                    break;
                case 'DMaj7':
                    chordKeys.push(5, 9, 12, 16)
                    break;
                case 'Eb':
                case 'D#':
                    chordKeys.push(6, 10, 13, 18)
                    break;
                case 'Eb7':
                case 'D#7':
                    chordKeys.push(6, 10, 13, 16)
                    break;
                case 'Ebm':
                case 'eb':
                case 'D#m':
                case 'd#':
                    chordKeys.push(6, 9, 13, 18)
                    break;
                case 'Ebm7':
                case 'D#m7':
                    chordKeys.push(6, 9, 13, 16)
                    break;
                case 'Ebdim':
                case 'Eb°':
                case 'D#dim':
                case 'D#°':
                    chordKeys.push(6, 9, 12, 18)
                    break;
                case 'EbMaj7':
                case 'D#Maj7':
                    chordKeys.push(6, 10, 13, 17)
                    break;
                case 'E':
                    chordKeys.push(7, 11, 14, 19)
                    break;
                case 'E7':
                    chordKeys.push(7, 11, 14, 17)
                    break;
                case 'Em':
                case 'e':
                    chordKeys.push(7, 10, 14, 19)
                    break;
                case 'Em7':
                    chordKeys.push(7, 10, 14, 17)
                    break;
                case 'Edim':
                case 'E°':
                    chordKeys.push(7, 10, 13, 19)
                    break;
                case 'EMaj7':
                    chordKeys.push(7, 11, 14, 18)
                    break;
                case 'F':
                    chordKeys.push(8, 12, 15, 20)
                    break;
                case 'F7':
                    chordKeys.push(8, 12, 15, 18)
                    break;
                case 'Fm':
                case 'f':
                    chordKeys.push(8, 11, 15, 20)
                    break;
                case 'Fm7':
                    chordKeys.push(8, 11, 15, 18)
                    break;
                case 'Fdim':
                case 'F°':
                    chordKeys.push(8, 11, 14, 20)
                    break;
                case 'FMaj7':
                    chordKeys.push(8, 12, 15, 19)
                    break;
                case 'F#':
                case 'Gb':
                    chordKeys.push(9, 13, 16, 21)
                    break;
                case 'F#7':
                case 'Gb7':
                    chordKeys.push(9, 13, 16, 19)
                    break;
                case 'F#m':
                case 'f#':
                case 'Gbm':
                case 'gb':
                    chordKeys.push(9, 12, 16, 21)
                    break;
                case 'F#m7':
                case 'Gbm7':
                    chordKeys.push(9, 12, 16, 19)
                    break;
                case 'F#dim':
                case 'F#°':
                case 'Gbdim':
                case 'Gb°':
                    chordKeys.push(9, 12, 15, 21)
                    break;
                case 'F#Maj7':
                case 'GbMaj7':
                    chordKeys.push(9, 13, 16, 20)
                    break;
                case 'G':
                    chordKeys.push(10, 14, 17, 22)
                    break;
                case 'G7':
                    chordKeys.push(10, 14, 17, 20)
                    break;
                case 'Gm':
                case 'g':
                    chordKeys.push(10, 13, 17, 22)
                    break;
                case 'Gm7':
                    chordKeys.push(10, 13, 17, 20)
                    break;
                case 'Gdim':
                case 'G°':
                    chordKeys.push(10, 13, 16, 22)
                    break;
                case 'GMaj7':
                    chordKeys.push(10, 14, 17, 21)
                    break;
                case 'Ab':
                case 'G#':
                    chordKeys.push(11, 15, 18, 23)
                    break;
                case 'Ab7':
                case 'G#7':
                    chordKeys.push(11, 15, 18, 21)
                    break;
                case 'Abm':
                case 'ab':
                case 'G#m':
                case 'g#':
                    chordKeys.push(11, 14, 18, 23)
                    break;
                case 'Abm7':
                case 'G#m7':
                    chordKeys.push(11, 14, 18, 21)
                    break;
                case 'Abdim':
                case 'Ab°':
                case 'G#dim':
                case 'G#°':
                    chordKeys.push(11, 14, 17, 23)
                    break;
                case 'AbMaj7':
                case 'G#Maj7':
                    chordKeys.push(11, 15, 18, 22)
                    break;
                case 'A':
                    chordKeys.push(0, 4, 7, 12)
                    break;
                case 'A7':
                    chordKeys.push(0, 4, 7, 10)
                    break;
                case 'Am':
                case 'a':
                    chordKeys.push(0, 3, 7, 12)
                    break;
                case 'Am7':
                    chordKeys.push(0, 3, 7, 10)
                    break;
                case 'Adim':
                case 'A°':
                    chordKeys.push(0, 3, 6, 12)
                    break;
                case 'AMaj7':
                    chordKeys.push(0, 4, 7, 11)
                    break;
                case 'Bb':
                case 'A#':
                    chordKeys.push(1, 5, 8, 13)
                    break;
                case 'Bb7':
                case 'A#7':
                    chordKeys.push(1, 5, 8, 11)
                    break;
                case 'Bbm':
                case 'bb':
                case 'A#m':
                case 'a#':
                    chordKeys.push(1, 4, 8, 13)
                    break;
                case 'Bbm7':
                case 'A#m7':
                    chordKeys.push(1, 4, 8, 11)
                    break;
                case 'Bbdim':
                case 'Bb°':
                case 'A#dim':
                case 'A#°':
                    chordKeys.push(1, 4, 7, 13)
                    break;
                case 'BbMaj7':
                case 'A#Maj7':
                    chordKeys.push(1, 5, 8, 12)
                    break;
                case 'B':
                    chordKeys.push(2, 6, 9, 14)
                    break;
                case 'B7':
                    chordKeys.push(2, 6, 9, 12)
                    break;
                case 'Bm':
                case 'b':
                    chordKeys.push(2, 5, 9, 14)
                    break;
                case 'Bm7':
                    chordKeys.push(2, 5, 9, 12)
                    break;
                case 'Bdim':
                case 'B°':
                    chordKeys.push(2, 5, 8, 14)
                    break;
                case 'BMaj7':
                    chordKeys.push(2, 6, 9, 13)
                    break;
                case 'i':
                    dividir = _chordsEscolhidos[i - 1].split('');

                    for (let j = 0; j < dividir.length; j++) {
                        if (dividir[j] === '7') {
                            tem7 = true;
                            break;
                        }
                    }
                    if (tem7) {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert2(removidos);
                        chordKeys.push(..._paraAdicionar);
                    } else {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert(removidos);
                        chordKeys.push(..._paraAdicionar);
                    }

                    break;
                case 'ii':
                    dividir = _chordsEscolhidos[i - 1].split('');

                    for (let j = 0; j < dividir.length; j++) {
                        if (dividir[j] === '7') {
                            tem7 = true;
                            break;
                        }
                    }
                    if (tem7) {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert2(Invert2(removidos));
                        chordKeys.push(..._paraAdicionar);
                    } else {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert(Invert(removidos));
                        chordKeys.push(..._paraAdicionar);
                    }

                    break;
                case 'iii':
                    dividir = _chordsEscolhidos[i - 1].split('');

                    for (let j = 0; j < dividir.length; j++) {
                        if (dividir[j] === '7') {
                            tem7 = true;
                            break;
                        }
                    }
                    if (tem7) {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert2(Invert2(Invert2(removidos)));
                        chordKeys.push(..._paraAdicionar);
                    } else {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert(Invert(Invert(removidos)));
                        chordKeys.push(..._paraAdicionar);
                    }

                    break;
                case 'iiii':
                    dividir = _chordsEscolhidos[i - 1].split('');

                    for (let j = 0; j < dividir.length; j++) {
                        if (dividir[j] === '7') {
                            tem7 = true;
                            break;
                        }
                    }
                    if (tem7) {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert2(Invert2(Invert2(Invert2(removidos))));
                        chordKeys.push(..._paraAdicionar);
                    } else {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert(Invert(Invert(Invert(removidos))));
                        chordKeys.push(..._paraAdicionar);
                    }

                    break;
                case 'iiiii':
                    dividir = _chordsEscolhidos[i - 1].split('');

                    for (let j = 0; j < dividir.length; j++) {
                        if (dividir[j] === '7') {
                            tem7 = true;
                            break;
                        }
                    }
                    if (tem7) {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert2(Invert2(Invert2(Invert2(Invert2(removidos)))));
                        chordKeys.push(..._paraAdicionar);
                    } else {
                        removidos = chordKeys.splice(-4);
                        _paraAdicionar = Invert(Invert(Invert(Invert(Invert(removidos)))));
                        chordKeys.push(..._paraAdicionar);
                    }

                    break;
                case 'de':
                    removidos = chordKeys.splice(-4)
                    _paraAdicionar = DeInvert(removidos)
                    chordKeys.push(..._paraAdicionar)
                    break;
                case 'r':
                    removidos = chordKeys.splice(-4)
                    _paraAdicionar = removidos.reverse()
                    chordKeys.push(..._paraAdicionar)
                    break;
                case 's':
                    removidos = chordKeys.splice(-4)
                    _paraAdicionar = Stride(removidos)
                    chordKeys.push(..._paraAdicionar)
                    break;
                case 'al':
                    removidos = chordKeys.splice(-4)
                    _paraAdicionar = Dueto(removidos)
                    chordKeys.push(..._paraAdicionar)
                    break;
                case 'al3':
                    removidos = chordKeys.splice(-4)
                    _paraAdicionar = AlternadoBaixo(removidos)
                    chordKeys.push(..._paraAdicionar)
                    break;
                case 'a4':
                    removidos = chordKeys.splice(-4)
                    _paraAdicionar = Quarteto(removidos)
                    chordKeys.push(..._paraAdicionar)
                    break;
                case 'a3':
                    removidos = chordKeys.splice(-4)
                    _paraAdicionar = Triade(removidos)
                    chordKeys.push(..._paraAdicionar)
                    break;
                case "1-3":
                    removidos = chordKeys.splice(-4)
                    _paraAdicionar = UmTres(removidos)
                    chordKeys.push(..._paraAdicionar)
                    break;
                case ' ':
                    alert("Empty Chord")
                    isArpejo = true;
                    break;
                case 'Brilha-Brilha':
                    _paraAdicionar = [27, 27, 34, 34, 36, 36, 34, 100, 32, 32, 31, 31, 29, 29, 27, 100, 34, 34, 32, 32, 31, 31, 29, 100, 34, 34, 32, 32, 31, 31, 29, 100]
                    chordKeys.push(..._paraAdicionar)
                    break;
                default:
                    alert("Invalid Value")
                    isArpejo = true;
                    break;
            }
        }


    } catch {
        alert("An error has occurred")
    }

    if (isArpejo) {
        isArpejo = false;
        document.getElementById('chordInput').value = ''
        document.getElementById('arpejo').textContent = 'Ending'
        console.log(isArpejo)
    } else {
        isArpejo = true;
        console.log(isArpejo)
        document.getElementById('arpejo').textContent = 'Stop'
    }

    if (isArpejo) {
        const keysToPress = chordKeys; // Piano key numbers to press
        let interval = BPMtoMS(document.getElementById('tempoInput').value); // Interval in milliseconds (0.5 seconds)
        const loopDelay = 0; // Delay before starting the loop again (2 seconds)

        function pressKey(index) {
            if (index >= keysToPress.length) {
                return; // All keys pressed, exit
            }

            const keyNum = keysToPress[index];
            if (keyNum != 100) {
                pressPianoKey(keyNum);
            } // Press the key
            setTimeout(() => {
                releasePianoKey(keyNum); // Release the key after the interval
                pressKey(index + 1); // Press the next key recursively
            }, interval);
        }

        function playLoop() {
            pressKey(0); // Start pressing the keys
            setTimeout(() => {
                if (isArpejo) {
                    interval = BPMtoMS(document.getElementById('tempoInput').value) //Beta?
                    playLoop(); // Restart the loop after loopDelay
                } else {
                    pressPianoKey(keysToPress[0])
                    setTimeout(() => {
                        releasePianoKey(keysToPress[0])
                        document.getElementById('arpejo').textContent = 'Arpejo'
                    }, interval * 4)

                    return
                }

            }, loopDelay + (interval * keysToPress.length + (5 * keysToPress.length))); // Gambiarra

        }
        playLoop(); // Start the loop
    } else {
        return
    }

}
//#endregion
function Interromper() {
    window.location.reload();
}


// タッチ対応判定
if (window.ontouchstart === null) {
    // タッチ対応：タッチイベントのリスナーをセット
    pianoWrap.addEventListener("touchstart", function () { handleTouchEvents(event) })
    pianoWrap.addEventListener("touchmove", function () { handleTouchEvents(event) })
    pianoWrap.addEventListener("touchend", function () { handleTouchEvents(event) })
    pianoWrap.addEventListener("touchcancel", function () { handleTouchEvents(event) })
} else {
    // タッチ非対応：マウスイベントのリスナーをセット
    pianoWrap.addEventListener("mousedown", function () { handleMouseEvents(event) })
    pianoWrap.addEventListener("mouseup", function () { handleMouseEvents(event) })
    window.addEventListener("mousemove", function () { handleMouseEvents(event) })
}

// 座標(x,y)に応じた鍵盤番号を取得
function getKeyNum(x, y) {
    // 黒鍵とタッチ箇所が重なるかチェック
    for (let j = 0; j < blackKeys.length; j++) {
        const KeyRect = blackKeys[j].getBoundingClientRect()
        if (x >= window.pageXOffset + KeyRect.left &&
            x <= window.pageXOffset + KeyRect.right &&
            y >= window.pageYOffset + KeyRect.top &&
            y <= window.pageYOffset + KeyRect.bottom) {
            // タッチした鍵盤番号をセット
            return Number(blackKeys[j].dataset.keyNum)
        }
    }
    // 白鍵とタッチ箇所が重なるかチェック
    for (let j = 0; j < whiteKeys.length; j++) {
        const KeyRect = whiteKeys[j].getBoundingClientRect()
        if (x >= window.pageXOffset + KeyRect.left &&
            x <= window.pageXOffset + KeyRect.right &&
            y >= window.pageYOffset + KeyRect.top &&
            y <= window.pageYOffset + KeyRect.bottom) {
            // タッチした鍵盤番号をセット
            return Number(whiteKeys[j].dataset.keyNum)
        }
    }
    // ピアノ外のタッチの場合
    return null
}

// タッチイベント発生時の処理
function handleTouchEvents(event) {
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
    }
    const BeforeKeyNumlist = JSON.parse(JSON.stringify(touchKeyNumlist))
    touchKeyNumlist.length = 0
    // 各接触ポイントから押下中の鍵盤番号リストを作成
    for (let i = 0; i < event.touches.length; i++) {
        const x = event.touches[i].pageX
        const y = event.touches[i].pageY
        let keyNum = getKeyNum(x, y)
        if (keyNum !== null) {
            if (!touchKeyNumlist.includes(keyNum)) {
                // リストに存在しなければ鍵盤番号をセット
                touchKeyNumlist.push(keyNum)
            }
        }
    }
    // 新リストのみに存在 => 鍵盤を押下した処理
    for (let i = 0; i < touchKeyNumlist.length; i++) {
        if (!BeforeKeyNumlist.includes(touchKeyNumlist[i])) {
            pressPianoKey(touchKeyNumlist[i])
        }
    }
    // 旧リストのみに存在 => 鍵盤をはなした処理
    for (let i = 0; i < BeforeKeyNumlist.length; i++) {
        if (!touchKeyNumlist.includes(BeforeKeyNumlist[i])) {
            releasePianoKey(BeforeKeyNumlist[i])
        }
    }
}

// マウスイベント発生時の処理
function handleMouseEvents(event) {
    // 左クリック以外は対象外
    if (event.which !== 1) { return }
    const x = event.pageX
    const y = event.pageY
    let keyNum
    switch (event.type) {
        case "mousedown":
            keyNum = getKeyNum(x, y)
            if (keyNum !== null) { pressPianoKey(keyNum) }
            clickedKeyNum = keyNum
            break
        case "mouseup":
            if (clickedKeyNum !== null) {
                keyNum = getKeyNum(x, y)
                if (keyNum !== null) { releasePianoKey(keyNum) }
                clickedKeyNum = null
            }
            break
        case "mousemove":
            keyNum = getKeyNum(x, y)
            if (keyNum !== null) {
                // マウスポインタ位置が直前の鍵盤以外の鍵盤上の場合
                if (keyNum !== clickedKeyNum) {
                    releasePianoKey(clickedKeyNum)
                    pressPianoKey(keyNum)
                    clickedKeyNum = keyNum
                }
            } else {
                // マウスポインタ位置が鍵盤外の場合
                releasePianoKey(clickedKeyNum)
                clickedKeyNum = null
            }
            break
    }
}

// PCkeydown時の処理
document.onkeydown = function (event) {
    // 鍵盤番号を取得
    const obj = keyMap.find((item) => item.pcKey === event.key || item.pcKey === event.code);
    if (typeof obj !== "undefined") {
        // keyMapに含まれるキーの場合は後続処理実行
        pressPianoKey(obj.pianoKey)
    }
}

// PCkeyup時の処理
document.onkeyup = function (event) {
    // 鍵盤番号を取得
    const obj = keyMap.find((item) => item.pcKey === event.key || item.pcKey === event.code);
    if (typeof obj !== "undefined") {
        // keyMapに含まれるキーの場合は後続処理実行
        releasePianoKey(obj.pianoKey)
    }
}

// ピアノ鍵盤を押下した時の処理
function pressPianoKey(keyNum) {
    if (!isKeyPressing[keyNum]) {
        // 鍵盤を離している場合のみ続行(長押しによる連打防止)
        isKeyPressing[keyNum] = true
        console.log(keyNum)
        document.querySelector(`[data-key-num="${keyNum}"]`).classList.add("pressing")
        soundPlay(keyNum)
    }
}

// ピアノ鍵盤をはなした時の処理
function releasePianoKey(keyNum) {
    if (isKeyPressing[keyNum]) {
        // 鍵盤を押している場合のみ続行
        isKeyPressing[keyNum] = false
        document.querySelector(`[data-key-num="${keyNum}"]`).classList.remove("pressing")
        soundStop(keyNum)
    }
}

// オーディオ再生
function soundPlay(soundNum) {
    clearInterval(intervalIds[soundNum])
    intervalIds[soundNum] = null
    pianoSounds[soundNum].volume = 1
    pianoSounds[soundNum].currentTime = 0
    pianoSounds[soundNum].play()
}

// オーディオ停止(フェードアウト)
function soundStop(soundNum) {
    // 20msごとに音量を下げる
    intervalIds[soundNum] = setInterval(function () {
        if (pianoSounds[soundNum].volume <= 0.05) {
            // 音量が0.05以下の場合、Interval停止・オーディオ停止
            clearInterval(intervalIds[soundNum])
            intervalIds[soundNum] = null
            pianoSounds[soundNum].volume = 0
            pianoSounds[soundNum].pause()
            pianoSounds[soundNum].currentTime = 0
        } else {
            // 音量が0.05より大きい場合、音量を0.05下げる
            pianoSounds[soundNum].volume -= (intensidadeSus / 100)
        }
    }, 20)
}


//Detalhes
function atualizarValor(num) {
    intensidadeSus = num;
}
function atualizarEscala(num) {
    const spans = document.querySelectorAll("span.key-label");
    spans.forEach(span => {
        span.style.visibility = 'visible';
    });
    switch (num) {
        case 0: // None
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "white";
                document.getElementById("B0").style.backgroundColor = "white";
                document.getElementById("C" + i).style.backgroundColor = "white";
                document.getElementById("D" + i).style.backgroundColor = "white";
                document.getElementById("E" + i).style.backgroundColor = "white";
                document.getElementById("F" + i).style.backgroundColor = "white";
                document.getElementById("G" + i).style.backgroundColor = "white";
                document.getElementById("A" + i).style.backgroundColor = "white";
                document.getElementById("B" + i).style.backgroundColor = "white";
                document.getElementById("C6").style.backgroundColor = "white";

                document.getElementById("C#" + i).style.background = "black";
                document.getElementById("Eb" + i).style.background = "black";
                document.getElementById("F#" + i).style.background = "black";
                document.getElementById("Ab" + i).style.background = "black";
                document.getElementById("Bb" + i).style.background = "black";
                document.getElementById("Bb0").style.background = "black";
            }
            break;
        case 1: // C Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "yellow";
                document.getElementById("B0").style.backgroundColor = "yellow";
                document.getElementById("C" + i).style.backgroundColor = "yellow";
                document.getElementById("D" + i).style.backgroundColor = "yellow";
                document.getElementById("E" + i).style.backgroundColor = "yellow";
                document.getElementById("F" + i).style.backgroundColor = "yellow";
                document.getElementById("G" + i).style.backgroundColor = "yellow";
                document.getElementById("A" + i).style.backgroundColor = "yellow";
                document.getElementById("B" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "yellow";

                document.getElementById("C#" + i).style.background = "black";
                document.getElementById("Eb" + i).style.background = "black";
                document.getElementById("F#" + i).style.background = "black";
                document.getElementById("Ab" + i).style.background = "black";
                document.getElementById("Bb" + i).style.background = "black";
                document.getElementById("Bb0").style.background = "black";
            }
            break;
        case 2: // C# Major
            for (let i = 1; i <= 5; i++) {

                document.getElementById("Bb0").style.backgroundColor = "yellow";
                document.getElementById("C" + i).style.backgroundColor = "yellow";
                document.getElementById("C#" + i).style.backgroundColor = "yellow";
                document.getElementById("Eb" + i).style.backgroundColor = "yellow";
                document.getElementById("F" + i).style.backgroundColor = "yellow";
                document.getElementById("F#" + i).style.backgroundColor = "yellow";
                document.getElementById("Ab" + i).style.backgroundColor = "yellow";
                document.getElementById("Bb" + i).style.backgroundColor = "yellow";

                document.getElementById("C6").style.backgroundColor = "yellow";
                document.getElementById("D" + i).style.background = "white";
                document.getElementById("E" + i).style.background = "white";
                document.getElementById("A" + i).style.background = "white";
                document.getElementById("B" + i).style.background = "white";
                document.getElementById("G" + i).style.background = "white";
                document.getElementById("B0").style.background = "white";
                document.getElementById("A0").style.backgroundColor = "white";
            }
            break;
        case 3: // D Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "yellow";
                document.getElementById("B0").style.backgroundColor = "yellow";
                document.getElementById("C#" + i).style.backgroundColor = "yellow";
                document.getElementById("D" + i).style.backgroundColor = "yellow";
                document.getElementById("E" + i).style.backgroundColor = "yellow";
                document.getElementById("F#" + i).style.backgroundColor = "yellow";
                document.getElementById("G" + i).style.backgroundColor = "yellow";
                document.getElementById("A" + i).style.backgroundColor = "yellow";
                document.getElementById("B" + i).style.backgroundColor = "yellow";

                document.getElementById("C6").style.backgroundColor = "white";
                document.getElementById("C" + i).style.background = "white";
                document.getElementById("Eb" + i).style.background = "black";
                document.getElementById("F" + i).style.background = "white";
                document.getElementById("Ab" + i).style.background = "black";
                document.getElementById("Bb" + i).style.background = "black";
                document.getElementById("Bb0").style.background = "black";
            }
            break;
        case 4: // Eb Major
            for (let i = 1; i <= 5; i++) {

                document.getElementById("Bb0").style.backgroundColor = "yellow";
                document.getElementById("C" + i).style.backgroundColor = "yellow";
                document.getElementById("D" + i).style.backgroundColor = "yellow";
                document.getElementById("Eb" + i).style.backgroundColor = "yellow";
                document.getElementById("F" + i).style.backgroundColor = "yellow";
                document.getElementById("G" + i).style.backgroundColor = "yellow";
                document.getElementById("Ab" + i).style.backgroundColor = "yellow";
                document.getElementById("Bb" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "yellow";

                document.getElementById("C#" + i).style.background = "black";
                document.getElementById("E" + i).style.background = "white";
                document.getElementById("F#" + i).style.background = "black";
                document.getElementById("A" + i).style.background = "white";
                document.getElementById("B" + i).style.background = "white";
                document.getElementById("B0").style.background = "white";
                document.getElementById("A0").style.backgroundColor = "white";
            }
            break;
        case 5: // E Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "yellow";
                document.getElementById("B0").style.backgroundColor = "yellow";
                document.getElementById("C#" + i).style.backgroundColor = "yellow";
                document.getElementById("Eb" + i).style.backgroundColor = "yellow";
                document.getElementById("E" + i).style.backgroundColor = "yellow";
                document.getElementById("F#" + i).style.backgroundColor = "yellow";
                document.getElementById("Ab" + i).style.backgroundColor = "yellow";
                document.getElementById("A" + i).style.backgroundColor = "yellow";
                document.getElementById("B" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "white";

                document.getElementById("C" + i).style.background = "white";
                document.getElementById("D" + i).style.background = "white";
                document.getElementById("F" + i).style.background = "white";
                document.getElementById("G" + i).style.background = "white";
                document.getElementById("Bb" + i).style.background = "black";
                document.getElementById("Bb0").style.background = "black";
            }
            break;
        case 6: // F Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "yellow";
                document.getElementById("Bb0").style.backgroundColor = "yellow";
                document.getElementById("C" + i).style.backgroundColor = "yellow";
                document.getElementById("D" + i).style.backgroundColor = "yellow";
                document.getElementById("E" + i).style.backgroundColor = "yellow";
                document.getElementById("F" + i).style.backgroundColor = "yellow";
                document.getElementById("G" + i).style.backgroundColor = "yellow";
                document.getElementById("A" + i).style.backgroundColor = "yellow";
                document.getElementById("Bb" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "yellow";

                document.getElementById("C#" + i).style.backgroundColor = "black";
                document.getElementById("Eb" + i).style.backgroundColor = "black";
                document.getElementById("F#" + i).style.backgroundColor = "black";
                document.getElementById("Ab" + i).style.backgroundColor = "black";
                document.getElementById("B" + i).style.backgroundColor = "white";
                document.getElementById("B0").style.backgroundColor = "white";

            }
            break;
        case 7: // F# Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "white";
                document.getElementById("B0").style.backgroundColor = "yellow";
                document.getElementById("C#" + i).style.backgroundColor = "yellow";
                document.getElementById("Eb" + i).style.backgroundColor = "yellow";
                document.getElementById("F" + i).style.backgroundColor = "yellow";
                document.getElementById("F#" + i).style.backgroundColor = "yellow";
                document.getElementById("Ab" + i).style.backgroundColor = "yellow";
                document.getElementById("Bb" + i).style.backgroundColor = "yellow";
                document.getElementById("B" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "white";

                document.getElementById("C" + i).style.background = "white";
                document.getElementById("D" + i).style.background = "white";
                document.getElementById("E" + i).style.background = "white";
                document.getElementById("G" + i).style.background = "white";
                document.getElementById("A" + i).style.background = "white";
                document.getElementById("Bb0").style.background = "yellow";
            }
            break;
        case 8: // G Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "yellow";
                document.getElementById("B0").style.backgroundColor = "yellow";
                document.getElementById("C" + i).style.backgroundColor = "yellow";
                document.getElementById("D" + i).style.backgroundColor = "yellow";
                document.getElementById("E" + i).style.backgroundColor = "yellow";
                document.getElementById("F#" + i).style.backgroundColor = "yellow";
                document.getElementById("G" + i).style.backgroundColor = "yellow";
                document.getElementById("A" + i).style.backgroundColor = "yellow";
                document.getElementById("B" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "yellow";

                document.getElementById("C#" + i).style.background = "black";
                document.getElementById("Eb" + i).style.background = "black";
                document.getElementById("F" + i).style.background = "white";
                document.getElementById("Ab" + i).style.background = "black";
                document.getElementById("Bb" + i).style.background = "black";
                document.getElementById("Bb0").style.background = "black";
            }
            break;
        case 9: // Ab Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "white";
                document.getElementById("B0").style.backgroundColor = "white";
                document.getElementById("C" + i).style.backgroundColor = "yellow";
                document.getElementById("C#" + i).style.backgroundColor = "yellow";
                document.getElementById("Eb" + i).style.backgroundColor = "yellow";
                document.getElementById("F" + i).style.backgroundColor = "yellow";
                document.getElementById("G" + i).style.backgroundColor = "yellow";
                document.getElementById("Ab" + i).style.backgroundColor = "yellow";
                document.getElementById("Bb" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "yellow";

                document.getElementById("D" + i).style.background = "white";
                document.getElementById("E" + i).style.background = "white";
                document.getElementById("F#" + i).style.background = "black";
                document.getElementById("A" + i).style.background = "white";
                document.getElementById("B" + i).style.background = "white";
                document.getElementById("Bb0").style.background = "yellow";
            }
            break;
        case 10: // A Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "yellow";
                document.getElementById("B0").style.backgroundColor = "yellow";
                document.getElementById("C#" + i).style.backgroundColor = "yellow";
                document.getElementById("D" + i).style.backgroundColor = "yellow";
                document.getElementById("E" + i).style.backgroundColor = "yellow";
                document.getElementById("F#" + i).style.backgroundColor = "yellow";
                document.getElementById("Ab" + i).style.backgroundColor = "yellow";
                document.getElementById("A" + i).style.backgroundColor = "yellow";
                document.getElementById("B" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "white";

                document.getElementById("C" + i).style.background = "white";
                document.getElementById("Eb" + i).style.background = "black";
                document.getElementById("F" + i).style.background = "white";
                document.getElementById("G" + i).style.background = "white";
                document.getElementById("Bb" + i).style.background = "black";
                document.getElementById("Bb0").style.background = "black";
            }
            break;
        case 11: // Bb Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "yellow";
                document.getElementById("B0").style.backgroundColor = "white";
                document.getElementById("C" + i).style.backgroundColor = "yellow";
                document.getElementById("D" + i).style.backgroundColor = "yellow";
                document.getElementById("Eb" + i).style.backgroundColor = "yellow";
                document.getElementById("F" + i).style.backgroundColor = "yellow";
                document.getElementById("G" + i).style.backgroundColor = "yellow";
                document.getElementById("A" + i).style.backgroundColor = "yellow";
                document.getElementById("Bb" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "yellow";

                document.getElementById("C#" + i).style.background = "black";
                document.getElementById("E" + i).style.background = "white";
                document.getElementById("F#" + i).style.background = "black";
                document.getElementById("Ab" + i).style.background = "black";
                document.getElementById("B" + i).style.background = "white";
                document.getElementById("Bb0").style.background = "yellow";
            }
            break;
        case 12: // B Major
            for (let i = 1; i <= 5; i++) {
                document.getElementById("A0").style.backgroundColor = "white";
                document.getElementById("B0").style.backgroundColor = "yellow";
                document.getElementById("C#" + i).style.backgroundColor = "yellow";
                document.getElementById("Eb" + i).style.backgroundColor = "yellow";
                document.getElementById("E" + i).style.backgroundColor = "yellow";
                document.getElementById("F#" + i).style.backgroundColor = "yellow";
                document.getElementById("Ab" + i).style.backgroundColor = "yellow";
                document.getElementById("Bb" + i).style.backgroundColor = "yellow";
                document.getElementById("B" + i).style.backgroundColor = "yellow";
                document.getElementById("C6").style.backgroundColor = "white";

                document.getElementById("C" + i).style.background = "white";
                document.getElementById("D" + i).style.background = "white";
                document.getElementById("F" + i).style.background = "white";
                document.getElementById("G" + i).style.background = "white";
                document.getElementById("A" + i).style.background = "white";
                document.getElementById("Bb0").style.background = "yellow";
            }
            break;
    }
}


