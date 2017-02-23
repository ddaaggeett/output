import { exec }  from 'child_process'

export default function runAPI(stamp,blooprint,mode,color) {

    exec('java -jar ./api/*.jar '+stamp+' '+blooprint+' '+mode+' '+color, function (error, stdout, stderr){
        console.log('\nBlooprint-API Output:\n' + stdout);
        if(error !== null){
            console.log("\nBlooprint-API Error:\n"+error);
        }
    })
}
