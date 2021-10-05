// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        const messXample = ['Wtf :v', 'có làm thì mới có ăn, không làm mà đòi có ăn thì ăn cứt 💩💩', 'm không thót được đâu con trai, tu bi con tờ niu ≧◉◡◉≦','m nói gì đó', 'cặx cút', 'tao đánh m chết ❀◕ ‿ ◕❀', 'cặx cút', 'mm', 'clgt', 'cặx cút', 'md', 'cc', 'mọe mày', 'mất dạy', 'có làm thì mới có ăn, không làm mà đòi có ăn thì ăn cứt 💩💩'];
        this.onMessage(async (context, next) => {
            const mess = context.activity.text.trim();
            if (mess.search('đòi có ăn') >= 1) {
                await context.sendActivity('ăn cứt 💩💩');
            } else if (mess.search('phelan sao') >= 1) {
                await context.sendActivity('bị ghệ bỏ haha');
            } else if (mess.search('Nancy sao') >= 1) {
                await context.sendActivity('Nancy ngáo chứ sao');
            }else {
                const random = Math.floor(Math.random() * messXample.length);
                await context.sendActivity(messXample[random]);
            }
        });
        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Thằng nào mới vào dúp này dậy, chào tao 1 tiếng coi!';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;
