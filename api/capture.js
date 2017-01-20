import { execSync } from 'child_process'

var sizeAfter = ''
var sizeBefore = ''

export default function capture(tag) {
    checkBefore()
    shoot()
    checkAfter()
    rename(tag)
    pullImage(tag)
    clearOut()
}

function rename(tag) {
    console.log('renaming image to ',tag)
    execSync('adb shell mv ./sdcard/dcim/camera/* ./sdcard/dcim/camera/'+tag+'.jpg')
}

function pullImage(tag) {
    console.log('pulling image...')
    execSync('adb pull ./sdcard/dcim/camera/'+tag+'.jpg ./api/sketches')
}

function clearOut() {
    console.log('clearing out camera hdd...')
    execSync('adb shell rm -rf ./sdcard/dcim/camera/*')
}

function checkBefore() {
    sizeBefore = execSync('adb shell du ./sdcard/dcim/camera/').toString().trim()
    console.log('sizeBefore = ',sizeBefore)
}

function checkAfter() {
    console.log('getting sizeAfter...')
    var flag = true
    while ( flag ) {
        sizeAfter = execSync('adb shell du ./sdcard/dcim/camera/').toString().trim()
        console.log('checking again')
        if ( sizeBefore !== sizeAfter ) {
            console.log('sizeAfter = ',sizeAfter)
            console.log("they're different!!!")
            flag = false
        }
    }
}

function shoot() {
    console.log('shooting')
    execSync('adb shell input keyevent 66')
}
