export const POST_MESSAGE = 'CHANNEL:CHAT:MESSAGE:POST';

export interface PostMessage {
    text: string;
    channelId: number;
}
