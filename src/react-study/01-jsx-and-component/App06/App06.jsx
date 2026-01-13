import React from 'react'
import MenuList from './menuList'

export default function App06() {
    const menus = {
        adults : ["맥주", "와인", "위스키"],
        child : ["우유", "주스", "사이다"]
    }
    const user = {
        name : "홍길동",
        age : 25,
    }
    let title;
    let menuKey;
    if (user.age > 19) {
        title = "어른용 메뉴"
        menuKey = "adults"
    } else{
        title = "어린이 메뉴"
        menuKey = "child"
    }
  return (
    <div>
        <h1>연습문제</h1>
        {/* MenuList에 user의 age를 고려하여 props를 전달하는 코드를 작성하시오 */}
        {/* <MenuList 
            menus = {user.age >= 19 ? menus.adults : menus.child}
        /> */}
        <MenuList title={title} menus={menus[menuKey]} />
    </div>
  )
}
