export function trimExtension(path: string): string {
	return path.replace(/\.[^.]+$/, '');
}
