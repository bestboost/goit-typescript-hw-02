/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Data {
  props: string;
}

interface Data {
  title: string;
}

class Component<Data> {
  constructor(public props: Data) {}
}

class Page extends Component<Data> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
