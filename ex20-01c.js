
        /* 동적으로 객체 속성 추가 */
        const obj = {};
        obj.a = 1;
        obj.b = 2;
        obj.e = "실수";
        obj["c"] = function() {
            return this.b; // 다른데서 이름이 겹칠때 this를 쓰면 확실히 해줄 수 있음
                            // 그치만 반대로 다른 것을 지칭할 수 있기 때문에 조심해서 사용할것
        };
        obj.d = function(){
            console.log(this.a) // 이렇게 하면 위에 있는 함수 속 a가 선택돼서 출력됨.
        }

        /* 객체의 속성과 메소드 호출 */
        console.log(obj);
        console.log(obj.c());
        obj.d();

        /* 삭제 */
        delete obj.e; // obj.e가 사라짐
        console.log(obj); // e가 빠진 값이 출력됨

        /* this 확인 */
        function test() {
            console.log(this.document);
        }
        test();

        function test2(){
            return this;
        }
        console.log(test2());
   