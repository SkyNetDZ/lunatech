export class Country {

  constructor(
    public code: string,
    public continent: string,
    public id: number,
    public keywords: string,
    public name: string,
    public wikipedia_link: string
  ) {}
  static fromJsonList(array): Country[] {
    return array.map(json => Country.fromJson(json));
  }
  static fromJson({code, continent, id, keywords, name, wikipedia_link}): Country {
    return new Country(code, continent, id, keywords, name, wikipedia_link);
  }
}
