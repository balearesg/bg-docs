export function getHandlers(isDefault: any): string[] {
    const handlers: { default: string[], pathname: string[] } = { 
        default: [
            'session'
        ],
        pathname: [
            'session'
        ]
    };
    return (isDefault) ? handlers.default : handlers.pathname;
}
