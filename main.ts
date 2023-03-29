/**
 * 
 */
//% block="BitJens: Common"
//% color=#cccc00 icon="\uf0c3" 
namespace bitjens {

    export enum BeepCode {
        //% enumval=0 block=Slut
        End = 0,
        //% enumval=1 block=Start
        Begin = 1,
        //% enumval=2 block=Afvis
        Reject = 2,
        //% enumval=3 block=Accepter
        Accept = 3,
    }

    //% block="BitJens: Afspil bip-kode $code"
    //% code.defl=bitjens.BeepCode.Begin
    export function beepcode(code: BeepCode) {
        switch (code) {
            case BeepCode.End:
                music.playTone(1500, 90)
                basic.pause(50)
                music.playTone(1200, 90)
                basic.pause(50)
                music.playTone(1000, 400)
                break;
            case BeepCode.Begin:
                music.playTone(1000, 90)
                basic.pause(50)
                music.playTone(1000, 90)
                basic.pause(50)
                music.playTone(1500, 400)
                break;
            case BeepCode.Reject:
                music.playTone(1500, 200)
                basic.pause(50)
                music.playTone(1000, 90)
                basic.pause(50)
                music.playTone(1000, 90)
                break;
            case BeepCode.Accept:
                music.playTone(1000, 200)
                basic.pause(50)
                music.playTone(1500, 90)
                basic.pause(50)
                music.playTone(1500, 90)
                break;
        }
    }

}
