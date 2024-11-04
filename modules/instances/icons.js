import WeatherIcon from "../classes/WeatherIconClass.js";

const dustIcon = new WeatherIcon({fileName: 'dust.svg', desc: 'Dusty conditions'});

const hailIcon = new WeatherIcon({fileName: 'hail.svg', desc: 'Hail'});

const hurricaneIcon = new WeatherIcon({fileName: 'hurricane.svg', desc: 'Hurricane'});

const rainAndSleetMixIcon = new WeatherIcon({fileName: 'rain-and-sleet-mix.svg', desc: 'Rain and sleet'});

const rainAndSnowMixIcon = new WeatherIcon({fileName: 'rain-and-snow-mix.svg', desc: 'Rain and snow'});

const severeThunderstormIcon = new WeatherIcon({fileName: 'severe-thunderstorm.svg', desc: 'Severe thunderstorm'});

const snowAndSleetMixIcon = new WeatherIcon({fileName: 'snow-and-sleet-mix.svg', desc: 'Snow and sleet mix'});

const thunderstormsIcon = new WeatherIcon({fileName: 'thunderstorms.svg', desc: 'Thunderstorms'});

const tornadoIcon = new WeatherIcon({fileName: 'tornado.svg', desc: 'Tornado'});

const tropicalStormIcon = new WeatherIcon({fileName: 'tropical-storm.svg', desc: 'Tropical storm'});

const windIcon = new WeatherIcon({fileName: 'thunderstorms.svg', desc: 'Wind'});

const clearDayIcon = new WeatherIcon({fileName: "clear-day.svg", desc: 'Clear sky (Day)'});
const clearNightIcon = new WeatherIcon({fileName: "clear-night.svg", desc: 'Clear sky (Night)'});

const cloudy1DayIcon = new WeatherIcon({fileName: "cloudy-1-day.svg", desc: 'Partly cloudy (Day)'});
const cloudy2DayIcon = new WeatherIcon({fileName: "cloudy-2-day.svg", desc: 'Mostly cloudy (Day)'});
const cloudy3DayIcon = new WeatherIcon({fileName: "cloudy-3-day.svg", desc: 'Cloudy (Day)'});

const cloudy1NightIcon = new WeatherIcon({fileName: "cloudy-1-night.svg", desc: 'Partly cloudy (Night)'});
const cloudy2NightIcon = new WeatherIcon({fileName: "cloudy-2-night.svg", desc: 'Mostly cloudy (Night)'});
const cloudy3NightIcon = new WeatherIcon({fileName: "cloudy-3-night.svg", desc: 'Cloudy (Night)'});

const fogIcon = new WeatherIcon({fileName: 'fog.svg', desc: 'Fog'});
const fogDayIcon = new WeatherIcon({fileName: 'fog-day.svg', desc: 'Fog (Day)'});
const fogNightIcon = new WeatherIcon({fileName: 'fog-night.svg', desc: 'Fog (Night)'});

const frostIcon = new WeatherIcon({fileName: 'frost.svg', desc: 'Frost'});
const frostDayIcon = new WeatherIcon({fileName: 'frost-day.svg', desc: 'Frost (Day)'});
const frostNightIcon = new WeatherIcon({fileName: 'frost-night.svg', desc: 'Frost (Night)'});

const hazeIcon = new WeatherIcon({fileName: 'haze.svg', desc: 'Haze'});
const hazeDayIcon = new WeatherIcon({fileName: 'haze-day.svg', desc: 'Haze (Day)'});
const hazeNightIcon = new WeatherIcon({fileName: 'haze-night.svg', desc: 'Haze (Night)'});

const isolatedThunderstormsIcon = new WeatherIcon({fileName: 'isolated-thunderstorms.svg', desc: 'Isolated Thunderstorms'});
const isolatedThunderstormsDayIcon = new WeatherIcon({fileName: 'isolated-thunderstorms-day.svg', desc: 'Isolated Thunderstorms (Day)'});
const isolatedThunderstormsNightIcon = new WeatherIcon({fileName: 'isolated-thunderstorms-night.svg', desc: 'Isolated Thunderstorms (Night)'});

const rainy1Icon = new WeatherIcon({fileName: 'rainy-1.svg', desc: 'Partly rainy'});
const rainy2Icon = new WeatherIcon({fileName: 'rainy-2.svg', desc: 'Mostly rainy'});
const rainy3Icon = new WeatherIcon({fileName: 'rainy-3.svg', desc: 'Rainy'});

const rainy1DayIcon = new WeatherIcon({fileName: 'rainy-1-day.svg', desc: 'Partly rainy (Day)'});
const rainy2DayIcon = new WeatherIcon({fileName: 'rainy-2-day.svg', desc: 'Mostly rainy (Day)'});
const rainy3DayIcon = new WeatherIcon({fileName: 'rainy-3-day.svg', desc: 'Rainy (Day)'});

