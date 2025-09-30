export function disableConsoleLog(){
    if (process.env.NODE_ENV === 'production'){
        console.log = function() {};
    }
}