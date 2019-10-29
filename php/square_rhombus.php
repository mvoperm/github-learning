<?php

echo '<h4>Вписать ромб в квадрат (тестовое задание).</h4>';

$number = 13;

function rhombus_in_square($side) {
  $figure = [];
  $k = ($side - 1) / 2;
  for ($i = 0; $i < $side; $i++) {
    $ki = abs($i - $k);
    for ($j= 0; $j < $side; $j++) {
      $kj = abs($j - $k);
      $figure[$i][$j] = ($ki + $kj) > $k ? '0' : '2';
    }
  }
  return $figure;
}

function render($side) {
  $array_to_render = rhombus_in_square($side);
  for ($i = 0; $i < count($array_to_render); $i++) {
    for ($j= 0; $j < count($array_to_render); $j++) {
      echo $array_to_render[$i][$j];
    }
    echo '<br>';
  }
}

render($number);

?>
