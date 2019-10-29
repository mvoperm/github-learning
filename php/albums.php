<?php

echo '<h4>Фотогалерея (тестовое задание).</h4>';

$albums_quantity = 3;
$path = '../temp/gallery';

class Album {
  public $name = '';
  public function get_cover() {
    return $cover = "{$this -> name}.jpg";
  }
}

$albums = [];
for ($i = 0; $i < $albums_quantity; $i++) {
  $album = new Album;
  $album -> name = 'album' . ($i + 1);
  array_push($albums, $album);
}

$menu_html_code = '';
for ($i = 0; $i < $albums_quantity; $i++) {
  $menu_html_code .= "<figure title='{$albums[$i] -> name}' style='height:200px; width:200px;'><a href='{$path}/{$albums[$i] -> name}'><img alt='{$albums[$i] -> name}' src='{$path}/{$albums[$i] -> get_cover()}' style='width:184px; padding:2px; margin:2px;'></a><figcaption>{$albums[$i] -> name}</figcaption></figure>";
}
echo $menu_html_code;

// Сложность кода и оформления можно увеличивать сколько угодно

?>
