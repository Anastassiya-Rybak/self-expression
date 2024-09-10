export const useHandleCall = async (userMessage) => {
    //Отправляем информацию на API https://portal-ru.infobip.com/, который перенаправляет сообщение на указанный номер вотсап.
    const config = useRuntimeConfig();
    let response;

    const dataToSend = JSON.stringify({
        "from": "447860099299",
        "to": config.public.infobip.recipient,
        "messageId": "a28dd97c-1ffb-4fcf-99f1-0b557ed381da",
        "content": {
            "text": userMessage
        }
    });

    try {

        response = await fetch("https://dk1yxl.api.infobip.com/whatsapp/1/message/text", {
            method: 'POST',
            headers: {
                "Authorization": `App ${config.public.infobip.apiKey}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: dataToSend,
            redirect: "follow"
        })

    } catch (error) {

        console.error('Ошибка отправки:', error);
        return { response: null, error: error.message };
        
    }
    return response.ok
}