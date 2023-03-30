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

    
    let _beepcode_notes = [_notes.C6, _notes.DSharp6, _notes.FSharp6]
    let _beepcode_lengths = [90, 200, 400]
    let _beepcode_pause = 50

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
                music.playTone(_beepcode_notes[0], _beepcode_lengths[0])
                basic.pause(_beepcode_pause)
                music.playTone(_beepcode_notes[1], _beepcode_lengths[0])
                basic.pause(_beepcode_pause)
                music.playTone(_beepcode_notes[2], _beepcode_lengths[2])
                break;
            case BeepCode.End:
                music.playTone(_beepcode_notes[2], _beepcode_lengths[0])
                basic.pause(_beepcode_pause)
                music.playTone(_beepcode_notes[1], _beepcode_lengths[0])
                basic.pause(_beepcode_pause)
                music.playTone(_beepcode_notes[0], _beepcode_lengths[2])
                break;
            case BeepCode.Accept:
                music.playTone(_beepcode_notes[0], _beepcode_lengths[1])
                basic.pause(_beepcode_pause)
                music.playTone(_beepcode_notes[2], _beepcode_lengths[0])
                basic.pause(_beepcode_pause)
                music.playTone(_beepcode_notes[2], _beepcode_lengths[0])
                break;
            case BeepCode.Reject:
                music.playTone(_beepcode_notes[2], _beepcode_lengths[1])
                basic.pause(_beepcode_pause)
                music.playTone(_beepcode_notes[0], _beepcode_lengths[0])
                basic.pause(_beepcode_pause)
                music.playTone(_beepcode_notes[0], _beepcode_lengths[0])
                break;
        }
    }

}
