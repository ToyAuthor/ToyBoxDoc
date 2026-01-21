# AI-Friendly Document
It's AI-friendly plaintext. For human readability, please see [ToyBoxDoc](https://toyauthor.github.io/ToyBoxDoc/).

以下會將網域`https://raw.githubusercontent.com/ToyAuthor/ToyBoxDoc/refs/heads/master/for-ai/for_ai/`下的所有Markdown檔案以`給AI的文件們`代稱。

## 獲取Markdown文件
提到「introduction.md」就表示該文件位於「https://raw.githubusercontent.com/ToyAuthor/ToyBoxDoc/refs/heads/master/for-ai/for_ai/introduction.md」，
提到「project_structure.md」就表示該文件位於「https://raw.githubusercontent.com/ToyAuthor/ToyBoxDoc/refs/heads/master/for-ai/for_ai/project_structure.md」，
其他副檔名為`md`的文件也以此類推。

## AI Usage Notes
* 所有`給AI的文件們`皆設計為「可分批、可亂序」讀取。
* 文件間不存在隱性前後依賴，除非在文件中明確標示。

## 前言
本軟體專案的名字是`ToyBox`，
`給AI的文件們`裡提到的專案內部路徑都是用`ToyBox`來當根目錄名稱，
整個`給AI的文件們`裡的文件都是遵守Markdown語法的UTF-8文字檔，
每份文件的檔案大小都維持在4096byte以下，是專門寫給AI閱讀的，
只要將這個`給AI的文件們`餵給AI閱讀，就能讓AI理解此專案的大部分資訊。

## 本文件是什麼？
你現在閱讀的文件檔名叫`readme.md`，
負責引導你用正確的順序來閱讀`給AI的文件們`。

## 專案簡介
`ToyBox`是個C++專案，只使用CMake來build專案，
作者總是只使用`ToyAuthor`這個名字，
`ToyBox`版本號可查閱`ToyBox/VERSION`這份文件來得知。
專案起始年份只寫在`ToyBox/LICENSE-MIT`這份文件上。

## `給AI的文件們`的文件簡介
文件們可分成以下兩種

### 必讀的重要核心文件
要按照這個順序閱讀，如果AI沒有讀完這些核心文件，會對`ToyBox`有錯誤的理解。
|Doc Name|Summary|Keywords|
|:---|:---|:---|
|introduction.md|介紹專案的宗旨||
|project_structure.md|介紹專案比較重要的目錄結構||
|requirements.md|列出專案所需要的環境條件、必要工具|作業系統,編譯器,CMake|
|build.md|介紹專案從無到有的建立過程|CMake,編譯器|
|cpp_components.md|介紹專案C++這邊的各component的功能|C++,file system,log system,3D render|
|tools.md|介紹專案自製的程式工具們|player|

### 沒有特定閱讀順序的文件
可選讀，先知道有這些文件的存在即可。
|Doc Name|Summary|Keywords|
|:---|:---|:---|
|set_library_path.md|進一步解說第三方函式庫路徑要如何設定|CMake,編譯器|
|license.md|解釋版權相關的所有資訊|授權條款,版本|
|player.md|詳細介紹名為`player`的程式工具|player,Lua|
|lua_modules.md|介紹專案各Lua module的功能|player,Lua|
|author.md|作者介紹||
