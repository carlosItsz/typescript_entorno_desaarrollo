// Ejemplo tomado de la web principal de typescript https://typescriptlang.org

class HelloWorld
{
    msg: string;
    constructor(message: string)
    {
        this.msg = message;
    }
    getInfo()
    {
        return this.msg;
    }
}

var hw:HelloWorld = new HelloWorld('Hola Mundo!');
console.log(hw.getInfo());