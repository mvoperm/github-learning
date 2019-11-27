<?php

echo '<h4>Составление фразы (тестовое задание).</h4>';

// Объявление класса Phrase
class Phrase {
  public $text;
  // Получение переменных для конструирования фразы
  private function get_variables() {
    $number = rand(0, 1) ? 'три' : 'четыре';
    $brightness = rand(0, 1) ? 'светло-' : 'тёмно-';
    $color = rand(0, 1) ? 'зелёные' : 'красные';
    $place = rand(0, 1) ?
      'траве' :
      (rand(0, 1) ? 'высоком' : 'низком') . ' заборе';
    return [
      'number' => $number,
      'brightness' => $brightness,
      'color' => $color,
      'place' => $place,
    ];
  }
  // Фунция-конструктор фразы
  public function __construct() {
    $variables = $this -> get_variables();
    $this -> text = "{$variables['number']} {$variables['brightness']}{$variables['color']} птички сидели на {$variables['place']}";
  }
}

// Функция создания всего текста с требуемым количеством строк (одна фраза - одна строка)
$get_phrase = function($lines_quantity) {
  $total_phrase = '';
  for ($i = 1; $i <= $lines_quantity; $i++) {
    $phrase = new Phrase;
    $total_phrase .= "<p>{$i}) {$phrase -> text}</p>";
  }
  return $total_phrase;
};

// Определение количества строк с фразой и распечатка всего текста
$lines = 20;
echo $get_phrase($lines);

?>
