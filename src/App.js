import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '최진영',
    'birthday': '980903',
    'gender': '여자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '921205',
    'gender': '남자',
    'job': '디자이너'
  }
]

class App extends Component { /* Component : 웹 문서에 그려지게 되는 최소 단위 */
  render() {
    return (
      /* App 컴포넌트 안에 Customer 컴포넌트가 포함됨 */
      <div>
        {
          customers.map(c => {  /* map 함수를 이용하여 간결하게 함, customers는 배열이기 때문에 map을 사용함 , 배열의 원소에 각각 접근함 원소를 어떻게 처리할지를 명시함 */
            /* map을 이용해서 다수의 정보를 출력할 때는 key라는 이름의 props를 사용해야함!!! 아니면 콘솔 창에 오류가 나타남 */
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
        <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        /> 
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        />
      </div>
    );
  }
}

export default App;
