import { Collection, ColorResolvable, Message } from "discord.js";
import GameData from "./data/interfaces/GameData.interface";
import Settings from "./data/interfaces/Settings.interface";
import Winners from "./data/interfaces/Winners.interface";
export declare class DiscordUNO {
    embedColor?: ColorResolvable;
    storage: Collection<any, GameData>;
    gameCards: Collection<any, {
        red: ({
            name: string;
            color: string;
            value: number;
            count: number;
            inPlay: number;
            image: string;
        } | {
            name: string;
            color: string;
            value: string;
            count: number;
            inPlay: number;
            image: string;
        })[];
        yellow: ({
            name: string;
            color: string;
            value: number;
            count: number;
            inPlay: number;
            image: string;
        } | {
            name: string;
            color: string;
            value: string;
            count: number;
            inPlay: number;
            image: string;
        })[];
        green: ({
            name: string;
            color: string;
            value: number;
            count: number;
            inPlay: number;
            image: string;
        } | {
            name: string;
            color: string;
            value: string;
            count: number;
            inPlay: number;
            image: string;
        })[];
        blue: ({
            name: string;
            color: string;
            value: number;
            count: number;
            inPlay: number;
            image: string;
        } | {
            name: string;
            color: string;
            value: string;
            count: number;
            inPlay: number;
            image: string;
        })[];
        wild: {
            name: string;
            color: string;
            value: string;
            count: number;
            inPlay: number;
            image: string;
        }[];
    }>;
    settings: Collection<any, Settings>;
    winners: Collection<any, Winners[]>;
    version: {
        current: any;
        updates: (message?: Message) => Promise<Message | "There is an update availiable for discord-uno! Consider checking it out!">;
    };
    constructor(embedColor?: ColorResolvable);
    /**
     * To create a new UNO game, call the createGame() method. This method accepts one parameter, which is the Message object. This allows discord-uno to send and handle messages on its own. This method will return a message letting users know that they can now join the game. (Games are based off of channel ID).
     */
    createGame(message: Message): Promise<Message>;
    /**
     * To add a user to the current game, call the addUser() method. This method accepts one parameter, which is the Message object. This method handles adding users to the game in the current channel. This will automatically start the game if the user count reaches ten.
     */
    addUser(message: Message): Promise<Message>;
    /**
     * To remove a user from the game, call the removeUser() method. This method accepts one parameter, whcih is the Message object. This method will handle removing users from the game and returning their cards to the "deck".
     */
    removeUser(message: Message): Promise<Message | void>;
    /**
     * To view your current hand in the game, call the viewCards() method. This method accepts one parameter, which is the Message object. This method will handle showing users the current cards that they have in their hand. It will return a dirrect message to the user with their hand.
     */
    viewCards(message: Message): Promise<Message>;
    /**
     * To manually start the game, call the startGame() method. This method accepts one parameter, which is the message object. This method will only work if the game has at least two users entered. Otherwise it will return. On success this method will send each user their cards and a starting message to the game channel.
     */
    startGame(message: Message): Promise<Message>;
    /**
     * To play a card in your hand, call the playCard() method. This method accepts one parameter, which is the message object. This method will handle playing the card called. On success, it will remove the card from their hand and replace the top card. On fail it will return.
     */
    playCard(message: Message, card: string): Promise<Message>;
    /**
     * To view the current state of the game, call the viewTable() method. This method has one parameter, which is the Message object. This method will handle creating and sending an image to the channel with all the current information of the game. Including rotation, whos turn it is, how many cards each user has, whos in the game, and the top card of the pile.
     */
    viewTable(message: Message): Promise<Message>;
    /**
     * To end the game in its current state, call the endGame() method. This method accepts one parameter, which is the message object. This method will end the game in whatever the current state is. It will determine the winners based off of how many cards users have left in there hand, then it will return a message with the winners.
     */
    endGame(message: Message): Promise<Message>;
    /**
     * To both protect yourself from UNO! Callouts or call someone else out for having one card left, call the UNO() method. This method accepts one parameter, which is the message object. This method will handle both protecting yourself from future UNO! callouts, and calling other users out that haven't been protected.
     */
    UNO(message: Message): Promise<Message>;
    /**
     * To view the current winners of the game (if there are any), call the viewWinners() method. This method has one parameter, which is the Message object. This method will handle creating and sending an image identical to the one sent in the endGame() method. The only difference is this method can be called at any time to view the current standings of the game.
     */
    viewWinners(message: Message): Promise<Message>;
    /**
     * To close the current game without scoring results, call the closeGame() method. This method accepts one parameter, which is the message object. This method will close the game without scoring any of the users and will immediately end the game. No score will be output and a new game can be created.
     */
    closeGame(message: Message): Promise<Message>;
    /**
     * To add a card to your hand, call the draw() method. This method accepts one parameter, which is the message object. This method will handle adding cards to the users hand. Players can't draw if it isn't their turn and if they have a card they can play, they can't draw.
     */
    draw(message: Message): Promise<Message>;
    /**
     * To update the servers UNO! settings, call the updateSettings() method. This method has one parameter, which is the Message object. This method handles updating the servers UNO! settings. (The settings are stored by Channel ID). It will send a message and react to the message, allowing you to change settings based on reactions.
     */
    updateSettings(message: Message): Promise<void | Message>;
    /**
     * To view the current servers UNO! settings, call the viewSettings() method. This method has one parameter, which is the Message object. This method will return a message showing which customizable settings have been turned on or off.
     */
    viewSettings(message: Message): Promise<Message>;
    private checkTop;
    private doSpecialCardAbility;
    private returnCards;
    private createCards;
    private outOfCards;
    private nextTurn;
    private displayWinners;
}
//# sourceMappingURL=index.d.ts.map