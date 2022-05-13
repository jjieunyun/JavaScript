//🍎클래스의 상속
//🌳부모클래스
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

class Dog{
    constructor(family, name, age) {
        this.family = family;
        this.name = name;
        this.age = age;
    }

    /*get name() {
        return this._name;
    }
    
    set name(vlaue) {
        if(value == "") {
            console.log('빈값은 안됩니다')
            return;
        }
        this._name = value;
    }
    */
    
    getName = () => {
        return this.name;
    }

    setName = (name) => {
        this.name = name;
        return this.name;
    }

    sayHi = ()=> {
        console.log(`${this.family}인 ${this.name}입니다.`)
    }
}


class Animal{
    constructor(name,speed){
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}은 ${this.speed}로 달립니다`);
    }

    stop() {
        this.speed=0;
        console.log(`${this.name}의 속도는 0입니다.`)
    }
}

//🌳extends를 이용해서 상속받는 자식 클래스

class Tiger extends Animal {
    constructor(name, tall) {
        //부모에게서 받아온 속성값은 super을 이용해서 생성
        super(name);
        //자식클래스에서만 생성되는 constructor은 this를 이용함
        this.tall = tall;
    }
    hide() {
        console.log(`${this.name} 숨었습니다.`)
    }
    //🌳오버라이딩
    stop(sec) {
        //super.stop();
        console.log('-----오버라이딩-----')
        this.hide()
        console.log(`${sec}초 만에 멈추었습니다.`)
    }

}

//🌳자식클래스로 객체생성
let tiger = new Tiger('호돌')

tiger.run(30)
tiger.stop(10)
tiger.hide()

console.log('------------')

class Student extends User {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }

    study() {
        console.log(`${this.major}를 전공합니다`);

    }

    sayHi() {
        console.log(`${this.major}를 공부하는 ${this.name}입니다.`)
    }
}

const student = new Student('허꾸꾸','20','중국어')
student.study('중국어')
student.sayHi()

class HouseDog extends Dog{
    constructor(family, name, age, address){
        super(family,name,age);
        this.address = address;
    }
    intro() {
        console.log(`${this.address}에 살고있습니다.`)
    }
}

const mydog1 = new HouseDog('베들링턴테리어','꾸꾸',1,'해운대');
mydog1.intro();