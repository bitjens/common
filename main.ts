/**
 * 
 */
//% block="BitJens"
//% color=#cccc00 icon="\uf0c3" 
namespace bitjens {

    enum _notes {
        B5 = 988,
        C6 = 1047,
        CSharp6 = 1108,
        D6 = 1175,
        DSharp6 = 1244,
        E6 = 1319,
        F6 = 1397,
        FSharp6 = 1480,
    }
    let _beepnotes = [_notes.C6, _notes.D6, _notes.F6]

    export enum BeepCode {
        //% enumval=0 block=Start
        Begin = 0,
        //% enumval=1 block=Slut
        End = 1,
        //% enumval=2 block=Accepter
        Accept = 2,
        //% enumval=3 block=Afvis
        Reject = 3,
    }

    //% block="BitJens: Afspil bip-kode $code"
    //% group="Generelt"
    //% code.defl=bitjens.BeepCode.Begin
    export function beepcode(code: BeepCode) {
        switch (code) {
            case BeepCode.Begin:
                music.playTone(_beepnotes[0], 90)
                basic.pause(50)
                music.playTone(_beepnotes[1], 90)
                basic.pause(50)
                music.playTone(_beepnotes[2], 400)
                break;
            case BeepCode.End:
                music.playTone(_beepnotes[2], 90)
                basic.pause(50)
                music.playTone(_beepnotes[1], 90)
                basic.pause(50)
                music.playTone(_beepnotes[0], 400)
                break;
            case BeepCode.Accept:
                music.playTone(_beepnotes[0], 200)
                basic.pause(50)
                music.playTone(_beepnotes[2], 90)
                basic.pause(50)
                music.playTone(_beepnotes[2], 90)
                break;
            case BeepCode.Reject:
                music.playTone(_beepnotes[2], 200)
                basic.pause(50)
                music.playTone(_beepnotes[0], 90)
                basic.pause(50)
                music.playTone(_beepnotes[0], 90)
                break;
        }
    }

}