const rainy1NightIcon = new WeatherIcon({fileName: 'rainy-1-night.svg', desc: 'Partly rainy (Night)'});
const rainy2NightIcon = new WeatherIcon({fileName: 'rainy-2-night.svg', desc: 'Mostly rainy (Night)'});
const rainy3NightIcon = new WeatherIcon({fileName: 'rainy-3-night.svg', desc: 'Rainy (Night)'});

const scatteredThunderstormsIcon = new WeatherIcon({fileName: 'scattered-thunderstorms.svg', desc: 'Scattered thunderstorms'});
const scatteredThunderstormsDayIcon = new WeatherIcon({fileName: 'scattered-thunderstorms-day.svg', desc: 'Scattered thunderstorms (Day)'});
const scatteredThunderstormsNightIcon = new WeatherIcon({fileName: 'scattered-thunderstorms-night.svg', desc: 'Scattered thunderstorms (Night)'});

const snowy1Icon = new WeatherIcon({fileName: 'snowy-1.svg', desc: 'Partly snowy'});
const snowy2Icon = new WeatherIcon({fileName: 'snowy-2.svg', desc: 'Mostly snowy'});
const snowy3Icon = new WeatherIcon({fileName: 'snowy-3.svg', desc: 'Snowy'});

const snowy1DayIcon = new WeatherIcon({fileName: 'snowy-1-day.svg', desc: 'Partly snowy (Day)'});
const snowy2DayIcon = new WeatherIcon({fileName: 'snowy-2-day.svg', desc: 'Mostly snowy (Day)'});
const snowy3DayIcon = new WeatherIcon({fileName: 'snowy-3-day.svg', desc: 'Snowy (Day)'});

const snowy1NightIcon = new WeatherIcon({fileName: 'snowy-1-night.svg', desc: 'Partly snowy (Night)'});
const snowy2NightIcon = new WeatherIcon({fileName: 'snowy-2-night.svg', desc: 'Mostly snowy (Night)'});
const snowy3NightIcon = new WeatherIcon({fileName: 'snowy-3-night.svg', desc: 'Snowy (Night)'});

const undefinedIcon = new WeatherIcon({fileName: 'undefined.svg', desc: 'Undefined weather'})


const icons = {

    'dustIcon': dustIcon,
    
    'hailIcon': hailIcon,

    'hurricaneIcon': hurricaneIcon,

    'rainAndSnowMixIcon': rainAndSnowMixIcon,
    
    'rainAndSleetMixIcon': rainAndSleetMixIcon,

    'severeThunderstormIcon': severeThunderstormIcon,

    'snowAndSleetMixIcon': snowAndSleetMixIcon,

    'thunderstormsIcon': thunderstormsIcon,

    'tornadoIcon': tornadoIcon,

    'tropicalStormIcon': tropicalStormIcon,

    'windIcon': windIcon,

    'clearDayIcon': clearDayIcon,
    'clearNightIcon': clearNightIcon,

    'cloudy1DayIcon': cloudy1DayIcon, 
    'cloudy2DayIcon': cloudy2DayIcon,
    'cloudy3DayIcon': cloudy3DayIcon,

    'cloudy1NightIcon': cloudy1NightIcon, 
    'cloudy2NightIcon': cloudy2NightIcon,
    'cloudy3NightIcon': cloudy3NightIcon,

    'fogIcon': fogIcon,
    'fogDayIcon': fogDayIcon,
    'fogNightIcon': fogNightIcon,

    'frostIcon': frostIcon,
    'frostDayIcon': frostDayIcon,
    'frostNightIcon': frostNightIcon,

    'hazeIcon': hazeIcon,
    'hazeDayIcon': hazeDayIcon,
    'hazeNightIcon': hazeNightIcon,

    'isolatedThunderstormsIcon': isolatedThunderstormsIcon,
    'isolatedThunderstormsDayIcon': isolatedThunderstormsDayIcon,
    'isolatedThunderstormsNightIcon': isolatedThunderstormsNightIcon,

    'rainy1Icon': rainy1Icon,
    'rainy2Icon': rainy2Icon,
    'rainy3Icon': rainy3Icon,

    'rainy1DayIcon': rainy1DayIcon,
    'rainy2DayIcon': rainy2DayIcon,
    'rainy3DayIcon': rainy3DayIcon,

    'rainy1NightIcon': rainy1NightIcon,
    'rainy2NightIcon': rainy2NightIcon,
    'rainy3NightIcon': rainy3NightIcon,
    
    'scatteredThunderstormsIcon': scatteredThunderstormsIcon,
    'scatteredThunderstormsDayIcon': scatteredThunderstormsDayIcon,
    'scatteredThunderstormsNightIcon': scatteredThunderstormsNightIcon,

    'snowy1Icon': snowy1Icon,
    'snowy2Icon': snowy2Icon,
    'snowy3Icon': snowy3Icon,

    'snowy1DayIcon': snowy1DayIcon,
    'snowy2DayIcon': snowy2DayIcon,
    'snowy3DayIcon': snowy3DayIcon,

    'snowy1NightIcon': snowy1NightIcon,
    'snowy2NightIcon': snowy2NightIcon,
    'snowy3NightIcon': snowy3NightIcon,

    'undefinedIcon': undefinedIcon,
};

export { icons as icons };