module.exports = {
  rules: {
    'color-no-invalid-hex': true, // Запрещает неверные HEX-коды (например, #12g, #ffff).
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }], // Требует нижний регистр для ключевых слов значений (например, red, none).
    'property-no-unknown': true, // Запрещает неизвестные свойства (например, colr, bakground).
    'declaration-block-no-duplicate-properties': true, // Запрещает дублирующиеся свойства в блоках деклараций.
    'declaration-block-no-shorthand-property-overrides': true, // Запрещает сокращённые свойства, которые переопределяют длинные свойства.
    'media-feature-name-no-unknown': true, // Запрещает неизвестные имена медиа-фич (например, widht, colr).
    'comment-no-empty': true, // Запрещает пустые комментарии.
    'no-descending-specificity': true, // Запрещает селекторы с убывающей специфичностью.
    'no-duplicate-selectors': true, // Запрещает дублирующиеся селекторы.
    'no-invalid-position-at-import-rule': true, // Запрещает некорректные позиции для @import правил.
    'alpha-value-notation': 'number', // Требует числовую нотацию для альфа-значений (например, 0.5 вместо 50%).
    'color-function-notation': 'modern', // Требует современную нотацию для цветовых функций (например, rgb(255 0 0 / 1) вместо rgb(255, 0, 0)).
    'color-hex-length': 'short', // Требует короткую форму для HEX-кодов (например, #fff вместо #ffffff).
    'length-zero-no-unit': true, // Запрещает единицы измерения для значений с нулём (например, 0px, 0em).
    'function-url-quotes': 'never', // Запрещает кавычки вокруг URL в функциях (например, url(image.png) вместо url('image.png')).
    'import-notation': 'url', // Требует использование нотации URL для @import правил (например, @import url('style.css')).
    'shorthand-property-no-redundant-values': true, // Запрещает сокращённые свойства с избыточными значениями (например, margin: 10px 10px 10px 10px).
    'declaration-no-important': true, // Запрещает использование !important в декларациях.
    'declaration-block-single-line-max-declarations': 1, // Ограничивает количество деклараций в однострочных блоках деклараций до 1.
    'no-unknown-animations': true, // Запрещает использование неизвестных анимаций.
    'selector-type-case': 'lower', // Требует нижний регистр для типов селекторов (например, div, span).
    'rule-empty-line-before': 'always', // Требует пустую строку перед правилами.
    'at-rule-empty-line-before': 'always', // Требует пустую строку перед at-правилами.
    'selector-class-pattern': null, // Отключает проверку шаблона для имён классов селекторов.
    'font-family-name-quotes': 'always-where-recommended', // Требует кавычки для имён шрифтов, где это рекомендуется (например, "Open Sans").
  },
};
