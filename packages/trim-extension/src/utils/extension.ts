export function trimExtension(
	filePath: string,
	options?: { allExtensions?: boolean }
): string {
	if (options?.allExtensions) {
		return filePath.replace(/\..+$/, '')
	} else {
		return filePath.replace(/\.[^.]+$/, '')
	}
}
