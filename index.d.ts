export as namespace jsminiUrl;

export function parse(url: string, parseQueryString?: boolean|object): object;
export function format(urlObj: object, stringifyQueryString?: object): string;
