//var regex = new RegExp ('(.)(.)(.)(.)(.)(.)(.)\\7\\6\\5\\4\\3\\2\\1', 'g')

/* "aa bbb cccc".match(regex)             should return [ 'aa', 'bbb', 'cccc' ]
"aaa bcccd".match(regex)               should return [ 'aaa' ]
"_x_x_ --- ~~|~~".match(regex)         should return [ '_x_x_' ]
"ABCDCBA ABABABA".match(regex)         should return [ 'ABCDCBA', 'ABABABA' ]
"121 1221 13577531 11211".match(regex) should return [ '121', '1221', '11211' ]
"aabbbcccc d".match(regex)             should return null
"1    1".match(regex)                  should return null 
"abbA CdDc".match(regex)               should return null */
