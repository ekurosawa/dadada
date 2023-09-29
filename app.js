const [node, script, ...names] = process.argv
names.forEach(flatter);

if (names.length == 0){
    say('"node script.js TARO HANAKO" なんて感じに名前を入れて');
}

function flatter(name) {
    const praise_words = ['素敵', 'スマート', 'オシャレ'];
    let comment = '';

    for (word of praise_words) {
        comment = comment + `${name}さんは${word}ですね\n`;
    }

    praise_words.forEach(word => {
        comment = comment + `${name}さんは本当に${word}ですね\n`;
    });

    for (let i = 0; i < praise_words.length; i++) {
        comment = comment + `${name}さんはつくづく${praise_words[i]}ですね\n`;
    }

    say(comment);
}

function say(comment) {
    console.log(comment);
}

