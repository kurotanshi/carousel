# Vue Carousel

## 檔案開啟
---
  1. 套件使用 yarn，請先 yarn
  2. vue 環境使用 vite 開啟檔案使用 yarn dev (檔案未打包)

## 功能構想
---
  1. 顯示輪播圖： data 透過 props 傳遞進入元件，使用 v-for 顯示
  2. 顯示第一張： 用 v-if 判斷 id === show 響應式物件初始值
  3. 箭頭事件： 點擊左右鍵 @click 函式，改變 show 數值
  4. 逗點： v-for 顯示幾個逗點; :class active當前顯示樣式 ; @click 函式
  5. 自動輪播： setInterval 間隔動畫，執行右鍵動畫、滑鼠事件 停止間隔動畫
  6. 動畫： transition-group 顯示進場與退場動畫