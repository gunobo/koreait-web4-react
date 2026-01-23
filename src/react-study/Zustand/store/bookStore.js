import { create } from "zustand";

export const useCurrentBook = create((set) => {
  return {
    book: {
      title: "",
      author: "",
      price: 0
    },
    // book을 교체할 수 있도록
    // setter를 이용하여 함수를 만들어 주세요
    // zustand의 set또한 useState처럼 함수형 업데이트ok
    // -> prev값을 기억한다!
    setNewBook: (newBook) => set({book: newBook}),
    setNewBook2: (newBook) => set((prev) => {
      return {
        ...prev,
        book: newBook
      }
    })
    // set을써서 전역상태인 book의 필드 
    // 일부만 업데이트 가능할까?
  }
})

export const useBookList = create((set) => {
  return {
    // R
    books: [{
      id: 1,
      title: "자바의정석",
      author: "남궁성",
      price: "30000"
    }],

    // C - add
    addBook: (newBook) => set((prev) => ({
      books: [...prev.books, { ...newBook, id: Date.now() }]
    })),

    // U - update
    updateBook: (id, newPrice) => set((prev) => ({
      books: prev.books.map((b) => 
        b.id === id ? { ...b, price: newPrice } : b
      )
    })),
    
    // D - remove
    removeBook: (id) => set((prev) => ({
      books: prev.books.filter((b) => b.id !== id)
    }))
  }
})