#!/usr/bin/osascript -l JavaScript
ObjC.import('Cocoa')

var itunes = Application("com.apple.iTunes")  
var titlelist = getObjectFromJSONFile("artist.json")
titlelist.forEach(title => {title.keyexp = new RegExp(title.key)})
itunes.selection().forEach(track => {
  var trackName = track.name().normalize()
  var result = titlelist.some(title => {
    if (trackName.match(title.keyexp)) {
      console.log("matched:"+trackName)
      track.artist = title.artist
      track.album = title.album
      return true
    }
  })
  if (!result) console.log("NOT matched:"+trackName)
})

function getObjectFromJSONFile(fileName) {
  return JSON.parse($.NSString.stringWithContentsOfFileEncodingError(fileName, $.NSUTF8StringEncoding, $()).UTF8String)
}
