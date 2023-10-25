/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Props<T> {
  props: T;
}

class Component {
  constructor(public props) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
