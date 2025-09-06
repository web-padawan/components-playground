export default function (config) {
  // See https://www.11ty.dev/docs/config/
  config.setInputDirectory('content');
  config.setOutputDirectory('dist');
  config.setDataDirectory('../_data');
  config.setIncludesDirectory('../_includes');

  config.addPassthroughCopy('css');
  config.addPassthroughCopy('js');

  config.addCollection('components', (api) => {
    return api.getFilteredByGlob('./content/components/**/*').sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });

  config.addShortcode('component', (tagName) => {
    return `${tagName}`; // TODO use "safe"
  });

  config.addFilter('select', (attr) => {
    const type = attr.type.text;
    const options = type.split(`|`).map((value, idx) => {
      const v = value.replaceAll(`'`, '').trim();
      return `<option ${idx === 0 ? 'selected' : ''} value="${v}">${v}</option>`;
    }).join('\n');

    return `<select id="${attr.name}" class="control__value" name="${attr.name}">${options}</select>`;
  });
}
