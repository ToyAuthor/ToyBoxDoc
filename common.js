
const sharedVersionString = " v0.1.0";

function append_version_string(elementId)
{
	const element = document.getElementById(elementId);

	if (element)
	{
		const originalText = element.textContent;
		element.textContent = originalText + sharedVersionString;
	}
}
