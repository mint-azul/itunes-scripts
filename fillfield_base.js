#!/usr/bin/osascript -l JavaScript

var itunes = Application("com.apple.iTunes")  
var titlelist = getTitleList()
titlelist.forEach(title => {title.keyexp = new RegExp(title.key)})
itunes.selection().forEach(track => {
  titlelist.some(title => {
    if (track.name().normalize().match(title.keyexp)) {
      track.artist = title.artist
      track.album = title.album
      return true
    }
  })
})

function getTitleList() {
return  [ 
{key:"りゅうおうのおしごと",artist:"日高里菜",album:"GA文庫『りゅうおうのおしごと！〜ラジオ研究会〜』"},
{key:"美佳子＠ぱよぱよ",artist:"高橋美佳子",album:"美佳子＠ぱよぱよ"}
];
}
