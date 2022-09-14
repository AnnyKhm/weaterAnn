export class CurrentWeather  {
    constructor (
        public sityName: string,
        public temp: string,
        public icon: string,
        public WeatherKind: string,
        public MaxTemp: string,
        public MinTemp: string,
    ) {}
}