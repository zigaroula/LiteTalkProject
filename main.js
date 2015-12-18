var dogeTopic = [
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","dogeBot"]],
    [["KEY", "_htmlprefix"],				["VAL", "doge"]],
    [["KEY", "toto"],                       ["VAL", 2], ["TYPE", "INT"], ["ONASK", "Wow, such toto"]]
];

var dogeBot = new BOT_makeBot("dogeBot","dogeTopic");
BOT_theBotId		= "dogeBot";
BOT_theTopicId		= "dogeTopic";