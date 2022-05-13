const vehicles = ['mustang','f-150','expendition'];


/*🍎구조화 
🌳사용할 변수들의 이름을 모아서 배열 기호안에 나열한 후 다른 배열의 요소들을 순서에 맞게 할당받는다.
🌳요소값이 필요하지 않은 경우는 빈칸으로 두고 작성한다.
*/
const[car,,suv] = vehicles

console.log(car);
console.log(suv)

const fruits = ['사과','바나나','오렌지'];
const [apple,,orange] = fruits;

console.log('------------구조화실습--------------')
console.log(apple);
console.log(orange);

console.log('베열메서드'
)