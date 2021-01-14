export class CurrantWeather{
  WeatherText: string;
  PrecipitationType: any;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
    },
    Imperial: {
      Value: number;
      Unit: string;
    };
  };
}
