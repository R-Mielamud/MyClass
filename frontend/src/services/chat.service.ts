import callWebApi from '../helpers/callWebApi.helper';

export const getMessages = async (channelid: number): Promise<WebApi.Entity.Message[]> => {
    const res: Response = await callWebApi({
        endpoint: 'message/',
        method: 'GET',
        query: {
            channelid,
        },
    });

    return (await res.json()) as WebApi.Entity.Message[];
};

export const postMessage = async (text: string, channelId: number): Promise<WebApi.Entity.Message> => {
    const res: Response = await callWebApi({
        endpoint: 'message/',
        method: 'POST',
        body: {
            text,
            channel: channelId,
        },
    });

    return (await res.json()) as WebApi.Entity.Message;
};
