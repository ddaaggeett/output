import jsonfile from 'jsonfile'
export default function saveUnitClicks(clicksObject) {
    var file = './api/calibration/unitClicks.json'
    jsonfile.writeFile(file, clicksObject, function (err) {
        if(err !== null) console.error('ERROR: saveUnitClicks():\n',err)
    })
}
