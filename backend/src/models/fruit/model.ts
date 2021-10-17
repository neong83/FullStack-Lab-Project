interface IFruit {
  id: string;
  name: string;
  weight: string;
  season: string;
  image: string;
}

class Fruit {
  id: string;
  name: string;
  weight: string;
  season: string;
  image: string;

  constructor(data: Partial<IFruit>) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.weight = data.weight || "";
    this.season = data.season || "";
    this.image = data.image || "";
  }
}
