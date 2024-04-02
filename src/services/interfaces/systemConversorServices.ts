export interface SystemConversor {
    convert(value: string, from: string, to: string): Promise<string>;
}
