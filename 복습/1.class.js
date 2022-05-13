        
//🌳getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행됩니다.
//🌳setter 메서드는 obj.propNAme = value으로 프로퍼티에 값을 할당하려 할 때 실행됩니다
class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name + '님';
    }
    
    set name(value) {
        if(value.length < 3) {
            console.log('이름이 너무 짧습니다');
        }
        this._name = value;
    }

    sayHi = () => {
        console.log(`반갑습니다. ${this.name}입니다.`)
    }
}

let user = new User('홍길동',30);
user.sayHi();

class Dog{
    constructor(family, name, age) {
        this.family = family;
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }
    
    set name(vlaue) {
        if(value == "") {
            console.log('빈값은 안됩니다')
            return;
        }
        this._name = value;
    }

    /*
    getName = () => {
        return this.name;
    }

    setName = (name) => {
        this.name = name;
        return this.name;
    }*/

    sayHi = ()=> {
        console.log(`${this.family}인 ${this.name}입니다.`)
    }
}
