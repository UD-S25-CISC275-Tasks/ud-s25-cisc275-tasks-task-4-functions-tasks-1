export function concatenateStrings(str1: string, str2: string): string {
    return `${str1} ${str2}`;
}

export function checkTemperature(temp: number): string {
    if (temp < 0) return "Freezing";
    if (temp >= 0 && temp <= 30) return "Cold";
    if (temp > 30 && temp <= 60) return "Moderate";
    return "Hot";
}
