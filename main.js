// Реализовать класс, описывающий новостную ленту.
// 	Класс должен содержать:
// 	■ массив новостей;
// ■ get-свойство, которое возвращает количество новостей;
// ■ метод для вывода на экран всех новостей;
// ■ метод для добавления новости;
// ■ метод для удаления новости;

const input1 = document.querySelector(".name");
const input2 = document.querySelector(".des");
const input3 = document.querySelector(".date");
const content = document.querySelector(".content");
const divNews = document.querySelector(".news");

class ListNews {
  constructor() {
    this.newsArray = [];
  }
  addNew() {
    this.newsArray.push({
      id: new Date().getMilliseconds(),
      name: input1.value,
      description: input2.value,
      date: input3.value,
    });
    this.render();
  }
  render() {
    divNews.innerHTML = `${this.newsArray.map(
      (item) =>
        `<div class="cardNew"><ul>
        <li><h3>Назва Новини: </h3>${item.name}</li>
        <li><h3>Опис: </h3>${item.description}</li>
        <li><h3>Дата: </h3>${item.date}</li>
        </ul>
        <button onclick="listNews.removeNew(event)" class="${item.id}">Delete</button></div>
        `
    )}`;
  }
  removeNew(e) {
    const id = Number(e.composedPath()[0].classList.value);
    this.newsArray = this.newsArray.filter((item) => {
        return id !== item.id;
      });
    this.render();
  }
  lengthNews(){
    alert('Кількість новин : '+ this.newsArray.length)
  }
}
const listNews = new ListNews();
