/* 객체 다루기 */
const user = {name:"홍길동",age:10}
const update = {age:20}

// 객체의 키로 값으 링ㄹㄱ는 법
console.log(user.name)
console.log(user['name'])

// 객체를 수정하는 법
user.gender = "male"
user['address'] = "부산"

// 수정하는 법 Update
user.age = 17
user['name'] = '슈퍼맨'

// 삭제하는 법 Delete
delete user['gender']

//출력하기
console.log(user)

// 객체 // Tip
// const test = {test} // {test:test}
const updated = {user:user, age:20} // 외워라!!
console.log(updated)