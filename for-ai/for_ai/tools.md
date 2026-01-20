# Tools
在`ToyBox/tools`這個資料夾有提供一些程式工具，
它們不是範例程式，而是`ToyBox`專案的一部份。
以下介紹各個程式工具。

## Calculator
這是個`Read-Eval-Print Loop`形式的互動程式，
純粹只用來計算而已，功能上就是計算機。
不過尚未寫好

## ImageConvert
一個圖片轉換工具，一執行就會在程式所在的資料夾尋找所有副檔名符合的圖片檔案(不會去子資料夾尋找)，
然後進行格式轉換，
將轉換後的檔案們放在同資料夾下的一個子資料夾，
該子資料夾名字會是output。

## Player
這是個專為`ToyBox`客製化的`Lua`直譯器，
會搭配`ToyBox/modules`裡面的`Lua extension module`來使用。

## PlayerGUI
這是`player`的分支版本，提供一個小視窗來決定要開啟哪一份腳本，
小視窗取代了名為`default-config.lua`的設定檔。
我不確定這個小視窗是否真的能帶來使用上的便利。

## Interpreter
這個是 Lua 官方的直譯器，這裡順便幫忙編譯出來。

## TextEditor
用來讀取並修改文字檔的小工具

## DetectGL
藉由 GLEW 來判斷 OpenGL 的版本，只是個圖方便的小工具
